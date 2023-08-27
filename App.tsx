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
import CreateReward from './screens/CreateReward';
import Register from './screens/Register';
import Login from './screens/Login';
import UnlockedRewards from './screens/UnlockedRewards';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="CreateChallenge"
          component={CreateChallenge}
          options={{ title: 'Create a challenge' }}
        />
        <Stack.Screen name="ChallengesList" component={ChallengesList} />
        <Stack.Screen name="RewardsList" component={RewardsList} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen
          name="RedeemedList"
          component={RedeemedList}
          options={{ headerBackTitle: 'My profile' }}
        />
        <Stack.Screen name="CreateReward" component={CreateReward} />
        <Stack.Screen
          name="UnlockedRewards"
          component={UnlockedRewards}
          options={{ headerTitle: 'Your rewards' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
