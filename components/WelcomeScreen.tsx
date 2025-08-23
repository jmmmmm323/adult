import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Image,
	ViewStyle,
	TextStyle,
	ImageStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

interface WelcomeScreenProps {
	onGetStarted?: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
	const handleGetStarted = () => {
		onGetStarted?.();
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<LinearGradient
				colors={["#FFFFFF", "#CCD9FD"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={styles.container}
			>
				{/* Decorative wave - using a placeholder for now */}
				<View style={styles.wave} />
				
				<View style={styles.content}>
					{/* Header */}
					<View style={styles.header}>
						<Text style={styles.title}>Welcome</Text>
					</View>

					{/* Main Image */}
					<View style={styles.imageContainer}>
						<Image
							source={require('../assets/images/preview1.jpg')}
							style={styles.mainImage}
							resizeMode="cover"
						/>
					</View>

					{/* Subtitle */}
					<View style={styles.subtitleContainer}>
						<Text style={styles.subtitle}>Learn deeply with</Text>
					</View>

					{/* Description */}
					<View style={styles.descriptionContainer}>
						<Text style={styles.description}>
							Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dolor ante. Nullam feugiat egestas elit et vehicula. Proin venenatis, orci nec cursus tristique, nulla risus mattis eros, id accumsan massa elit eu augue. Mauris massa ipsum, pharetra id nibh eget, sodales facilisis enim.
						</Text>
					</View>

					{/* Get Started Button */}
					<TouchableOpacity
						style={styles.getStartedButton}
						onPress={handleGetStarted}
					>
						<Text style={styles.getStartedButtonText}>Let's Get Started</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

interface Styles {
	safeArea: ViewStyle;
	container: ViewStyle;
	wave: ViewStyle;
	content: ViewStyle;
	header: ViewStyle;
	title: TextStyle;
	imageContainer: ViewStyle;
	mainImage: ImageStyle;
	subtitleContainer: ViewStyle;
	subtitle: TextStyle;
	descriptionContainer: ViewStyle;
	description: TextStyle;
	getStartedButton: ViewStyle;
	getStartedButtonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		borderRadius: 40,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 6,
		paddingHorizontal: 24,
		paddingTop: 32,
		paddingBottom: 24,
		overflow: 'hidden',
	},
	wave: {
		position: 'absolute',
		left: -10,
		right: -10,
		top: -220,
		height: 360,
		width: '120%',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderRadius: 200,
	},
	content: {
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 40,
		paddingBottom: 40,
	},
	header: {
		alignItems: 'center',
		marginBottom: 20,
	},
	title: {
		fontSize: 40,
		fontWeight: '700',
		lineHeight: 47,
		color: '#0C2057',
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	mainImage: {
		width: 280,
		height: 200,
		borderRadius: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	subtitleContainer: {
		alignItems: 'center',
		marginBottom: 16,
	},
	subtitle: {
		fontSize: 24,
		fontWeight: '600',
		color: '#0C2057',
		textAlign: 'center',
	},
	descriptionContainer: {
		marginBottom: 32,
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
		color: '#16295F',
		textAlign: 'left',
	},
	getStartedButton: {
		backgroundColor: '#192D64',
		borderWidth: 1,
		borderColor: '#2B4FB5',
		borderRadius: 12,
		paddingVertical: 18,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	getStartedButtonText: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: '600',
	},
});

export default WelcomeScreen;
