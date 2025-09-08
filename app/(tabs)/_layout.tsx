import { Tabs } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
          height: 0,
          opacity: 0,
        },
        tabBarShowLabel: false,
        tabBarButton: () => null,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name="profilesetting"
        options={{
          title: 'Profile Setting',
        }}
      />
      <Tabs.Screen
        name="myprofile"
        options={{
          title: 'My Profile',
        }}
      />
      <Tabs.Screen
        name="editprofile"
        options={{
          title: 'Edit Profile',
        }}
      />
      <Tabs.Screen
        name="editprofile_advanced"
        options={{
          title: 'My Edit Profile',
        }}
      />
      <Tabs.Screen
        name="CommunityPage"
        options={{
          title: 'Community',
        }}
      />
    </Tabs>
  );
}
