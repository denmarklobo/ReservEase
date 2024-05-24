import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button,
} from 'react-native';

const OtpVerificationScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const goBackToLogin = () => {
    // Navigate back to the 'Login' screen
    navigation.navigate('Login');
  };

  const handleResendCode = () => {
    alert('Resending code...');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={styles.headerImg}
                source={require('../assets/logo.png')}
                resizeMode="contain"
                accessibilityLabel="App Logo"
              />
              <Text style={styles.title}>
                <Text style={{ color: '#7DDA58' }}>Verify your Email</Text>
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(email) => setForm({ ...form, email })}
                  placeholder="Enter email address"
                  placeholderTextColor="#EE914D"
                  style={styles.inputControl}
                  value={form.email}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Enter OTP</Text>
                <TextInput
                  autoCorrect={false}
                  onChangeText={(password) => setForm({ ...form, password })}
                  placeholder="Enter OTP"
                  placeholderTextColor="#EE914D"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={form.password}
                />
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity onPress={goBackToLogin}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Verify</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 12, marginTop: 20}}>
                Didn't receive the OTP?
              </Text>

              <View style={styles.formAction}>
                <TouchableOpacity onPress={handleResendCode}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Resend Code</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 16,
  },
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#EE914D',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#EE914D',
    borderColor: '#2db300',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
    
  },
});

export default OtpVerificationScreen;
