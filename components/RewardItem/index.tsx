import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/constants';

type RewardItemProps = {
  id: string | number;
  title: string;
  imageSource: string;
  description: string;
  rewardValue: number;
};

const RewardItem = ({
  id,
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
    backgroundColor: colors.tertiary,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.primary,
  },
  reward: {
    textAlign: 'center',
    color: colors.secondary,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 'auto',
    resizeMode: 'stretch',
  },
  description: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  submitButton: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  submitText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default RewardItem;
