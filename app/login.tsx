import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>WELCOME TO SIGNBRIDGE !</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Username :</Text>
          <TextInput
            placeholder="Enter your username"
            placeholderTextColor="rgba(0,0,0,0.4)"
            style={styles.input}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Password :</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="rgba(0,0,0,0.4)"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonActive,
            ]}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>SIGN UP</Text>
              <View style={styles.buttonIconCircle}>
                <Text style={styles.buttonIconText}>👤</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <Pressable style={styles.forgotWrapper}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  card: {
    width: 320,
    maxWidth: '100%',
    height: '90%',
    maxHeight: 720,
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 3,
    marginBottom: 40,
  },
  formGroup: {
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
  buttonWrapper: {
    marginTop: 32,
    alignItems: 'center',
  },
  button: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 12,
    backgroundColor: '#6150D8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonActive: {
    backgroundColor: '#7C66FF',
    transform: [{ translateY: -3 }, { scale: 1.03 }],
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 3,
  },
  buttonIconCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconText: {
    fontSize: 14,
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

