import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

type RewardItemProps = {
  title: string;
  imageSource: string;
  description: string;
  rewardValue: number;
};

const RewardItem = ({
  title,
  imageSource,
  description,
  rewardValue,
}: RewardItemProps) => {
  const redeemHandler = () => {
    console.log('RESPECT');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: imageSource }} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.reward}>{`Cost: ${rewardValue} points`}</Text>

      <TouchableOpacity style={styles.submitButton} onPress={redeemHandler}>
        <Text style={styles.submitText}>Redeem</Text>
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
    backgroundColor: 'lightgray',
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
  submitButton: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  submitText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default RewardItem;
