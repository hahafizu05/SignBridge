import { useState } from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Use relative path from app/(auth)/login.tsx to assets/images
const galaxyBg = require('../../assets/images/Main - Galaxy bg.png');

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: hook this up to your auth logic
    console.log('Login pressed', { username, password });
  };

  // Debug: Log the image source
  console.log('Galaxy BG source:', galaxyBg);
  console.log('Type:', typeof galaxyBg);
  console.log('Platform:', Platform.OS);
  console.log('Full object:', JSON.stringify(galaxyBg, null, 2));

  return (
    <ImageBackground
      source={galaxyBg}
      resizeMode="cover"
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO SIGNBRIDGE!</Text>

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Username :</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
              placeholderTextColor="#b5b5c8"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Password :</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#b5b5c8"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleLogin}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>SIGN UP</Text>
              <View style={styles.buttonIconWrapper}>
                <View style={styles.buttonIconCircle}>
                  <View style={styles.buttonIconImageWrapper}>
                    <Text style={styles.buttonIconEmoji}>👤</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#1a0033', // Temporary fallback color (dark purple) to verify component renders
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '700',
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
  },
  button: {
    marginTop: 16,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5a59c6',
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
  },
  buttonIconWrapper: {
    marginLeft: 16,
  },
  buttonIconCircle: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 4,
  },
  buttonIconImageWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconEmoji: {
    fontSize: 18,
  },
  forgotText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 11,
    color: '#ffffff',
  },
});

