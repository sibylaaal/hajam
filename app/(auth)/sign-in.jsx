import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useToast } from 'react-native-toast-notifications';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(false); // false for male, true for female
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const Toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (city.trim() === '') {
      newErrors.city = 'City is required';
    }
    if (!phoneNumber.match(/^\d+$/)) {
      newErrors.phoneNumber = 'Phone number must be numeric';
    }
    if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Phone number must be 10 digits long';
    }
    if (!country) {
      newErrors.country = 'Country is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      setIsLoading(true);
      // Handle successful registration logic here
      setTimeout(() => {
        setIsLoading(false);
        Toast.show('Registration successful!', {
          type: 'success',
          placement: 'bottom',
          duration: 4000,
          offset: 30,
          animationType: 'slide-in',
        });
      }, 2000);
    } else {
      Toast.show('Registration failed!', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{paddingBottom:10,marginTop:40}}>
        <Image  style={{borderRadius:20,width:100,height:100}} source={require('../../assets/logo.png')}  />
      </View>
      <Text style={styles.header}>Sign in to your <Text style={styles.highlight}>account!</Text></Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, errors.password && styles.errorInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, errors.confirmPassword && styles.errorInput]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
        </View>
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
        
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, errors.city && styles.errorInput]}
            placeholder="City"
            value={city}
            onChangeText={setCity}
            placeholderTextColor="#888"
          />
        </View>
        {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, errors.phoneNumber && styles.errorInput]}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />
        </View>
        {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
        
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            withFlag
            withFilter
            withCountryNameButton
            withAlphaFilter
            withCallingCode
            onSelect={(country) => {
              setCountry(country);
            }}
            containerButtonStyle={styles.countryPickerButton}
          />
          {country && (
            <Text style={styles.selectedCountry}>
              {country.name} (+{country.callingCode})
            </Text>
          )}
        </View>
        {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
        
        <View style={styles.switchContainer}>
          <View style={styles.switch}>
            <Text style={{fontFamily:'Poppins'}}>Male</Text>
            <Switch
              value={gender}
              onValueChange={setGender}
              thumbColor={gender ? '#1faf73' : '#f4f3f4'}
              trackColor={{ false: '#ccc', true: '#1faf73' }}
            />
            <Text style={{fontFamily:'Poppins'}}>Female</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text>
            Already have an account?{' '}
            <Text style={styles.link} onPress={() => router.push('/sign-up')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    
  },
  logo: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 33,
    fontFamily: 'Poppins',
    paddingBottom: 20,
    color: '#000',
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: 'Poppins',
    color: '#000',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'Poppins',
  },
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  countryPickerButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  selectedCountry: {
    fontFamily: 'Poppins',
    marginLeft: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontFamily: 'Poppins',
    marginRight: 10,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 16,
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
