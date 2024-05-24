import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSignup = () => {
    navigation.navigate('Otp');
  };

  const goBackToLogin = () => {
    navigation.navigate('Login');
  };

  const goterms = () => {
    navigation.navigate('terms');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImg}
            source={require('../assets/logo.png')}
            resizeMode="contain"
            accessibilityLabel="App Logo"
          />

          <Text style={styles.title}>
                <Text style={{ color: '#EE914D' }}>Sign Up Now</Text>
            </Text>

          <TouchableOpacity onPress={goBackToLogin} style={{ marginTop: 10 }}>
  <View style={styles.btn}>
    <Text style={styles.btnBack}>Back</Text>
  </View>
</TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(firstName) => setForm({ ...form, firstName })}
              placeholder="Enter full name"
              placeholderTextColor="#EE914D"
              style={styles.inputControl}
              value={form.firstName}
            />
          </View>

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
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder=" Enter password"
              placeholderTextColor="#EE914D"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignup}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>

      <TouchableOpacity onPress={goterms}>
              
      <Text style={{ fontSize: 12, justifyContent: 'center',}}> By clicking Continue, you agree to our Terms and Conditions and our Data Privacy Policy.</Text>
              
      </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 5,  // Adjust the margin to move the header higher
},
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },

  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EE914D',
    borderStyle: 'solid',
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#EE914D',
    borderColor: '#2db300',
    
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },

  btnBack: {
    fontSize: 18,
    lineHeight: 11,
    fontWeight: '600',
    color: '#fff',
    height: 10,
  },
});

export default SignupScreen;