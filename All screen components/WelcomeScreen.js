import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.image} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Let's get you started</Text>
        <Text style={styles.text}>Create an account or log in to pick up right where you left off.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.primaryButton} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.primaryButtonText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>By continuing you agree to our </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Terms</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>and </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    gap: 12, 
  },
  primaryButton: {
    backgroundColor: '#5856D6',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#E5E5EA',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#8E8E93',
    fontSize: 12,
  },
  linkText: {
    color: '#5B4BFF',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});