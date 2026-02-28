import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// From app/(auth)/signup.tsx: ../ -> app/, ../../ -> project root
const galaxyBg = require('../../assets/images/Galaxy.png');

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [level] = useState<'Beginner' | 'Intermediate' | 'Expert'>('Beginner');

  return (
    <ImageBackground source={galaxyBg} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME TO SIGNBRIDGE !</Text>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Name :</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Username :</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Choose a username"
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
              placeholder="Create a password"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Which Level Are You At ?</Text>
            <View style={styles.selectWrapper}>
              <Text style={styles.selectValue}>{level}</Text>
              <View style={styles.selectArrow} />
            </View>
            <Text style={styles.levelOptionsText}>
              Beginner • Intermediate (Coming Soon) • Expert (Coming Soon)
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.85} style={styles.button}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>SIGN UP</Text>
              <View style={styles.buttonIconOuter}>
                <View style={styles.buttonIconInner}>
                  <Text style={styles.buttonIconEmoji}>👤</Text>
                </View>
              </View>
            </View>
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
    marginBottom: 32,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  fieldGroup: {
    marginBottom: 16,
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
  selectWrapper: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  selectPlaceholder: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 13,
  },
  selectValue: {
    color: '#000000',
    fontSize: 13,
  },
  selectArrow: {
    width: 12,
    height: 12,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#000000',
    transform: [{ rotate: '-45deg' }],
    marginRight: 2,
  },
  levelOptionsText: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 11,
    textAlign: 'left',
  },
  button: {
    marginTop: 24,
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
});

