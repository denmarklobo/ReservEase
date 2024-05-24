import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    // Perform logout actions here, such as clearing authentication tokens or user data
    // Example: AsyncStorage.clear(); // if using AsyncStorage for token storage

    // Navigate to the login screen or wherever your authentication flow begins
    navigation.navigate('Login'); // Replace 'Login' with your actual login screen name
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8ecf4",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutContainer: {
    marginTop: 20,
    alignItems: 'center', // Center horizontally
  },
  logoutButton: {
    backgroundColor: 'red', // Example: You can customize the logout button style
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 50,
  },
  logoutText: {
    color: 'white', // Example: You can customize the logout button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
