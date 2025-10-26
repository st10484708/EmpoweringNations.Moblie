import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const LandscapingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Introduction to Landscaping</Text>

      {/* Course Overview */}
      <View style={styles.courseCard}>
        <Image source={require('../assets/images/landscaping.jpg')} style={styles.courseImage} />
        <Text style={styles.text}>
          This 6-month course equips learners with the knowledge and hands-on experience
          required to design, construct, and maintain outdoor spaces. You will learn about
          plants, soil, irrigation, and hardscaping — gaining the confidence to create
          functional, sustainable, and visually appealing landscapes.
        </Text>
      </View>

      {/* 6-Month Syllabus */}
      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>Syllabus</Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Month 1: Foundations of Landscape Design{'\n'}</Text>
          - Principles and elements of landscape architecture{'\n'}
          - Site analysis and layout planning{'\n'}
          - Tools, safety, and material introduction{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 2: Soil, Plants, and Irrigation{'\n'}</Text>
          - Soil composition, testing, and fertilization methods{'\n'}
          - Selecting plants and trees for different environments{'\n'}
          - Designing irrigation systems and water management{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 3: Hardscaping and Construction{'\n'}</Text>
          - Building patios, paths, and retaining walls{'\n'}
          - Working with stone, wood, and concrete{'\n'}
          - Drainage and slope considerations{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 4: Garden Maintenance and Care{'\n'}</Text>
          - Seasonal garden management{'\n'}
          - Lawn maintenance, pruning, and trimming{'\n'}
          - Eco-friendly pest and weed control{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 5: Landscape Project Management{'\n'}</Text>
          - Planning, scheduling, and budgeting{'\n'}
          - Client communication and teamwork{'\n'}
          - Cost estimation and quality assurance{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 6: Professional Practice & Entrepreneurship{'\n'}</Text>
          - Starting and managing a landscaping business{'\n'}
          - Marketing, branding, and customer service{'\n'}
          - Sustainable landscaping and environmental responsibility
        </Text>
      </View>

      {/* Learning Outcomes */}
      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>What You'll Learn</Text>
        <Text>
          • Landscape design and project planning{'\n'}
          • Soil preparation and plant care techniques{'\n'}
          • Hardscaping construction and layout{'\n'}
          • Sustainable maintenance and irrigation methods{'\n'}
          • Project budgeting and client management{'\n'}
          • Skills to start your own landscaping business
        </Text>
      </View>

      {/* Enroll Button */}
      <TouchableOpacity style={styles.learnMoreBtn}>
        <Text style={styles.learnMoreText}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LandscapingScreen;
