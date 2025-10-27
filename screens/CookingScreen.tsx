import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/styles';

const CookingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Introduction to Cooking</Text>

      <View style={styles.courseCard}>
        <Image source={require('../assets/images/cooking.jpg')} style={styles.courseImage} />
        <Text style={styles.text}>
          A practical short course teaching safe food handling, meal planning, and nutritious cooking techniques.
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>Syllabus</Text>
        <Text>
          Week 1: Kitchen Fundamentals ,
          Topics: 
            -Kitchen equipment and tools,
            -Basic knife skills and safety,
            -Food safety and hygiene practices'{'\n'}
    
          Week 2: Cooking Techniques I,
          Topics:
            -Boiling, steaming, and poaching,
            -Preparation of grains and legumes,
            -Making basic stocks and soups {'\n'}
    
          Week 3: Cooking Techniques II,
          Topics: 
            -Sautéing, frying, and stir-frying,
            -Working with vegetables and proteins,
            -Creating balanced one-pan meals {'\n'}
    
          Week 4: Baking and Roasting,
          Topics:
            -Basic baking principles,
            -Roasting vegetables and meats,
            -Making simple breads and baked goods {'\n'}
    
          Week 5: Meal Planning and Nutrition,
          Topics: 
            -Basic nutrition principles,
            -Meal planning and budgeting,
            -Creating weekly menus {'\n'}
    
          Week 6: Putting It All Together,
          Topics: 
            -Preparing complete meals,
            -Time management in the kitchen,
            -Presentation and plating techniques'
        </Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.cardTitle}>What You'll Learn</Text>
        <Text>
          • Basic knife skills and food preparation techniques{'\n'}
          • Cooking methods: boiling, steaming, frying, baking, and grilling{'\n'}
          • Meal planning and budgeting for nutritious meals{'\n'}
          • Food safety and hygiene practices{'\n'}
          • Understanding basic nutrition principles
        </Text>
      </View>

      <TouchableOpacity style={styles.learnMoreBtn}>
        <Text style={styles.learnMoreText}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CookingScreen;
