import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const Toast = useToast();

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError('Please enter your email');
      valid = false;
    } else if (!email.includes('@')) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Perform login logic (replace with actual login handling)
      // For demonstration, navigating to '/home' after successful validation
      router.replace('/home');
      Toast.show('Login successful!', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      Toast.show('Login failed! Please check the form.', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <View style={styles.container}>
       <View style={{paddingBottom:40}}>
        <Image  style={{borderRadius:20,width:100,height:100}} source={require('../../assets/logo.png')}  />
      </View>
      <Text style={styles.header}>Sign in to your <Text style={styles.highlight}>account!</Text></Text>
      <View style={[styles.inputContainer, emailError ? styles.errorInput : null]}>
        <Ionicons name="mail" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <View style={[styles.inputContainer, passwordError ? styles.errorInput : null]}>
        <Ionicons name="lock-closed" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>Don't have an account? <Text style={styles.link} onPress={() => router.push('/sign-in')}>Sign in</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 33,
    fontFamily: 'Poppins',
    marginBottom: 44,
  },
  highlight: {
    color: '#1faf73',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  errorInput: {
    borderColor: 'red',
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontFamily: 'Poppins',
  },
  button: {
    backgroundColor: '#1faf73',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'Poppins',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  link: {
    fontFamily: 'Poppins',
    color: '#1faf73',
  },
});
