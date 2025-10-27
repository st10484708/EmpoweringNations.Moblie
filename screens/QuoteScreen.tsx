import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../Styles/styles';
import { quoteStyles } from '../Styles/quoteStyles';

interface Course {
  id: string;
  name: string;
  duration: string;
  price: number;
  selected: boolean;
}

const QuoteScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showTotal, setShowTotal] = useState(false);

  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'First Aid', duration: '6 months', price: 1500, selected: false },
    { id: '2', name: 'Sewing', duration: '6 months', price: 1500, selected: false },
    { id: '3', name: 'Landscaping', duration: '6 months', price: 1500, selected: false },
    { id: '4', name: 'Life Skills', duration: '6 months', price: 1500, selected: false },
    { id: '5', name: 'Child Minding', duration: '6 weeks', price: 750, selected: false },
    { id: '6', name: 'Cooking', duration: '6 weeks', price: 750, selected: false },
    { id: '7', name: 'Garden Maintenance', duration: '6 weeks', price: 750, selected: false },
  ]);

  const toggleCourse = (id: string) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, selected: !course.selected } : course
    ));
    setShowTotal(false); // Hide total when selection changes
  };

  const calculateTotal = () => {
    return courses
      .filter(course => course.selected)
      .reduce((sum, course) => sum + course.price, 0);
  };

  const getSelectedCourses = () => {
    return courses.filter(course => course.selected);
  };

  const handleCalculateTotal = () => {
    const selectedCourses = getSelectedCourses();
    
    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course to calculate the total.');
      return;
    }

    if (!firstName || !lastName || !email || !phone) {
      Alert.alert('Missing Information', 'Please fill in all personal information fields.');
      return;
    }

    setShowTotal(true);
  };

  const handleSubmitQuote = () => {
    const selectedCourses = getSelectedCourses();
    const total = calculateTotal();

    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course.');
      return;
    }

    if (!firstName || !lastName || !email || !phone) {
      Alert.alert('Missing Information', 'Please fill in all personal information fields.');
      return;
    }

    Alert.alert(
      'Quote Submitted Successfully!',
      `Thank you, ${firstName}!\n\nTotal: R${total.toFixed(2)}\nCourses: ${selectedCourses.map(c => c.name).join(', ')}\n\nWe'll contact you at ${email}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={quoteStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={quoteStyles.header}>
        <Text style={quoteStyles.headerTitle}>Get Your Course Quote</Text>
        <Text style={quoteStyles.headerDescription}>
          Select your courses and provide your details to receive a personalized quote.
        </Text>
      </View>

      {/* Personal Information Form */}
      <View style={quoteStyles.section}>
        <Text style={quoteStyles.sectionTitle}>Personal Information</Text>
        
        <View style={quoteStyles.inputGroup}>
          <Text style={quoteStyles.label}>First Name *</Text>
          <TextInput
            style={quoteStyles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            placeholderTextColor={COLORS.textGray}
          />
        </View>

        <View style={quoteStyles.inputGroup}>
          <Text style={quoteStyles.label}>Last Name *</Text>
          <TextInput
            style={quoteStyles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            placeholderTextColor={COLORS.textGray}
          />
        </View>

        <View style={quoteStyles.inputGroup}>
          <Text style={quoteStyles.label}>Email Address *</Text>
          <TextInput
            style={quoteStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={COLORS.textGray}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={quoteStyles.inputGroup}>
          <Text style={quoteStyles.label}>Phone Number *</Text>
          <TextInput
            style={quoteStyles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            placeholderTextColor={COLORS.textGray}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Course Selection */}
      <View style={quoteStyles.section}>
        <Text style={quoteStyles.sectionTitle}>Select Your Courses</Text>
        <Text style={quoteStyles.sectionDescription}>
          Select one or more courses from the list below
        </Text>

        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={[
              quoteStyles.courseItem,
              course.selected && quoteStyles.courseItemSelected
            ]}
            onPress={() => toggleCourse(course.id)}
          >
            <View style={quoteStyles.checkbox}>
              {course.selected && (
                <View style={quoteStyles.checkboxInner} />
              )}
            </View>
            <View style={quoteStyles.courseInfo}>
              <Text style={quoteStyles.courseName}>{course.name}</Text>
              <Text style={quoteStyles.courseDetails}>
                {course.duration} | R{course.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculate Total Button */}
      <View style={quoteStyles.buttonContainer}>
        <TouchableOpacity 
          style={quoteStyles.calculateButton}
          onPress={handleCalculateTotal}
        >
          <Text style={quoteStyles.calculateButtonText}>Calculate Total</Text>
        </TouchableOpacity>
      </View>

      {/* Total Display */}
      {showTotal && (
        <View style={quoteStyles.totalSection}>
          <Text style={quoteStyles.totalTitle}>Your Quote Summary</Text>
          
          <View style={quoteStyles.selectedCoursesList}>
            <Text style={quoteStyles.selectedCoursesTitle}>Selected Courses:</Text>
            {getSelectedCourses().map((course) => (
              <View key={course.id} style={quoteStyles.selectedCourseItem}>
                <Text style={quoteStyles.selectedCourseName}>{course.name}</Text>
                <Text style={quoteStyles.selectedCoursePrice}>R{course.price}</Text>
              </View>
            ))}
          </View>

          <View style={quoteStyles.totalRow}>
            <Text style={quoteStyles.totalLabel}>Total Amount:</Text>
            <Text style={quoteStyles.totalAmount}>R{calculateTotal().toFixed(2)}</Text>
          </View>
        </View>
      )}

      {/* Submit Button */}
      <View style={quoteStyles.buttonContainer}>
        <TouchableOpacity 
          style={quoteStyles.submitButton}
          onPress={handleSubmitQuote}
        >
          <Text style={quoteStyles.submitButtonText}>Request Quote</Text>
        </TouchableOpacity>
      </View>

      {/* Spacing */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

export default QuoteScreen;