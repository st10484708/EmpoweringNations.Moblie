import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/styles';

const LifeSkillsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Life Skills Course</Text>

      <View style={styles.courseCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1596496050850-1419b2c8b716?w=500&h=300&fit=crop',
          }}
          style={styles.courseImage}
        />
        <Text style={styles.text}>
          The Life Skills course equips individuals with essential skills for personal and professional growth.
          Participants will learn communication, problem-solving, time management, emotional intelligence,
          financial literacy, and decision-making. These skills help navigate daily challenges, improve workplace
          performance, and foster self-reliance.
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>6-Month Course Outline</Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Month 1: Personal Development & Self-Awareness</Text>{'\n'}
          • Building self-confidence and goal-setting{'\n'}
          • Understanding personal values and motivation{'\n'}
          • Developing a growth mindset{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 2: Effective Communication</Text>{'\n'}
          • Verbal and non-verbal communication skills{'\n'}
          • Active listening and empathy{'\n'}
          • Public speaking and presentation basics{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 3: Time Management & Organization</Text>{'\n'}
          • Setting priorities and daily task planning{'\n'}
          • Avoiding procrastination and stress management{'\n'}
          • Balancing work, study, and personal life{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 4: Financial Literacy</Text>{'\n'}
          • Creating and managing a personal budget{'\n'}
          • Saving and understanding credit{'\n'}
          • Responsible spending and decision-making{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 5: Problem-Solving & Decision-Making</Text>{'\n'}
          • Identifying challenges and analyzing solutions{'\n'}
          • Critical thinking and decision frameworks{'\n'}
          • Developing confidence in choices{'\n\n'}

          <Text style={{ fontWeight: 'bold' }}>Month 6: Emotional Intelligence & Career Growth</Text>{'\n'}
          • Managing emotions and building resilience{'\n'}
          • Teamwork and leadership skills{'\n'}
          • Preparing for career success and interviews{'\n'}
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>What You'll Learn</Text>
        <Text>
          • Effective communication and interpersonal skills{'\n'}
          • Self-management and personal growth{'\n'}
          • Financial literacy and budgeting{'\n'}
          • Problem-solving and critical thinking{'\n'}
          • Emotional intelligence and leadership{'\n'}
          • Professional readiness and confidence building
        </Text>
      </View>

      <TouchableOpacity style={styles.learnMoreBtn}>
        <Text style={styles.learnMoreText}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LifeSkillsScreen;
