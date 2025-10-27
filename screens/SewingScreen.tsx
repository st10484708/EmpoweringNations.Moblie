import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { sewingStyles } from '../Styles/sewingStyles';

type SewingScreenNavigationProp = NativeStackNavigationProp<any>;

const SewingScreen = () => {
  const navigation = useNavigation<SewingScreenNavigationProp>();

  const courseContent = [
    'Types of stitches and their applications',
    'Threading a sewing machine',
    'Sewing buttons, zips, hems and seams',
    'Alterations and garment repairs',
    'Designing and sewing new garments',
  ];

  return (
    <ScrollView style={sewingStyles.container} showsVerticalScrollIndicator={false}>
      {/* Course Header */}
      <View style={sewingStyles.header}>
        <Text style={sewingStyles.courseTitle}>SEWING</Text>
      </View>

      {/* Course Image */}
      <View style={sewingStyles.imageSection}>
        <Image
          source={{ uri: 'https://missyrose.com.au/cdn/shop/articles/shutterstock_1028326795_1445x.jpg?v=1694902845' }}
          style={sewingStyles.courseImage}
        />
      </View>

      {/* Purpose Section */}
      <View style={sewingStyles.infoCard}>
        <View style={sewingStyles.iconContainer}>
          <Text style={sewingStyles.icon}>📋</Text>
        </View>
        <View style={sewingStyles.infoContent}>
          <Text style={sewingStyles.infoTitle}>Purpose</Text>
          <Text style={sewingStyles.infoDescription}>
            To provide alterations and new garment tailoring services, teaching practical sewing skills for both personal and professional use.
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={sewingStyles.infoCard}>
        <View style={sewingStyles.iconContainer}>
          <Text style={sewingStyles.icon}>📚</Text>
        </View>
        <View style={sewingStyles.infoContent}>
          <Text style={sewingStyles.infoTitle}>What You'll Learn</Text>
          <View style={sewingStyles.listContainer}>
            {courseContent.map((item, index) => (
              <View key={index} style={sewingStyles.listItem}>
                <Text style={sewingStyles.bullet}>•</Text>
                <Text style={sewingStyles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Time Frame Section */}
      <View style={sewingStyles.infoCard}>
        <View style={sewingStyles.iconContainer}>
          <Text style={sewingStyles.icon}>⏰</Text>
        </View>
        <View style={sewingStyles.infoContent}>
          <Text style={sewingStyles.infoTitle}>Time Frame</Text>
          <Text style={sewingStyles.infoHighlight}>6 months to complete</Text>
        </View>
      </View>

      {/* Fees Section */}
      <View style={sewingStyles.infoCard}>
        <View style={sewingStyles.iconContainer}>
          <Text style={sewingStyles.icon}>💰</Text>
        </View>
        <View style={sewingStyles.infoContent}>
          <Text style={sewingStyles.infoTitle}>Course Fee</Text>
          <Text style={sewingStyles.infoHighlight}>R1,500</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={sewingStyles.divider} />

      {/* Registration Section */}
      <View style={sewingStyles.registerSection}>
        <Text style={sewingStyles.registerTitle}>Ready to Get Started?</Text>
        <Text style={sewingStyles.registerDescription}>
          Click below to register for this course and begin your journey in sewing and garment design.
        </Text>
        <TouchableOpacity 
          style={sewingStyles.registerButton}
          onPress={() => navigation.navigate('QuoteTab')}
        >
          <Text style={sewingStyles.registerButtonText}>Register Now</Text>
        </TouchableOpacity>
      </View>

      {/* Spacing */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

export default SewingScreen;