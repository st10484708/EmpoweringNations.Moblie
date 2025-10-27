import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/styles';

const GardeningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Introduction to Gardening</Text>

      <View style={styles.courseCard}>
        <Image source={require('../assets/images/gardening.jpg')} style={styles.courseImage} />
        <Text style={styles.text}>
          This short course introduces participants to the essential principles of gardening, with a strong focus on practical, hands-on learning. Students will learn how to prepare soil, choose the right plants for different climates, manage irrigation, and apply sustainable pest-control methods.
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>Syllabus</Text>
        <Text>
          Week 1: Foundations of Gardening,
          Topics: 
            -Introduction to gardening tools and their uses,
            -Understanding soil types and preparation,
            -Safety and hygiene in gardening'{'\n'}
          Week 2: Planting Basics
          Topics: 
            -Planting techniques for vegetables, herbs, and flowers,
            -Watering practices and schedules,
            -Understanding seedlings and transplants{'\n'}
          Week 3: Soil & Fertiliser
          Topics: 
            -Soil nutrition and composition,
            -Composting techniques,
            -Natural and synthetic fertilizers{'\n'}
          Week 4: Pest Control & Weed Management
          Topics: 
            -Identifying common garden pests,
            -Eco-friendly pest control solutions,
            -Weed prevention and management {'\n'}
          Week 5: Plant Care & Maintenance
          Topics: 
            -Pruning techniques for different plants,
            -Seasonal care requirements,
            -Plant health monitoring{'\n'}
          Week 6: Harvesting and Beyond
          Topics: 
            -When and how to harvest different crops,
            -Post-harvest handling and storage,
            -Planning for the next growing season
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>What You'll Learn</Text>
        <Text>
          • Soil preparation and composting techniques{'\n'}
          • Plant selection for local climates{'\n'}
          • Planting, watering, and fertilisation methods{'\n'}
          • Pest and weed management using eco-friendly solutions{'\n'}
          • Harvesting, pruning, and seasonal care
        </Text>
      </View>

      <TouchableOpacity style={styles.learnMoreBtn}>
        <Text style={styles.learnMoreText}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GardeningScreen;
