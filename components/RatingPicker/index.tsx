import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type RatingPickerProps = {
  rating: number;
  setRating: (rating: number) => void;
  style?: ViewStyle;
};
const RatingPicker = ({ rating, setRating, style }: RatingPickerProps) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  const setRatingValue = (newValue: number) => {
    setRating(newValue);
  };
  return (
    <View style={{ flexDirection: 'row', ...style }}>
      {[...Array(filledStars)].map((_, index) => (
        <Entypo
          key={index}
          onPress={() => setRatingValue(index + 1)}
          name="star"
          size={30}
          color="gold"
        />
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <Entypo
          key={index}
          onPress={() => setRatingValue(index + filledStars + 1)}
          name="star"
          size={30}
          color="black"
        />
      ))}
    </View>
  );
};

export default RatingPicker;
