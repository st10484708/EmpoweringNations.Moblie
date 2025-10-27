import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {homeStyles} from '../Styles/HomeStyles';

type HomeScreenNavigationProp = NativeStackNavigationProp<any>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const featuredCourses = [
    {
      id: '1',
      name: 'First Aid',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      route: 'FirstAid',
    },
    {
      id: '2',
      name: 'Sewing',
      duration: '6 months',
      image: 'https://missyrose.com.au/cdn/shop/articles/shutterstock_1028326795_1445x.jpg?v=1694902845',
      route: 'Sewing',
    },
  ];

  const stats = [
    { label: 'Courses', value: '7+' },
    { label: 'Duration', value: '6m' },
    { label: 'Practical', value: '100%' },
  ];

  const renderStatItem = ({ item }: any) => (
    <View style={homeStyles.statItem}>
      <Text style={homeStyles.statNumber}>{item.value}</Text>
      <Text style={homeStyles.statLabel}>{item.label}</Text>
    </View>
  );

  const renderCourseItem = ({ item }: any) => (
    <TouchableOpacity 
      style={homeStyles.courseCard}
      onPress={() => navigation.navigate(item.route)}
    >
      <Image source={{ uri: item.image }} style={homeStyles.courseImage} />
      <Text style={homeStyles.courseName}>{item.name}</Text>
      <Text style={homeStyles.courseDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={homeStyles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={homeStyles.heroSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&h=300&fit=crop' }}
          style={homeStyles.heroImage}
        />
      </View>

      {/* Welcome Section */}
      <View style={homeStyles.welcomeSection}>
        <Text style={homeStyles.welcomeTitle}>Welcome</Text>
        <Text style={homeStyles.welcomeSubtitle}>Empowering Skills, Transforming Lives</Text>
        <Text style={homeStyles.welcomeDescription}>
          Join us on a journey to develop practical skills in vocational and technical training that will boost your employability and transform your future.
        </Text>
      </View>

      {/* Quick Stats */}
      <FlatList
        data={stats}
        renderItem={renderStatItem}
        keyExtractor={(item) => item.label}
        numColumns={3}
        scrollEnabled={false}
        style={homeStyles.statsContainer}
        columnWrapperStyle={homeStyles.statsRow}
      />

      {/* Mission & Vision Cards */}
      <View style={homeStyles.cardsSection}>
        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Our Mission</Text>
          <Text style={homeStyles.cardDescription}>
            Provide accessible training in domestic, vocational, and technical skills that boost employability and drive community growth.
          </Text>
        </View>

        <View style={homeStyles.card}>
          <Text style={homeStyles.cardTitle}>Our Vision</Text>
          <Text style={homeStyles.cardDescription}>
            Build a skilled and self-reliant society where every individual has the opportunity to learn, earn, and uplift others.
          </Text>
        </View>
      </View>

      {/* Featured Courses */}
      <View style={homeStyles.featuredSection}>
        <Text style={homeStyles.sectionTitle}>Featured Courses</Text>
        <FlatList
          data={featuredCourses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          columnWrapperStyle={homeStyles.courseRow}
          numColumns={2}
        />
      </View>

      {/* CTA Section */}
      <View style={homeStyles.ctaSection}>
        <Text style={homeStyles.ctaTitle}>Explore All Courses</Text>
        <Text style={homeStyles.ctaDescription}>
          Discover all our available courses and find the perfect fit for your skills development journey.
        </Text>
        <TouchableOpacity 
          style={homeStyles.ctaButton}
          onPress={() => navigation.navigate('CoursesTab')}
        >
          <Text style={homeStyles.ctaButtonText}>Browse Courses</Text>
        </TouchableOpacity>
      </View>

      {/* Get Quote Section */}
      <View style={homeStyles.quoteSection}>
        <Text style={homeStyles.quoteSectionTitle}>Ready to Transform?</Text>
        <Text style={homeStyles.quoteSectionDescription}>
          Get a personalized quote for your course selections today.
        </Text>
        <TouchableOpacity 
          style={homeStyles.quoteButton}
          onPress={() => navigation.navigate('QuoteTab')}
        >
          <Text style={homeStyles.quoteButtonText}>Get a Quote</Text>
        </TouchableOpacity>
      </View>

      {/* Spacing */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};


export default HomeScreen;