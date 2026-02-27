import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Shared galaxy background
const galaxyBg = require('../assets/images/Galaxy.png');

// Assets for the beginner path
const levelBeginner = require('../assets/images/LevelBeginner.png');
const levelComplete = require('../assets/images/LevelComplete.png');
const rocket = require('../assets/images/Rocket.png');
const greenPlanet = require('../assets/images/GreenPlanet.png');
const purplePlanet = require('../assets/images/PurplePlanet.png');
const groupsPlanets = require('../assets/images/GroupsPlanets.png');
const meteor = require('../assets/images/Meteor.png');
const alien = require('../assets/images/Alien.png');
const alienSpaceship = require('../assets/images/AlienSpaceship.png');
const astronautHappy = require('../assets/images/AstronautHappy.png');
const astronautPlanet = require('../assets/images/AstronautPlanet.png');
const stars = require('../assets/images/Stars.png');
const profileIcon = require('../assets/images/LogOut.png');
const signUpIcon = require('../assets/images/SignUp.png');

// 24 asteroid steps
const A1 = require('../assets/images/Asteroid01.png');
const A2 = require('../assets/images/Asteroid02.png');
const A3 = require('../assets/images/Asteroid03.png');
const A4 = require('../assets/images/Asteroid04.png');
const A5 = require('../assets/images/Asteroid05.png');
const A6 = require('../assets/images/Asteroid06.png');
const A7 = require('../assets/images/Asteroid07.png');
const A8 = require('../assets/images/Asteroid08.png');
const A9 = require('../assets/images/Asteroid09.png');
const A10 = require('../assets/images/Asteroid10.png');
const A11 = require('../assets/images/Asteroid11.png');
const A12 = require('../assets/images/Asteroid12.png');
const A13 = require('../assets/images/Asteroid13.png');
const A14 = require('../assets/images/Asteroid14.png');
const A15 = require('../assets/images/Asteroid15.png');
const A16 = require('../assets/images/Asteroid16.png');
const A17 = require('../assets/images/Asteroid17.png');
const A18 = require('../assets/images/Asteroid18.png');
const A19 = require('../assets/images/Asteroid19.png');
const A20 = require('../assets/images/Asteroid20.png');
const A21 = require('../assets/images/Asteroid21.png');
const A22 = require('../assets/images/Asteroid22.png');
const A23 = require('../assets/images/Asteroid23.png');
const A24 = require('../assets/images/Asteroid24.png');

export default function HomePage() {
  return (
    <ImageBackground source={galaxyBg} style={styles.background} resizeMode="cover">
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Level1Section1 />
        <Level1Section2 />
        <Level1Section3 />
        <Level1Section4 />
        <Level1Section5 />
      </ScrollView>
    </ImageBackground>
  );
}

function Level1Section1() {
  const router = useRouter();

  return (
    <View style={styles.section}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/profile')}>
        <Image source={signUpIcon} style={styles.signUpIcon} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/(auth)/login')}>
        <Image source={profileIcon} style={styles.profileIcon} />
      </TouchableOpacity>
      <Image source={levelBeginner} style={styles.levelBadge} resizeMode="contain" />

      <Image source={A1} style={[styles.asteroid, { top: '28%', left: '8%' }]} />
      <Image source={A2} style={[styles.asteroid, { top: '22%', right: '8%' }]} />
      <Image source={A3} style={[styles.asteroid, { top: '42%', left: '38%' }]} />
      <Image source={A4} style={[styles.asteroid, { top: '60%', left: '10%' }]} />
      <Image source={A5} style={[styles.asteroid, { top: '70%', right: '10%' }]} />

      <Image source={rocket} style={[styles.smallIcon, { bottom: '4%', left: '46%' }]} />
    </View>
  );
}

function Level1Section2() {
  return (
    <View style={styles.section}>
      <Image source={A6} style={[styles.asteroid, { top: '16%', left: '10%' }]} />
      <Image source={A7} style={[styles.asteroid, { top: '20%', right: '10%' }]} />
      <Image source={A8} style={[styles.asteroid, { top: '40%', left: '40%' }]} />
      <Image source={A9} style={[styles.asteroid, { top: '60%', left: '12%' }]} />
      <Image source={A10} style={[styles.asteroid, { top: '70%', right: '12%' }]} />

      <Image source={alien} style={[styles.smallIcon, { top: '46%', left: '46%' }]} />
      <Image source={alienSpaceship} style={[styles.mediumIcon, { top: '4%', right: '2%' }]} />
    </View>
  );
}

function Level1Section3() {
  return (
    <View style={styles.section}>
      <Image source={A11} style={[styles.asteroid, { top: '16%', left: '14%' }]} />
      <Image source={A12} style={[styles.asteroid, { top: '18%', right: '12%' }]} />
      <Image source={A13} style={[styles.asteroid, { top: '42%', left: '46%' }]} />
      <Image source={A14} style={[styles.asteroid, { top: '64%', left: '14%' }]} />
      <Image source={A15} style={[styles.asteroid, { top: '72%', right: '14%' }]} />

      <Image source={groupsPlanets} style={[styles.largeIcon, { top: '28%', left: '12%' }]} />
      <Image source={meteor} style={[styles.smallIcon, { top: '56%', right: '6%' }]} />
    </View>
  );
}

function Level1Section4() {
  return (
    <View style={styles.section}>
      <Image source={A16} style={[styles.asteroid, { top: '18%', left: '10%' }]} />
      <Image source={A17} style={[styles.asteroid, { top: '22%', right: '8%' }]} />
      <Image source={A18} style={[styles.asteroid, { top: '40%', left: '44%' }]} />
      <Image source={A19} style={[styles.asteroid, { top: '62%', left: '10%' }]} />
      <Image source={A20} style={[styles.asteroid, { top: '72%', right: '12%' }]} />

      <Image source={greenPlanet} style={[styles.mediumIcon, { top: '6%', right: '6%' }]} />
      <Image source={stars} style={[styles.smallIcon, { top: '40%', left: '10%' }]} />
      <Image source={purplePlanet} style={[styles.mediumIcon, { top: '60%', right: '8%' }]} />
    </View>
  );
}

function Level1Section5() {
  return (
    <View style={styles.section}>
      <Image source={A21} style={[styles.asteroid, { top: '20%', left: '10%' }]} />
      <Image source={A22} style={[styles.asteroid, { top: '22%', right: '10%' }]} />
      <Image source={A23} style={[styles.asteroid, { top: '44%', left: '48%' }]} />
      <Image source={A24} style={[styles.asteroid, { top: '64%', left: '16%' }]} />

      <Image source={astronautPlanet} style={[styles.largeIcon, { top: '2%', right: '6%' }]} />
      <Image source={astronautHappy} style={[styles.largeIcon, { top: '52%', right: '4%' }]} />
      <Image source={levelComplete} style={[styles.levelComplete, { bottom: '6%', left: '12%' }]} />
    </View>
  );
}

const SECTION_HEIGHT = 560;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    paddingVertical: 24,
  },
  section: {
    height: SECTION_HEIGHT,
    marginBottom: -40,
    position: 'relative',
  },
  asteroid: {
    position: 'absolute',
    width: 82,
    height: 82,
  },
  smallIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  mediumIcon: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  largeIcon: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  levelBadge: {
    position: 'absolute',
    top: '2%',
    alignSelf: 'center',
    width: '100%',
    height: 200,
    zIndex: 1,
  },
  profileIcon: {
    position: 'absolute',
    top: 32,
    right: 24,
    width: 32,
    height: 32,
    zIndex: 2,
  },
  signUpIcon: {
    position: 'absolute',
    top: 20,
    left: 24,
    width: 44,
    height: 44,
    zIndex: 2,
  },
  levelComplete: {
    position: 'absolute',
    alignSelf: 'center',
    width: 260,
    height: 60,
  },
});

