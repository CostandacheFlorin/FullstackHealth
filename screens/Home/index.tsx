import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/Navigation';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenProps['navigation'];
}

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Button
        title="Create a challenge"
        onPress={() => navigation.navigate('CreateChallenge')}
      />

      <Button
        title="Check the challenges"
        onPress={() => navigation.navigate('ChallengesList')}
      />

      <Button
        title="Check the rewards"
        onPress={() => navigation.navigate('RewardsList')}
      />
    </View>
  );
};

export default HomeScreen;
