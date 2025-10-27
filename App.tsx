import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './RootNavigator';
import { COLORS, styles } from './Styles/styles';
import { ActivityIndicator, ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';


const Stack = createNativeStackNavigator();

interface RootStackParamList {
  Landing: undefined;
  Navigation: undefined;
}

const LandingScreen = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      navigation.replace('Navigation');
    }, 500);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://thumbs.dreamstime.com/b/colourful-hand-tree-abstract-image-logo-icon-hands-as-trunk-leaves-37127556.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.brandName}>Empowering the Nation</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=400&fit=crop' }}
          style={styles.heroImage}
        />
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeSubtitle}>
          Empowering Skills, Transforming Lives
        </Text>
        <Text style={styles.welcomeDescription}>
          Join us on a journey to develop practical skills in vocational and technical training that will boost your employability and transform your future.
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>7+</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>6m</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Practical</Text>
        </View>
      </View>

      {/* Mission & Vision Preview */}
      <View style={styles.previewSection}>
        <View style={styles.previewCard}>
          <Text style={styles.previewTitle}>Our Mission</Text>
          <Text style={styles.previewText}>
            Provide accessible training in domestic, vocational, and technical skills that boost employability and drive community growth.
          </Text>
        </View>

        <View style={styles.previewCard}>
          <Text style={styles.previewTitle}>Our Vision</Text>
          <Text style={styles.previewText}>
            Build a skilled and self-reliant society where every individual has the opportunity to learn, earn, and uplift others.
          </Text>
        </View>
      </View>

      {/* Featured Courses */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        
        <View style={styles.coursePreviewGrid}>
          <View style={styles.coursePreviewCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=120&fit=crop' }}
              style={styles.coursePreviewImage}
            />
            <Text style={styles.coursePreviewName}>Gardening</Text>
          </View>

          <View style={styles.coursePreviewCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=120&fit=crop' }}
              style={styles.coursePreviewImage}
            />
            <Text style={styles.coursePreviewName}>First Aid</Text>
          </View>

          <View style={styles.coursePreviewCard}>
            <Image
              source={{ uri: 'https://missyrose.com.au/cdn/shop/articles/shutterstock_1028326795_1445x.jpg?v=1694902845' }}
              style={styles.coursePreviewImage}
            />
            <Text style={styles.coursePreviewName}>Sewing</Text>
          </View>

          <View style={styles.coursePreviewCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=150&h=120&fit=crop' }}
              style={styles.coursePreviewImage}
            />
            <Text style={styles.coursePreviewName}>Landscaping</Text>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Transform Your Future?</Text>
        <Text style={styles.ctaDescription}>
          Explore our courses and get a personalized quote today. Join hundreds of learners building their skills with us.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.getStartedButton}
        onPress={handleGetStarted}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.getStartedText}>Get Started</Text>
        )}
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © Empowering the Nation | 2025
        </Text>
        <Text style={styles.footerSubtext}>
          Building Skills. Transforming Lives.
        </Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen}
          options={{
          }}
        />
        <Stack.Screen 
          name="Navigation" 
          component={RootNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

