import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import FirstAidScreen from './screens/FirstAidScreen';
import SewingScreen from './screens/SewingScreen';
import QuoteScreen from './screens/QuoteScreen';
import { COLORS } from './Styles/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 18,
        },
        headerShadowVisible: true,
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerTitle: 'Empowering the Nation',
        }}
      />
      <Stack.Screen 
        name="FirstAid" 
        component={FirstAidScreen}
        options={{
          headerTitle: 'First Aid Course',
        }}
      />
      <Stack.Screen 
        name="Sewing" 
        component={SewingScreen}
        options={{
          headerTitle: 'Sewing Course',
        }}
      />
    </Stack.Navigator>
  );
};

const QuoteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 18,
        },
        headerShadowVisible: true,
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen 
        name="QuoteScreen" 
        component={QuoteScreen}
        options={{
          headerTitle: 'Get Your Quote',
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
        }}
      />
      
      <Tab.Screen 
        name="CoursesTab" 
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📚</Text>
          ),
        }}
      />

      <Tab.Screen 
        name="QuoteTab" 
        component={QuoteStackNavigator}
        options={{
          tabBarLabel: 'Quote',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>💬</Text>
          ),
        }}
      />

      <Tab.Screen 
        name="ContactTab" 
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📞</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;