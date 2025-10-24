import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';

const QuoteScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Quote</Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>
          "Education is the most powerful weapon which you can use to change the world."
        </Text>
        <Text style={styles.quoteAuthor}>– Nelson Mandela</Text>
      </View>
    </ScrollView>
  );
};

export default QuoteScreen;
