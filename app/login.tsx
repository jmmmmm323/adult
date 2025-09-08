import LoginScreen from '@/components/LoginScreen';
import { router } from 'expo-router';

export default function LoginPage() {
  const handleLoginSuccess = () => {
    // Navigate to dashboard after successful login
    router.replace('/(tabs)');
  };

  return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
}
