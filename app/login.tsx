import React from 'react';
import LoginScreen from '@/components/LoginScreen';
import { router } from 'expo-router';

export default function LoginPage() {
  const handleLoginSuccess = () => {
    // Navigate to welcome page after successful login
    router.replace('/welcome');
  };

  return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
}
