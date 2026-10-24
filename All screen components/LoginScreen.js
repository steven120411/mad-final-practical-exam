import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image 
          source={require('../assets/login.png')} 
          style={styles.image} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to your account to continue.</Text>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="john@gmail.com"
            placeholderTextColor="#A0AEC0"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••••••"
            placeholderTextColor="#A0AEC0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesome name="google" size={16} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesome name="apple" size={16} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesome name="facebook" size={16} color="#1877F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE9F9',
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    width: '80%',
    height: 160,
    resizeMode: 'contain',
  },
  card: {
    flex: 0.6,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  inputBox: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    color: '#3A3A3C',
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    backgroundColor: '#FAFAFC',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginTop: 6,
  },
  forgotText: {
    fontSize: 11,
    color: '#5B4BFF',
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#5856D6',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5EA',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 11,
    color: '#8E8E93',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 15,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  signUpText: {
    fontSize: 12,
    color: '#5B4BFF',
    fontWeight: 'bold',
  },
});