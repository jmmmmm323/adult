import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
	Alert,
	Image,
	ImageStyle,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

interface LoginScreenProps {
  onLoginSuccess?: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const handleLogin = async (): Promise<void> => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // For testing purposes - accept any non-empty username and password
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Success', 
        'Login successful!',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('Login successful for:', email);
              onLoginSuccess?.();
            }
          }
        ]
      );
    }, 1500);
  };

  return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.flex1}
			>
				<LinearGradient
					colors={["#FFFFFF", "#CCD9FD"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={styles.container}
				>
					{/* Decorative wave - using a placeholder for now */}
					<View style={styles.wave} />
					<Text style={styles.brand}></Text>

					<View style={styles.content}>
						{/* Header */}
						<View style={styles.header}>
							<Text style={styles.title}>Welcome Back!</Text>
							<Text style={styles.subtitle}>Login to continue to your account</Text>
						</View>

						{/* Login Form */}
						<View style={styles.form}>
							<View style={styles.inputContainer}>
								<Text style={styles.hiddenLabel}>Username</Text>
								<TextInput
									style={styles.input}
									placeholder="Username"
									placeholderTextColor="#16295F99"
									value={email}
									onChangeText={setEmail}
									autoCapitalize="none"
									autoCorrect={false}
								/>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.hiddenLabel}>Password</Text>
								<View style={styles.passwordRow}>
									<TextInput
										style={[styles.input, styles.passwordInput]}
										placeholder="Password"
										placeholderTextColor="#16295F99"
										value={password}
										onChangeText={setPassword}
										secureTextEntry={isPasswordHidden}
										autoCapitalize="none"
									/>
									<TouchableOpacity
										style={styles.eyeButton}
										onPress={() => setIsPasswordHidden(!isPasswordHidden)}
										accessibilityLabel={isPasswordHidden ? 'Show password' : 'Hide password'}
									>
										<Image
											source={isPasswordHidden 
												? require('../assets/images/close.png')
												: require('../assets/images/open.png')
											}
											style={styles.eyeIcon}
										/>
									</TouchableOpacity>
								</View>
							</View>

							{/* Forgot Password */}
							<TouchableOpacity style={styles.forgotPassword}>
								<Text style={styles.forgotPasswordText}>Forget Password?</Text>
							</TouchableOpacity>

							{/* Login Button */}
							<TouchableOpacity
								style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
								onPress={handleLogin}
								disabled={isLoading}
							>
								<Text style={styles.loginButtonText}>
									{isLoading ? 'Signing In...' : 'Log In'}
								</Text>
							</TouchableOpacity>

							{/* OR Divider */}
							<View style={styles.orContainer}>
								<View style={styles.orLine} />
								<Text style={styles.orText}>or</Text>
								<View style={styles.orLine} />
							</View>

							{/* Social Icons */}
							<View style={styles.socialRow}>
								<Image source={require('../assets/images/image 1.png')} style={styles.socialIcon} />
								<Image source={require('../assets/images/image 2.png')} style={styles.socialIcon} />
								<Image source={require('../assets/images/image 3.png')} style={styles.socialIcon} />
							</View>

							{/* Sign Up Link */}
							<View style={styles.signupContainer}>
								<Text style={styles.signupText}>Not a member yet? </Text>
								<TouchableOpacity>
									<Text style={styles.signupLink}>Sign up</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</LinearGradient>
			</KeyboardAvoidingView>
		</SafeAreaView>
  );
};

interface Styles {
	safeArea: ViewStyle;
	flex1: ViewStyle;
	container: ViewStyle;
	wave: ViewStyle;
	brand: TextStyle;
	content: ViewStyle;
	header: ViewStyle;
	title: TextStyle;
	subtitle: TextStyle;
	form: ViewStyle;
	inputContainer: ViewStyle;
	hiddenLabel: TextStyle;
	passwordRow: ViewStyle;
	input: TextStyle;
	passwordInput: TextStyle;
	eyeButton: ViewStyle;
	eyeIcon: ImageStyle;
	forgotPassword: ViewStyle;
	forgotPasswordText: TextStyle;
	loginButton: ViewStyle;
	loginButtonDisabled: ViewStyle;
	loginButtonText: TextStyle;
	orContainer: ViewStyle;
	orLine: ViewStyle;
	orText: TextStyle;
	socialRow: ViewStyle;
	socialIcon: ImageStyle;
	signupContainer: ViewStyle;
	signupText: TextStyle;
	signupLink: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	safeArea: {
		flex: 1,
	},
	flex1: {
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
	brand: {
		position: 'absolute',
		top: 28,
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: '500',
		letterSpacing: 0.2,
		color: '#FFFFFF',
		transform: [{ rotate: '1.03deg' }],
	},
	content: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		alignItems: 'center',
		marginBottom: 24,
	},
	title: {
		fontSize: 40,
		fontWeight: '700',
		lineHeight: 47,
		color: '#0C2057',
	},
	subtitle: {
		marginTop: 8,
		fontSize: 15,
		lineHeight: 18,
		color: '#0C2057',
		textAlign: 'center',
	},
	form: {
		width: '100%',
		marginTop: 24,
	},
	inputContainer: {
		marginBottom: 16,
	},
	hiddenLabel: {
		display: 'none',
	},
	passwordRow: {
		position: 'relative',
		justifyContent: 'center',
	},
	input: {
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#D9D9D9',
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 16,
		color: '#16295F',
	},
	passwordInput: {
		paddingRight: 44,
	},
	eyeButton: {
		position: 'absolute',
		right: 12,
		top: '50%',
		transform: [{ translateY: -14 }],
		justifyContent: 'center',
		alignItems: 'center',
		width: 28,
		height: 28,
	},
	eyeIcon: {
		width: 20,
		height: 20,
		opacity: 0.7,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginBottom: 12,
	},
	forgotPasswordText: {
		fontSize: 12,
		lineHeight: 16,
		color: 'rgba(0,0,0,0.5)',
	},
	loginButton: {
		backgroundColor: '#192D64',
		borderWidth: 1,
		borderColor: '#2B4FB5',
		borderRadius: 8,
		paddingVertical: 20,
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 24,
	},
	loginButtonDisabled: {
		backgroundColor: '#B0B7CF',
		borderColor: '#B0B7CF',
	},
	loginButtonText: {
		color: '#96ABE6',
		fontSize: 16,
		fontWeight: '400',
	},
	orContainer: {
		marginTop: 8,
		marginBottom: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	},
	orLine: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#000000',
		opacity: 0.5,
	},
	orText: {
		fontSize: 10,
		color: '#000000',
		textTransform: 'uppercase',
	},
	socialRow: {
		marginTop: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 24,
	},
	socialIcon: {
		width: 50,
		height: 50,
		borderRadius: 8,
	},
	signupContainer: {
		marginTop: 32,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	signupText: {
		color: '#16295F',
		fontSize: 13,
	},
	signupLink: {
		color: '#16295F',
		fontSize: 13,
		fontWeight: '700',
	},
});

export default LoginScreen;
