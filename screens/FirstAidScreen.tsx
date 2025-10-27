import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS, SPACING, BORDER_RADIUS } from '../Styles/styles';
import { firstAidStyles } from '../Styles/firstAidStyles';

type FirstAidScreenNavigationProp = NativeStackNavigationProp<any>;

const FirstAidScreen = () => {
  const navigation = useNavigation<FirstAidScreenNavigationProp>();

  const courseContent = [
    'Wounds and bleeding management',
    'Burns and fractures treatment',
    'Emergency scene management',
    'Cardio-Pulmonary Resuscitation (CPR)',
    'Respiratory distress response',
  ];

  return (
    <ScrollView style={firstAidStyles.container} showsVerticalScrollIndicator={false}>
      {/* Course Header */}
      <View style={firstAidStyles.header}>
        <Text style={firstAidStyles.courseTitle}>FIRST AID</Text>
      </View>

      {/* Course Image */}
      <View style={firstAidStyles.imageSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' }}
          style={firstAidStyles.courseImage}
        />
      </View>

      {/* Purpose Section */}
      <View style={firstAidStyles.infoCard}>
        <View style={firstAidStyles.iconContainer}>
          <Text style={firstAidStyles.icon}>📋</Text>
        </View>
        <View style={firstAidStyles.infoContent}>
          <Text style={firstAidStyles.infoTitle}>Purpose</Text>
          <Text style={firstAidStyles.infoDescription}>
            To provide first aid awareness and basic life support training to equip individuals with the knowledge and skills to respond effectively in emergency situations.
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={firstAidStyles.infoCard}>
        <View style={firstAidStyles.iconContainer}>
          <Text style={firstAidStyles.icon}>📚</Text>
        </View>
        <View style={firstAidStyles.infoContent}>
          <Text style={firstAidStyles.infoTitle}>What You'll Learn</Text>
          <View style={firstAidStyles.listContainer}>
            {courseContent.map((item, index) => (
              <View key={index} style={firstAidStyles.listItem}>
                <Text style={firstAidStyles.bullet}>•</Text>
                <Text style={firstAidStyles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Time Frame Section */}
      <View style={firstAidStyles.infoCard}>
        <View style={firstAidStyles.iconContainer}>
          <Text style={firstAidStyles.icon}>⏰</Text>
        </View>
        <View style={firstAidStyles.infoContent}>
          <Text style={firstAidStyles.infoTitle}>Time Frame</Text>
          <Text style={firstAidStyles.infoHighlight}>6 months to complete</Text>
        </View>
      </View>

      {/* Fees Section */}
      <View style={firstAidStyles.infoCard}>
        <View style={firstAidStyles.iconContainer}>
          <Text style={firstAidStyles.icon}>💰</Text>
        </View>
        <View style={firstAidStyles.infoContent}>
          <Text style={firstAidStyles.infoTitle}>Course Fee</Text>
          <Text style={firstAidStyles.infoHighlight}>R1,500</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={firstAidStyles.divider} />

      {/* Registration Section */}
      <View style={firstAidStyles.registerSection}>
        <Text style={firstAidStyles.registerTitle}>Ready to Get Started?</Text>
        <Text style={firstAidStyles.registerDescription}>
          Click below to register for this course and begin your journey in first aid training.
        </Text>
        <TouchableOpacity 
          style={firstAidStyles.registerButton}
          onPress={() => navigation.navigate('QuoteTab')}
        >
          <Text style={firstAidStyles.registerButtonText}>Register Now</Text>
        </TouchableOpacity>
      </View>

      {/* Spacing */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

export default FirstAidScreen;