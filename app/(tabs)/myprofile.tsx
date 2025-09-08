import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MyProfile(): JSX.Element {
	const [fullName, setFullName] = useState<string>('John Doe Salvador');
	const [dob, setDob] = useState<string>('2001/02/23');
	const [gender, setGender] = useState<string>('M');
	const [phone, setPhone] = useState<string>('+63 9209463584');
	const [email, setEmail] = useState<string>('Doe.John@,imail.com');
	const [address, setAddress] = useState<string>('123 Sampaguita Street, Dasma Village\nDasmarinas, Cavite 4114\nPHILIPPINES');
	const [isEditing, setIsEditing] = useState<boolean>(false);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={() => router.push('/(tabs)/profilesetting')}>
					<Ionicons name="chevron-back" size={22} color="#0C2057" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>My Profile</Text>
				<View style={{ width: 22 }} />
			</View>

			<View style={styles.avatarWrap}>
				<View>
					<Image source={require('@/assets/images/icon.png')} style={styles.avatar} />
					<TouchableOpacity style={styles.avatarEdit}>
						<Ionicons name="create-outline" size={14} color="#FFFFFF" />
					</TouchableOpacity>
				</View>
				<Text style={styles.profileName}>John Doe</Text>
			</View>

			<View style={styles.form}>
				<Text style={styles.label}>Full Name</Text>
				<TextInput value={fullName} onChangeText={setFullName} editable={isEditing} style={[styles.input, !isEditing && styles.inputDisabled]} />

				<View style={styles.row}>
					<View style={[styles.col, { marginRight: 10 }]}> 
						<Text style={styles.label}>Date of Birth</Text>
						<TextInput value={dob} onChangeText={setDob} editable={isEditing} style={[styles.input, !isEditing && styles.inputDisabled]} />
					</View>
					<View style={[styles.col, { marginLeft: 10 }]}> 
						<Text style={styles.label}>Gender</Text>
						<TextInput value={gender} onChangeText={setGender} editable={isEditing} style={[styles.input, !isEditing && styles.inputDisabled]} />
					</View>
				</View>

				<Text style={styles.label}>Phone Number</Text>
				<TextInput value={phone} onChangeText={setPhone} editable={isEditing} style={[styles.input, !isEditing && styles.inputDisabled]} />

				<Text style={styles.label}>Email</Text>
				<TextInput value={email} onChangeText={setEmail} editable={isEditing} autoCapitalize="none" style={[styles.input, !isEditing && styles.inputDisabled]} />

				<Text style={styles.label}>Current Address</Text>
				<TextInput
					value={address}
					onChangeText={setAddress}
					editable={isEditing}
					style={[styles.input, !isEditing && styles.inputDisabled, { height: 88, textAlignVertical: 'top' }]}
					multiline
				/>
			</View>

			<TouchableOpacity style={styles.editBtn} onPress={() => router.push('/(tabs)/editprofile_advanced')}>
				<Text style={styles.editText}>Edit</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 32 },
	headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 10 },
	headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#0C2057' },
	avatarWrap: { alignItems: 'center', marginTop: 6, marginBottom: 8 },
	avatar: { width: 112, height: 112, borderRadius: 56, backgroundColor: '#E6EEFF' },
	avatarEdit: { position: 'absolute', bottom: 4, right: 4, backgroundColor: '#3366CC', width: 24, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#FFFFFF' },
	profileName: { marginTop: 8, fontSize: 16, fontWeight: '700', color: '#0C2057' },
	form: { marginTop: 8, paddingHorizontal: 32 },
	label: { fontSize: 12, fontWeight: '600', color: '#6B7280', marginBottom: 4, marginTop: 8 },
	input: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#FFFFFF', fontSize: 14, marginBottom: 0 },
	row: { flexDirection: 'row', marginBottom: 0 },
	col: { flex: 1 },
	editBtn: { marginTop: 12, backgroundColor: '#23386F', borderRadius: 8, height: 44, alignItems: 'center', justifyContent: 'center', marginBottom: 18, marginHorizontal: 32, borderWidth: 1, borderColor: '#E5E7EB' },
	editText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
	inputDisabled: { backgroundColor: '#F8FAFC' },
});
