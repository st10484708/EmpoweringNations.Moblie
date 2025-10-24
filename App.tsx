import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import QuoteScreen from './screens/QuoteScreen';
import CoursesScreen from './screens/CoursesScreen';
import ContactScreen from './screens/ContactScreen';
import GardeningScreen from './screens/GardeningScreen';
import SewingScreen from './screens/SewingScreen';
import FirstAidScreen from './screens/FirstAidScreen';
import CookingScreen from './screens/CookingScreen';
import ChildMindingScreen from './screens/ChildMindingScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#D4AF37' },
          headerTintColor: '#1e4a7b',
          drawerActiveBackgroundColor: '#D4AF37',
          drawerActiveTintColor: '#000',
          drawerInactiveTintColor: '#1e4a7b',
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Quote" component={QuoteScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Gardening" component={GardeningScreen} />
        <Drawer.Screen name="Sewing" component={SewingScreen} />
        <Drawer.Screen name="First Aid" component={FirstAidScreen} />
        <Drawer.Screen name="Cooking" component={CookingScreen} />
        <Drawer.Screen name="Child Minding" component={ChildMindingScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
