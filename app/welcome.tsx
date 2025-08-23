import React from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import { router } from 'expo-router';

export default function WelcomePage() {
	const handleGetStarted = () => {
		router.replace('/login');
	};

	return <WelcomeScreen onGetStarted={handleGetStarted} />;
}
