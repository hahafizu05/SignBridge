import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

// From app/(auth)/login.tsx: ../ -> app/, ../../ -> project root
const galaxyBg = require('../../assets/images/Galaxy.png');

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <ImageBackground source={galaxyBg} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO SIGNBRIDGE !</Text>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Username :</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password :</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
              secureTextEntry
            />
          </View>

          {/* Login button (no icon) */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.button}
            onPress={() => router.push('/homepage')}
          >
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          {/* Sign up button (with icon) */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.button, styles.signUpButton]}
            onPress={() => router.push('/(auth)/signup')}
          >
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>SIGN UP</Text>
              <View style={styles.buttonIconOuter}>
                <View style={styles.buttonIconInner}>
                  <Text style={styles.buttonIconEmoji}>👤</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.forgotWrapper}>
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
    backgroundColor: 'black',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 3,
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  fieldGroup: {
    marginBottom: 18,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 6,
    fontSize: 13,
    letterSpacing: 1,
  },
  input: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  button: {
    marginTop: 18,
    alignSelf: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: '#6150D8',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 3,
  },
  buttonIconOuter: {
    marginLeft: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    padding: 3,
  },
  buttonIconInner: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconEmoji: {
    fontSize: 16,
  },
  signUpButton: {
    marginTop: 18,
  },
  forgotWrapper: {
    marginTop: 18,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 11,
    color: '#FFFFFF',
  },
});

