import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileSetting(): JSX.Element {
	const [fullName] = useState<string>('John Doe');

	const rows = [
		{ id: 'my-profile', label: 'My Profile' },
		{ id: 'details', label: 'View Account Details' },
		{ id: 'help', label: 'Help & Support' },
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/index'))}>
					<Ionicons name="chevron-back" size={22} color="#0C2057" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Account Settings</Text>
				<View style={{ width: 22 }} />
			</View>

			<Text style={styles.sectionTitle}>My Profile</Text>

			<View style={styles.avatarWrap}>
				<View>
					<Image source={require('@/assets/images/icon.png')} style={styles.avatar} />
					<TouchableOpacity style={styles.avatarEdit}>
						<Ionicons name="create-outline" size={14} color="#FFFFFF" />
					</TouchableOpacity>
				</View>
				<Text style={styles.profileName}>{fullName}</Text>
			</View>

			<View style={styles.menuList}>
				{rows.map((r) => (
					<View key={r.id} style={styles.menuItemWrap}>
						<TouchableOpacity
							style={styles.menuItem}
							onPress={() => {
								if (r.id === 'my-profile') router.push('/(tabs)/myprofile');
							}}
						>
							<View style={styles.bullet} />
							<Text style={styles.menuText}>{r.label}</Text>
						</TouchableOpacity>
						<View style={styles.separator} />
					</View>
				))}
			</View>

			<TouchableOpacity style={styles.logoutBtn}>
				<Text style={styles.logoutText}>Logout</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 32 },
	headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 10 },
	headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#0C2057' },
	sectionTitle: { marginTop: 2, textAlign: 'center', fontSize: 14, fontWeight: '700', color: '#0C2057' },
	avatarWrap: { alignItems: 'center', marginTop: 6, marginBottom: 8 },
	avatar: { width: 112, height: 112, borderRadius: 56, backgroundColor: '#E6EEFF' },
	avatarEdit: { position: 'absolute', bottom: 4, right: 4, backgroundColor: '#3366CC', width: 24, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#FFFFFF' },
	profileName: { marginTop: 8, fontSize: 16, fontWeight: '700', color: '#0C2057' },
	menuList: { marginTop: 12, paddingHorizontal: 32 },
	menuItemWrap: { marginBottom: 12 },
	menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
	bullet: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#F1F5F9', borderWidth: 1, borderColor: '#E2E8F0', marginRight: 12 },
	menuText: { fontSize: 14, color: '#0C2057', fontWeight: '600' },
	separator: { height: 1, backgroundColor: '#E5E7EB' },
	logoutBtn: { marginTop: 24, backgroundColor: '#23386F', borderRadius: 8, height: 48, alignItems: 'center', justifyContent: 'center', marginBottom: 24, marginHorizontal: 32 },
	logoutText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
