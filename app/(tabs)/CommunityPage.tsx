import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface CommentItem {
  id: string;
  user: string;
  ago: string;
  text: string;
}

interface PostItem {
  id: string;
  user: string;
  ago: string;
  text: string;
  tags: string[];
  commentsCount: number;
  comments: CommentItem[];
}

export default function CommunityPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('community');
  const [isComposerOpen, setIsComposerOpen] = useState<boolean>(false);
  const [composerText, setComposerText] = useState<string>('');
  const [composerTags, setComposerTags] = useState<string>('');
  const scrollRef = useRef<ScrollView | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: 'p1',
      user: 'John Doe',
      ago: '2h Ago',
      text: "Just got my Digital Driver's License approved! Here's a quick walkthrough of the process.",
      tags: ['#Digital ID', '#Success'],
      commentsCount: 4,
      comments: [
        { id: 'c1', user: 'Mike Johnson', ago: '1h Ago', text: 'Congrats! How long did the whole process take?' },
        { id: 'c2', user: 'John Doe', ago: '45m Ago', text: 'About 7 business days from submission to approval.' },
      ],
    },
    {
      id: 'p2',
      user: 'Alex Rivera',
      ago: '4h Ago',
      text: "PSA: Don’t make the same mistakes I did – bring photocopies.",
      tags: ['#CommunityHelp'],
      commentsCount: 2,
      comments: [],
    },
    {
      id: 'p3',
      user: 'Jessica Lee',
      ago: '1d Ago',
      text: 'Looking for advice on passport renewal timelines.',
      tags: ['#Travel', '#Passport'],
      commentsCount: 0,
      comments: [],
    },
  ]);

  const handlePost = (): void => {
    const text = composerText.trim() || 'New post';
    const parsed = composerTags
      .split(/[\,\s]+/)
      .filter(Boolean)
      .map((t) => (t.startsWith('#') ? t : `#${t}`));

    const newPost: PostItem = {
      id: `p-${Date.now()}`,
      user: 'John Doe',
      ago: 'Just now',
      text,
      tags: parsed.length ? parsed : ['#General'],
      commentsCount: 0,
      comments: [],
    };

    setPosts((prev) => [newPost, ...prev]);
    setIsComposerOpen(false);
    setComposerText('');
    setComposerTags('');
    Alert.alert('Posted', 'Your post was added to the feed.');
    setTimeout(() => {
      if (scrollRef.current && typeof scrollRef.current.scrollTo === 'function') {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    }, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerCard}>
          <View style={styles.profileSection}>
            <Image source={require('@/assets/images/icon.png')} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
              <Text style={styles.userName}>John Doe</Text>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchRow}>
              <View style={[styles.searchBar, styles.searchBarActive]}>
                <Text style={styles.searchPlaceholder}>Search here...</Text>
                <TouchableOpacity style={styles.searchButton}>
                  <Ionicons name="search" size={18} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.plusButton} onPress={() => setIsComposerOpen(true)}>
                <Ionicons name="add" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.searchSubtext}>Find documents, Topics, etc.</Text>
          </View>
        </View>

        {posts.map((post) => (
          <View key={post.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Image source={require('@/assets/images/icon.png')} style={styles.cardAvatar} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardUser}>{post.user}</Text>
                  <Text style={styles.cardMeta}>{post.ago}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.dotBtn}>
                <Ionicons name="ellipsis-horizontal" size={18} color="#687076" />
              </TouchableOpacity>
            </View>

            <Text style={styles.postText}>{post.text}</Text>
            <View style={styles.chipsRow}>
              {post.tags.map((tag, idx) => (
                <View key={`${post.id}-tag-${idx}`} style={[styles.chip, idx === 0 ? null : styles.chipSecondary]}>
                  <Text style={[styles.chipText, idx === 0 ? null : styles.chipTextSecondary]}>
                    {tag.startsWith('#') ? tag : `#${tag}`}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.divider} />
            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Ionicons name="chatbubble-outline" size={20} color="#0C2057" />
                <Text style={styles.actionText}>{post.commentsCount}</Text>
              </View>
            </View>

            {post.comments.map((c) => (
              <View key={c.id} style={styles.commentRow}>
                <Image source={require('@/assets/images/icon.png')} style={styles.commentAvatar} />
                <View style={styles.commentBubble}>
                  <Text style={styles.commentAuthor}>
                    {c.user} <Text style={styles.cardMeta}>{c.ago}</Text>
                  </Text>
                  <Text style={styles.commentText}>{c.text}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {isComposerOpen && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Create New Post</Text>
              <TouchableOpacity onPress={() => setIsComposerOpen(false)} style={styles.modalClose}>
                <Ionicons name="close" size={20} color="#0C2057" />
              </TouchableOpacity>
            </View>
            <TextInput
              value={composerText}
              onChangeText={setComposerText}
              placeholder="What's On Your Mind?"
              placeholderTextColor="#687076"
              multiline
              style={styles.modalInput}
            />
            <TextInput
              value={composerTags}
              onChangeText={setComposerTags}
              placeholder="#Tags"
              placeholderTextColor="#687076"
              style={styles.modalTags}
            />
            <TouchableOpacity style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/index'))}>
            <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="card-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="location-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const CARD_RADIUS = 10;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F5FA' },
  scrollContent: { padding: 12, paddingBottom: 96 },
  headerCard: { backgroundColor: 'transparent', paddingHorizontal: 0, marginBottom: 12 },
  profileSection: { flexDirection: 'row', alignItems: 'center', marginTop: 8, marginBottom: 12 },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  profileInfo: { flex: 1 },
  welcomeText: { fontSize: 14, color: '#A1CEDC', marginBottom: 4 },
  userName: { fontSize: 24, fontWeight: 'bold', color: '#192D64' },
  searchContainer: { marginBottom: 12 },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flex: 1,
  },
  searchBarActive: { borderColor: '#0C2057' },
  searchPlaceholder: { flex: 1, fontSize: 16, color: '#9CA3AF' },
  searchButton: { backgroundColor: '#0C2057', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  plusButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#0C2057', alignItems: 'center', justifyContent: 'center' },
  searchSubtext: { fontSize: 12, color: '#9CA3AF', marginTop: 8, marginLeft: 4 },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: CARD_RADIUS,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#0C2057',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  cardHeaderLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  cardAvatar: { width: 24, height: 24, borderRadius: 12, marginRight: 8 },
  cardUser: { fontSize: 13, fontWeight: '600', color: '#192D64' },
  cardMeta: { fontSize: 11, color: '#8A9099' },
  dotBtn: { padding: 4, borderRadius: 12 },
  postText: { fontSize: 12, color: '#2A3342', lineHeight: 18, marginBottom: 8 },
  chipsRow: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  chip: { backgroundColor: '#E8F0FF', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4 },
  chipText: { fontSize: 11, color: '#192D64', fontWeight: '600' },
  chipSecondary: { backgroundColor: '#F0F3F7' },
  chipTextSecondary: { color: '#687076', fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#EDEFF3', marginBottom: 8 },
  actionsRow: { flexDirection: 'row', gap: 16, marginBottom: 10 },
  actionItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionText: { fontSize: 12, color: '#687076' },
  commentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 8 },
  commentAvatar: { width: 18, height: 18, borderRadius: 9 },
  commentBubble: { flex: 1, backgroundColor: '#F7F8FA', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 },
  commentAuthor: { fontSize: 11, fontWeight: '600', color: '#192D64', marginBottom: 2 },
  commentText: { fontSize: 11, color: '#2A3342' },

  // Modal styles (composer)
  modalOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0C2057',
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#192D64',
  },
  modalClose: { padding: 6, borderRadius: 12 },
  modalInput: {
    minHeight: 64,
    backgroundColor: '#E6EEFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    color: '#2A3342',
  },
  modalTags: {
    height: 40,
    backgroundColor: '#E6EEFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
    color: '#2A3342',
  },
  postButton: {
    backgroundColor: '#23386F',
    borderRadius: 12,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },

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
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  navItem: { padding: 10 },
});
