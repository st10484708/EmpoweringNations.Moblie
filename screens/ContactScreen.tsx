import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';

const ContactScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Contact</Text>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Main HQ - JNB</Text>
        <Text>Email: here2help@nation.com</Text>
        <Text>Phone: +27 12 789 2818</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Main HQ - JNB</Text>
        <Text>Mailing address:</Text>
        <Text>2 Andries Street, Sandton, 2090, South Africa</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Main HQ - CPT</Text>
        <Text>Email: here2helpcpt@nation.com</Text>
        <Text>Phone: +27 20 098 3958</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Main HQ - CPT</Text>
        <Text>Mailing address:</Text>
        <Text>31 Brickfield Rd, Salt River, 7925, South Africa</Text>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
