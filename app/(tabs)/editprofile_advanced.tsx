import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfileAdvanced(): JSX.Element {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [mi, setMi] = useState<string>('');
	const [suffix, setSuffix] = useState<string>('');
	const [dob, setDob] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [province, setProvince] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [barangay, setBarangay] = useState<string>('');
	const [zip, setZip] = useState<string>('');
	const [street, setStreet] = useState<string>('');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={() => router.push('/(tabs)/myprofile')}>
					<Ionicons name="chevron-back" size={22} color="#0C2057" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>My Edit Profile</Text>
				<View style={{ width: 22 }} />
			</View>

			<KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', android: undefined })} style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
					{/* Name grid */}
					<View style={styles.row}>
						<View style={[styles.col, { marginRight: 8 }]}> 
							<Text style={styles.label}>First Name</Text>
							<TextInput placeholder="Enter First Name" placeholderTextColor="#4B5563" value={firstName} onChangeText={setFirstName} style={styles.input} />
						</View>
						<View style={[styles.col, { marginLeft: 8 }]}> 
							<Text style={styles.label}>Last Name</Text>
							<TextInput placeholder="Enter Last Name" placeholderTextColor="#4B5563" value={lastName} onChangeText={setLastName} style={styles.input} />
						</View>
					</View>

					<View style={styles.row}>
						<View style={[styles.col, { marginRight: 8 }]}> 
							<Text style={styles.label}>MI</Text>
							<TextInput placeholder="MI" placeholderTextColor="#4B5563" value={mi} onChangeText={setMi} style={styles.input} />
						</View>
						<View style={[styles.col, { marginLeft: 8 }]}> 
							<Text style={styles.label}>Suffix</Text>
							<TextInput placeholder="Suffix" placeholderTextColor="#4B5563" value={suffix} onChangeText={setSuffix} style={styles.input} />
						</View>
					</View>

					<View style={styles.row}>
						<View style={[styles.col, { marginRight: 8 }]}> 
							<Text style={styles.label}>Date of Birth</Text>
							<TextInput placeholder="yyyy/mm/dd" placeholderTextColor="#4B5563" value={dob} onChangeText={setDob} style={styles.input} />
							<Text style={styles.helper}>Must be a valid date.</Text>
						</View>
						<View style={[styles.col, { marginLeft: 8 }]}> 
							<Text style={styles.label}>Gender</Text>
							<TextInput placeholder="F/M" placeholderTextColor="#4B5563" value={gender} onChangeText={setGender} style={styles.input} />
						</View>
					</View>

					<Text style={styles.label}>Phone Number</Text>
					<TextInput placeholder="Enter your phone" placeholderTextColor="#4B5563" value={phone} onChangeText={setPhone} style={styles.input} />

					<Text style={styles.label}>Email</Text>
					<TextInput placeholder="Enter your email" placeholderTextColor="#4B5563" value={email} onChangeText={setEmail} autoCapitalize="none" style={styles.input} />

					<Text style={styles.sectionTitle}>Current Address</Text>

					{/* Dropdown-like rows */}
					<Text style={styles.smallLabel}>Province</Text>
					<View style={styles.selectRow}>
						<TextInput placeholder="Select province" placeholderTextColor="#4B5563" value={province} onChangeText={setProvince} style={[styles.input, styles.selectInput]} />
						<Ionicons name="chevron-down" size={16} color="#0C2057" />
					</View>

					<Text style={styles.smallLabel}>City</Text>
					<View style={styles.selectRow}>
						<TextInput placeholder="Select city" placeholderTextColor="#4B5563" value={city} onChangeText={setCity} style={[styles.input, styles.selectInput]} />
						<Ionicons name="chevron-down" size={16} color="#0C2057" />
					</View>

					<Text style={styles.smallLabel}>Barangay</Text>
					<View style={styles.selectRow}>
						<TextInput placeholder="Select barangay" placeholderTextColor="#4B5563" value={barangay} onChangeText={setBarangay} style={[styles.input, styles.selectInput]} />
						<Ionicons name="chevron-down" size={16} color="#0C2057" />
					</View>

					<Text style={styles.smallLabel}>Zip Code</Text>
					<View style={styles.selectRow}>
						<TextInput placeholder="Enter zip" placeholderTextColor="#4B5563" keyboardType="numeric" value={zip} onChangeText={setZip} style={[styles.input, styles.selectInput]} />
						<Ionicons name="chevron-down" size={16} color="#0C2057" />
					</View>

					<Text style={styles.smallLabel}>House Number and Street Address</Text>
					<Text style={styles.helper}>Enter house number and street address</Text>
					<TextInput placeholder="ex. 123 Mabuhay street" placeholderTextColor="#4B5563" value={street} onChangeText={setStreet} style={[styles.input, { height: 64, textAlignVertical: 'top' }]} multiline />

					<View style={styles.actionRow}>
						<TouchableOpacity style={[styles.actionBtn, styles.cancelBtn]} onPress={() => router.push('/(tabs)/myprofile')}>
							<Text style={[styles.actionText, styles.cancelText]}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.actionBtn, styles.saveBtn]} onPress={() => router.push('/(tabs)/myprofile')}>
							<Text style={styles.actionText}>Save Changes</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#FFFFFF' },
	headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 10, paddingHorizontal: 16 },
	headerTitle: { flex: 1, textAlign: 'left', fontSize: 18, fontWeight: '700', color: '#0C2057' },
	scrollContent: { paddingHorizontal: 16, paddingBottom: 24 },
	row: { flexDirection: 'row', marginBottom: 10 },
	col: { flex: 1 },
	label: { fontSize: 12, fontWeight: '600', color: '#0C2057', marginBottom: 6 },
	smallLabel: { fontSize: 12, fontWeight: '600', color: '#0C2057', marginBottom: 6, marginTop: 4 },
	sectionTitle: { fontSize: 14, fontWeight: '700', color: '#0C2057', marginTop: 10, marginBottom: 6 },
	input: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: '#FFFFFF', fontSize: 14, color: '#374151' },
	helper: { fontSize: 10, color: '#4B5563', marginTop: 4 },
	selectRow: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#0C2057', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, marginBottom: 8 },
	selectInput: { flex: 1, borderWidth: 0, paddingHorizontal: 0, paddingVertical: 6 },
	actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, marginBottom: 18 },
	actionBtn: { flex: 1, height: 44, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
	cancelBtn: { backgroundColor: '#E5E7EB', marginRight: 8 },
	saveBtn: { backgroundColor: '#23386F', marginLeft: 8 },
	actionText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
	cancelText: { color: '#0C2057' },
});
