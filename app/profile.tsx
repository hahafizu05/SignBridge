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

// From app/profile.tsx: ./ -> app/, ../ -> project root
const galaxyBg = require('../assets/images/Galaxy.png');

export default function ProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');

  const handleEditProfile = () => {
    console.log('Edit Profile pressed');
  };

  const handleSaveDetails = () => {
    console.log('Save Details pressed', { name, username, currentLevel });
  };

  return (
    <ImageBackground source={galaxyBg} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        {/* Top navigation icons */}
        <View style={styles.topRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.topIconWrapper}
            onPress={() => router.push('/homepage')}
          >
            <View style={styles.topIconCircle}>
              <Text style={styles.topIconEmoji}>🏠</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.topIconWrapper}
            onPress={() => router.push('/(auth)/login')}
          >
            <View style={styles.topIconCircle}>
              <Text style={styles.topIconEmoji}>⟳</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Avatar illustration */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatarInner}>
              <View style={styles.avatarSky} />
              <View style={styles.avatarGround} />
            </View>
          </View>
        </View>

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
              placeholder="Enter your username"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Current Level :</Text>
            <TextInput
              value={currentLevel}
              onChangeText={setCurrentLevel}
              placeholder="Enter your current level"
              placeholderTextColor="rgba(0,0,0,0.35)"
              style={styles.input}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.smallButton}
              onPress={handleEditProfile}
            >
              <View style={styles.smallButtonInner}>
                <Text style={styles.smallButtonText}>Edit Profile</Text>
                <View style={styles.smallButtonIconOuter}>
                  <View style={styles.smallButtonIconInner}>
                    <Text style={styles.smallButtonIconEmoji}>✏️</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.smallButton}
              onPress={handleSaveDetails}
            >
              <View style={styles.smallButtonInner}>
                <Text style={styles.smallButtonText}>Save Details</Text>
                <View style={styles.smallButtonIconOuter}>
                  <View style={styles.smallButtonIconInner}>
                    <Text style={styles.smallButtonIconEmoji}>💾</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
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
  topRow: {
    position: 'absolute',
    top: 28,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topIconWrapper: {
    padding: 4,
  },
  topIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIconEmoji: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  avatarWrapper: {
    marginBottom: 16,
  },
  avatarOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  avatarInner: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: 'hidden',
    backgroundColor: '#1E1445',
  },
  avatarSky: {
    flex: 2,
    backgroundColor: '#78CCFF',
  },
  avatarGround: {
    flex: 1,
    backgroundColor: '#63BF4A',
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
  buttonRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallButton: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  smallButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#6150D8',
  },
  smallButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 1.5,
  },
  smallButtonIconOuter: {
    marginLeft: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 14,
    padding: 2,
  },
  smallButtonIconInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonIconEmoji: {
    fontSize: 10,
  },
});

