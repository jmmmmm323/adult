import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Your Dashboard</Text>
        </View>
        {/* User Profile Section */}
        <TouchableOpacity style={styles.profileSection} onPress={() => router.push('/(tabs)/profilesetting')}>
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchRow}>
            <View style={[
              styles.searchBar,
              isSearchActive && styles.searchBarActive
            ]}>
              <Text style={styles.searchPlaceholder}>Search here...</Text>
              <TouchableOpacity 
                style={styles.searchButton}
                onPress={() => setIsSearchActive(!isSearchActive)}
              >
                <Ionicons name="search" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.searchSubtext}>Find documents, Topics, etc.</Text>
        </View>

        {/* Recommended IDs Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Recommended IDs</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color="#687076" />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardSubtitle}>Digital Driver's License</Text>
          <Text style={styles.cardDescription}>
            Get instant verification for travel and age verification
          </Text>
        </View>

        {/* Trending Topics Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.titleWithIcon}>
              <Ionicons name="trending-up" size={20} color="#192D64" />
              <Text style={styles.cardTitle}>Trending Topics</Text>
            </View>
          </View>
          
          <View style={styles.topicItem}>
            <View style={styles.topicHeader}>
              <Text style={styles.topicTitle}>New Digital Passport Updates</Text>
              <View style={styles.hotTag}>
                <Text style={styles.hotTagText}>Hot</Text>
              </View>
            </View>
            <View style={styles.topicStats}>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={16} color="#687076" />
                <Text style={styles.statText}>24 replies</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="people-outline" size={16} color="#687076" />
                <Text style={styles.statText}>13 people</Text>
              </View>
            </View>
          </View>

          <View style={styles.topicItem}>
            <Text style={styles.topicTitle}>Mobile ID Security Tips</Text>
            <View style={styles.topicStats}>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={16} color="#687076" />
                <Text style={styles.statText}>9 replies</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="people-outline" size={16} color="#687076" />
                <Text style={styles.statText}>5 people</Text>
              </View>
            </View>
          </View>

          <View style={styles.topicItem}>
            <Text style={styles.topicTitle}>What is a valid ID that you can get within a week?</Text>
            <View style={styles.topicStats}>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={16} color="#687076" />
                <Text style={styles.statText}>34 replies</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="people-outline" size={16} color="#687076" />
                <Text style={styles.statText}>32 people</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recently Acquired ID Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recently Acquired ID</Text>
          <View style={styles.idCard}>
            <View style={styles.idHeader}>
              <Text style={styles.idTitle}>National ID</Text>
              <View style={styles.activeTag}>
                <Text style={styles.activeTagText}>Active</Text>
              </View>
            </View>
            <Text style={styles.idLocation}>Dasmarinas City</Text>
            <View style={styles.idDetails}>
              <View style={styles.detailItem}>
                <Ionicons name="calendar-outline" size={16} color="#687076" />
                <Text style={styles.detailText}>Acquired: 9/17/2024</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailText}>Expires: No expiration</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom spacing for navigation bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation Bar - Floating Island */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="card-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="location-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(tabs)/CommunityPage')}>
            <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#D0DCFC',
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: -20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#192D64',
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: '#A1CEDC',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#192D64',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBarActive: {
    borderColor: '#0C2057',
  },
  searchPlaceholder: {
    flex: 1,
    color: '#9CA3AF',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#0C2057',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0C2057',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSubtext: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#0C2057',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192D64',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#192D64',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  topicItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#192D64',
    flex: 1,
    marginRight: 8,
  },
  hotTag: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  hotTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  topicStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
  },
  idCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  idHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  idTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#192D64',
  },
  activeTag: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  idLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  idDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: '#6B7280',
  },
  bottomSpacing: {
    height: 120,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#557CFE',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    padding: 10,
  },
});
