import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

const FeedbackScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !course || !rating || !comments) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    Alert.alert('Thank You!', 'Your feedback has been submitted successfully.');
    // Optionally send data to backend here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>We Value Your Feedback</Text>
      <Text style={styles.subtitle}>
        Your input helps us improve our courses and services.
      </Text>

      {/* Full Name */}
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <Text style={styles.label}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Course */}
      <Text style={styles.label}>Course Feedback For:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Life Skills, Gardening, Sewing..."
        value={course}
        onChangeText={setCourse}
      />

      {/* Rating */}
      <Text style={styles.label}>Overall Experience:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.ratingButton,
              rating === num && styles.ratingButtonSelected,
            ]}
            onPress={() => setRating(num)}
          >
            <Text
              style={[
                styles.ratingText,
                rating === num && styles.ratingTextSelected,
              ]}
            >
              {num} ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Comments */}
      <Text style={styles.label}>Additional Comments:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={5}
        placeholder="Your thoughts..."
        value={comments}
        onChangeText={setComments}
      />

      {/* Submit */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>

      <Text style={styles.footerNote}>
        © 2025 Empowering the Nation | All Rights Reserved.
      </Text>
    </ScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  ratingButton: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  ratingButtonSelected: {
    backgroundColor: '#1abc9c',
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
  },
  ratingTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#1abc9c',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerNote: {
    textAlign: 'center',
    color: '#777',
    fontSize: 13,
    marginTop: 40,
    marginBottom: 20,
  },
});
