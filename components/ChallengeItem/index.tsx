import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StarRating from '../StarRating';
import { Difficulties } from '../../screens/ChallengesList';

type ChallengeItemProps = {
  title: string;
  imageSource: string;
  description: string;
  rewardValue: number;
  difficultyLevel: number;
};

const ChallengeItem = ({
  title,
  imageSource,
  description,
  rewardValue,
  difficultyLevel,
}: ChallengeItemProps) => {
  const acceptChallengeHandler = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: imageSource }} />

      <Text style={styles.description}>{description}</Text>
      <Text style={styles.reward}>{`Reward: ${rewardValue} points`}</Text>

      <View style={styles.difficultyContainer}>
        <Text style={{ textAlign: 'center' }}>Difficulty level</Text>
        <StarRating rating={difficultyLevel} />
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={acceptChallengeHandler}
      >
        <Text style={styles.submitText}>Accept</Text>
      </TouchableOpacity>
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
    backgroundColor: 'gray',
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
  submitButton: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  submitText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChallengeItem;
