import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Home';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ProfileScreen';
import About from './About';

// Screen Names
const homeName = 'Home';
const profileName = 'Profile';
const settingsName = 'Settings';
const aboutName = 'About';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } 
          else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } 
          else if (rn === aboutName) {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={null} // Remove tabBarOptions
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={aboutName} component={About} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
      <Tab.Screen name={settingsName} component={SettingScreen} />
    </Tab.Navigator>
  );
}
