import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Empowering the Nation</Text>

      <View style={styles.section}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.text}>
          Welcome to Empowering the Nation — a community-focused organisation offering
          short and long courses designed to build practical skills, promote
          self-sufficiency, and empower individuals to create change.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Our Mission</Text>
        <Text style={styles.text}>
          To provide accessible, high-quality training that encourages personal growth,
          employment, and entrepreneurship across South Africa.
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
