import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) { 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneFrame}>
        
        <View style={styles.topSection}>
          <Image source={require('../assets/signup.png')} style={styles.image} />
        </View>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation && navigation.goBack()} 
        >
          <Text style={styles.backText}>{''}</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>It only takes a minute to get set up.</Text>
          
          <View style={styles.inputBox}>
            <Text style={styles.label}>full name</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>email address</Text>
            <TextInput
              style={styles.input}
              placeholder="John@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Text style={styles.Text}>At least 8 characters including a number.</Text>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Sign up with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="google" size={18} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="apple" size={18} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="facebook" size={18} color="#1877F2" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation && navigation.navigate('Login')}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE9F9', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: '100%',
    maxWidth: 360,
    height: 720,
    backgroundColor: '#ffffff', 
    borderRadius: 30,
    overflow: 'hidden',
  },
  topSection: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBE9F9', 
  },
  image: {
    width: '80%',
    height: 120,
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
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
  signUpButton: {
    width: '100%',
    backgroundColor: '#5856D6',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  signUpButtonText: {
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
  signInText: {
    fontSize: 12,
    color: '#5B4BFF',
    fontWeight: 'bold',
  },
});