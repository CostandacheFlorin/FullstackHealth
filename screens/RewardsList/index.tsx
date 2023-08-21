import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Searchbar from '../../components/Searchbar';
import RewardItem from '../../components/RewardItem';
const networkImage = 'https://i.imgur.com/DiYUpnd.jpeg';

export const DUMMY_REWARDS = [
  {
    id: 1,
    title: 'Coke Can',
    imageSource: networkImage,
    description: 'You can drink a can of coke',
    rewardValue: 100,
  },
  {
    id: 2,
    title: 'Chocolate',
    imageSource: networkImage,
    description: 'You can eat a bar of chocolate ',
    rewardValue: 43,
  },
  {
    id: 3,
    title: 'Skip a gym day',
    imageSource: networkImage,
    description: 'You can skip a day of gym',
    rewardValue: 999999,
  },
  {
    id: 4,
    title: 'You can eat a burgir',
    imageSource: networkImage,
    description: 'Burgir',
    rewardValue: 63,
  },
  {
    id: 5,
    title: 'Pizza',
    imageSource: networkImage,
    description: 'Pizza description',
    rewardValue: 73,
  },
];
const RewardsList = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <View>
          <Searchbar
            value={searchText}
            setValue={setSearchText}
            onSearchSubmit={() => console.log(searchText)}
          />
        </View>
      </View>
      <FlatList
        data={DUMMY_REWARDS}
        keyExtractor={(challenge) => challenge.id.toString()}
        renderItem={({ item }) => {
          return (
            <RewardItem
              title={item.title}
              description={item.description}
              imageSource={item.imageSource}
              rewardValue={item.rewardValue}
            />
          );
        }}
      />
    </View>
  );
};

export default RewardsList;
