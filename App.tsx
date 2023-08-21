import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CreateChallenge from './screens/CreateChallenge';
import ChallengesList from './screens/ChallengesList';
import RewardsList from './screens/RewardsList';
import MyProfile from './screens/MyProfile';
import RedeemedList from './screens/RedeemedList';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="CreateChallenge" component={CreateChallenge} />
        <Stack.Screen name="ChallengesList" component={ChallengesList} />
        <Stack.Screen name="RewardsList" component={RewardsList} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen
          name="RedeemedList"
          component={RedeemedList}
          options={{ headerBackTitle: 'My profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
