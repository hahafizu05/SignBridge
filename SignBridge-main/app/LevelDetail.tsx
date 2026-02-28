import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { levels } from '../constants/levelsData';

export default function LevelDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ levelId?: string }>();

  const parsedId = params.levelId ? Number(params.levelId) : NaN;
  const levelId = Number.isFinite(parsedId) && parsedId > 0 ? parsedId : 1;

  const level = levels.find((l) => l.id === levelId) ?? levels[0];

  const handleGoToTest = () => {
    router.push({
      pathname: '/CameraTest',
      params: { levelId: String(level.id) },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.levelTitle}>Level {level.id}</Text>
        <Text style={styles.letter}>{level.letter}</Text>

        <View style={styles.card}>
          <Image source={level.imageSource} style={styles.signImage} resizeMode="contain" />
          <Text style={styles.instructions}>{level.instructions}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.testButton} onPress={handleGoToTest}>
          <Text style={styles.testButtonText}>LET&apos;S TEST</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040015',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelTitle: {
    color: '#8BE9FD',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 8,
  },
  letter: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: '700',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'rgba(10, 10, 40, 0.9)',
    borderWidth: 1,
    borderColor: '#8BE9FD',
    marginBottom: 32,
    alignItems: 'center',
  },
  signImage: {
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  instructions: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  testButton: {
    width: '100%',
    borderRadius: 999,
    paddingVertical: 14,
    backgroundColor: '#50FA7B',
    shadowColor: '#50FA7B',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    marginBottom: 12,
  },
  testButtonText: {
    color: '#040015',
    fontSize: 16,
    letterSpacing: 2,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  secondaryButtonText: {
    color: '#8BE9FD',
    fontSize: 13,
  },
});

