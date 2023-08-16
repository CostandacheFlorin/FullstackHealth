import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from '../ReviewStars';
import { Difficulties } from '../../screens/ChallengesList';

type ChallengeItemProps = {
  title: string;
  imageSource: string;
  description: string;
  rewardValue: number;
  difficultyLevel: string;
};

const getDifficultyLevelAsNumber = (level: string) => {
  if (level === Difficulties.BEGINNER) {
    return 1;
  }
  if (level === Difficulties.INTERMEDIATE) {
    return 2;
  }
  if (level === Difficulties.ADVANCED) {
    return 3;
  }
  if (level === Difficulties.EXPERT) {
    return 4;
  }
  if (level === Difficulties.IRON_MAN) {
    return 5;
  }
  return 5;
};

const ChallengeItem = ({
  title,
  imageSource,
  description,
  rewardValue,
  difficultyLevel,
}: ChallengeItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: imageSource }} />

      <Text style={styles.description}>{description}</Text>
      <Text style={styles.reward}>{`Reward: ${rewardValue} points`}</Text>

      <View style={styles.difficultyContainer}>
        <Text>Difficulty level</Text>
        <StarRating rating={getDifficultyLevelAsNumber(difficultyLevel)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 30,
    padding: 20,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  reward: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 'auto',
    resizeMode: 'stretch',
  },
  description: {
    fontSize: 20,
    color: 'brown',
    textAlign: 'center',
  },
  difficultyContainer: {
    gap: 10,
    alignSelf: 'center',
  },
});

export default ChallengeItem;
