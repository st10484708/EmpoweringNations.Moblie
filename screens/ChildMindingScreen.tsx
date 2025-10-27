import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/styles';

const ChildMindingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Introduction to Child Minding</Text>

      <View style={styles.courseCard}>
        <Image source={require('../assets/images/childminding.jpg')} style={styles.courseImage} />
        <Text style={styles.text}>
          This course provides learners with the skills to care for young children safely and effectively. Students will learn how to support children’s physical, emotional, and cognitive development, promote good hygiene and nutrition, and create nurturing environments that encourage play and learning.
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>Syllabus</Text>
        <Text>
          Week 1: Understanding Child Development,
          Topics: 
            -Developmental stages from infancy to school age,
            -Recognizing and supporting developmental milestones,
            -Individual differences in development{'\n'}
      
          Week 2: Creating Safe Environments,
          Topics: 
            -Childproofing indoor and outdoor spaces,
            -Safety protocols and emergency planning,
            -Hygiene and sanitation practices{'\n'}
    
          Week 3: Nutrition and Health,
          Topics: 
            -Age-appropriate nutrition,
            -Meal planning and preparation,
            -Recognizing common childhood illnesses{'\n'}
      
          Week 4: Educational Activities and Play,
          Topics: 
            -Age-appropriate learning activities,
            -The importance of play in development,
            -Creating stimulating environments{'\n'}
     
          Week 5: Behavior Guidance,
          Topics: 
            -Positive discipline techniques,
            -Understanding and responding to challenging behaviors,
            -Building positive relationships with children{'\n'}
    
          Week 6: Professional Practice,
          Topics: 
            -Communication with parents and families,
            -Record keeping and documentation,
            -Starting a child minding business{'\n'}
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>What You'll Learn</Text>
        <Text>
          • Child development stages and milestones{'\n'}
          • Safety procedures and childproofing environments{'\n'}
          • Age-appropriate activities and educational play{'\n'}
          • Nutrition and meal planning for children{'\n'}
          • Emergency response and first aid for children{'\n'}
          • Communicate effectively with parents
        </Text>
      </View>

      <TouchableOpacity style={styles.learnMoreBtn}>
        <Text style={styles.learnMoreText}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChildMindingScreen;
