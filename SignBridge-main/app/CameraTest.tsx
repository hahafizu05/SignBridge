import { CameraView, useCameraPermissions } from 'expo-camera';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { levels } from '../constants/levelsData';
import type { Level } from '../types/level';

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

/** Gemini API response shape for generateContent */
interface GeminiPart {
  text?: string;
}

interface GeminiContent {
  parts?: GeminiPart[];
}

interface GeminiCandidate {
  content?: GeminiContent;
}

interface GeminiGenerateContentResponse {
  candidates?: GeminiCandidate[];
  error?: { message?: string };
}

type ResultStatus = 'correct' | 'incorrect' | null;

export default function CameraScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ levelId?: string }>();
  const [permission, requestPermission] = useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const [resultStatus, setResultStatus] = useState<ResultStatus>(null);
  const [cameraReady, setCameraReady] = useState(false);

  const cameraRef = useRef<React.ComponentRef<typeof CameraView>>(null);

  const parsedId = params.levelId ? Number(params.levelId) : NaN;
  const levelId = Number.isFinite(parsedId) && parsedId > 0 ? parsedId : 1;
  const level: Level = levels.find((l) => l.id === levelId) ?? levels[0];

  const prompt = `You are classifying a single ASL hand-sign image. The expected letter for this exercise is ${level.letter}. Follow your system instructions exactly: respond with ONE uppercase letter A–Z, or NONE if the sign is unclear or not a standard ASL letter.`;

  const verifySignWithGemini = async (base64Image: string): Promise<boolean> => {
    if (!API_KEY) {
      throw new Error('EXPO_PUBLIC_GOOGLE_API_KEY is not set. Add it to your .env file.');
    }

    const body = {
      contents: [
        {
          parts: [
            {
              inline_data: {
                mime_type: 'image/jpeg',
                data: base64Image,
              },
            },
            { text: prompt },
          ],
        },
      ],
    };

    const res = await fetch(`${GEMINI_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini API error: ${res.status} ${errText}`);
    }

    const data = (await res.json()) as GeminiGenerateContentResponse;

    if (data.error?.message) {
      throw new Error(data.error.message);
    }

    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    const prediction = raw.trim().toUpperCase();

    // Treat missing / malformed response as incorrect
    if (!prediction) {
      return false;
    }

    // Model follows system instruction: A–Z or NONE
    if (prediction === 'NONE') {
      return false;
    }

    if (!/^[A-Z]$/.test(prediction)) {
      return false;
    }

    return prediction === level.letter.toUpperCase();
  };

  const handleCapture = async () => {
    if (!cameraRef.current || !cameraReady || loading) return;

    setLoading(true);
    setResultStatus(null);

    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: true,
      });

      const base64 = photo?.base64;
      if (!base64) {
        setResultStatus('incorrect');
        setLoading(false);
        return;
      }

      const isCorrect = await verifySignWithGemini(base64);
      setResultStatus(isCorrect ? 'correct' : 'incorrect');

      if (isCorrect) {
        setTimeout(() => {
          setResultStatus(null);
          setLoading(false);
          router.replace('/homepage');
        }, 1500);
        return;
      }
    } catch (err) {
      console.error('Capture or Gemini error:', err);
      setResultStatus('incorrect');
    }

    setLoading(false);
  };

  const closeResultModal = () => {
    setResultStatus(null);
  };

  if (!permission) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Checking camera permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          We need access to your camera to test your sign.
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Level {level.id} • Sign the letter &quot;{level.letter}&quot;
        </Text>
        <Text style={styles.subHeaderText}>Position your hand, then tap Capture</Text>
      </View>

      <View style={styles.cameraWrapper}>
        <CameraView
          ref={cameraRef}
          style={styles.cameraView}
          facing="front"
          onCameraReady={() => setCameraReady(true)}
        />
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#8BE9FD" />
            <Text style={styles.loadingText}>Checking your sign...</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.captureButton, loading && styles.captureButtonDisabled]}
          onPress={handleCapture}
          disabled={loading || !cameraReady}
        >
          <Text style={styles.captureButtonText}>CAPTURE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cancelButton}
          onPress={() => router.back()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={resultStatus !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalCard,
              resultStatus === 'incorrect' && styles.modalCardIncorrect,
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                resultStatus === 'incorrect' && styles.modalTitleIncorrect,
              ]}
            >
              {resultStatus === 'correct' ? 'Perfect!' : 'Try Again'}
            </Text>
            <Text style={styles.modalText}>
              {resultStatus === 'correct'
                ? 'You signed the letter correctly.'
                : 'The sign didn\'t match. Try again.'}
            </Text>
            {resultStatus === 'incorrect' && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={closeResultModal}
                activeOpacity={0.85}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020010',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#8BE9FD',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
  },
  subHeaderText: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 13,
  },
  cameraWrapper: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#BD93F9',
    backgroundColor: '#05051A',
    position: 'relative',
  },
  cameraView: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 0, 16, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#8BE9FD',
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
  },
  captureButton: {
    borderRadius: 999,
    paddingVertical: 14,
    backgroundColor: '#50FA7B',
    shadowColor: '#50FA7B',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    marginBottom: 12,
  },
  captureButtonDisabled: {
    opacity: 0.6,
  },
  captureButtonText: {
    color: '#020010',
    fontSize: 16,
    letterSpacing: 2,
  },
  cancelButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelButtonText: {
    color: '#8BE9FD',
    fontSize: 13,
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: '#020010',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  permissionText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  permissionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#8BE9FD',
  },
  permissionButtonText: {
    color: '#8BE9FD',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '78%',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#05051A',
    borderWidth: 1,
    borderColor: '#50FA7B',
    alignItems: 'center',
  },
  modalCardIncorrect: {
    borderColor: '#FF5555',
  },
  modalTitle: {
    color: '#50FA7B',
    fontSize: 22,
    marginBottom: 8,
  },
  modalTitleIncorrect: {
    color: '#FF5555',
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 999,
    backgroundColor: '#BD93F9',
  },
  modalButtonText: {
    color: '#020010',
    fontSize: 14,
    fontWeight: '600',
  },
});
