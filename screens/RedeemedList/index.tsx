import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { DUMMY_REWARDS } from '../RewardsList';
import RedeemedItem from '../../components/RedeemedItem';

const RedeemedList = () => {
  return (
    <View>
      <FlatList
        data={DUMMY_REWARDS}
        keyExtractor={(challenge) => challenge.id.toString()}
        renderItem={({ item }) => {
          return (
            <RedeemedItem
              id={item.id}
              title={item.title}
              description={item.description}
              imageSource={item.imageSource}
              rewardValue={item.rewardValue}
              usedAt={item.usedAt}
              redeemedAt={item.createdAt}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RedeemedList;
