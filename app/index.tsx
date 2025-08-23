import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // Redirect to welcome screen by default
    router.replace('/welcome');
  }, []);

  return null;
}
