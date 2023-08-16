import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type StarRatingProps = {
  rating: number;
};
const StarRating = ({ rating }: StarRatingProps) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <Entypo key={index} name="star" size={20} color="black" />
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <Entypo key={index} name="star" size={20} color="gold" />
      ))}
    </View>
  );
};

export default StarRating;
