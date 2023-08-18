import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import ChallengeItem from '../../components/ChallengeItem';
import Searchbar from '../../components/Searchbar';

export enum Difficulties {
  BEGINNER = 1,
  INTERMEDIATE = 2,
  ADVANCED = 3,
  EXPERT = 4,
  IRON_MAN = 5,
}

const networkImage = 'https://i.imgur.com/DiYUpnd.jpeg';
const DUMMY_CHALLENGES = [
  {
    id: 1,
    title: '30 push ups',
    imageSource: networkImage,
    description: 'Complete 30 push ups',
    rewardValue: 33,
    difficultyLevel: Difficulties.BEGINNER,
  },
  {
    id: 2,
    title: '40 push ups',
    imageSource: networkImage,
    description: 'Complete 40 push ups',
    rewardValue: 43,
    difficultyLevel: Difficulties.INTERMEDIATE,
  },
  {
    id: 3,
    title: '50 push ups',
    imageSource: networkImage,
    description: 'Complete 50 push ups',
    rewardValue: 53,
    difficultyLevel: Difficulties.ADVANCED,
  },
  {
    id: 4,
    title: '60 push ups',
    imageSource: networkImage,
    description: 'Complete 60 push ups',
    rewardValue: 63,
    difficultyLevel: Difficulties.EXPERT,
  },
  {
    id: 5,
    title: '70 push ups',
    imageSource: networkImage,
    description: 'Complete 70 push ups',
    rewardValue: 73,
    difficultyLevel: Difficulties.IRON_MAN,
  },
  {
    id: 6,
    title: '80 push ups',
    imageSource: networkImage,
    description: 'Complete 80 push ups',
    rewardValue: 83,
    difficultyLevel: Difficulties.IRON_MAN,
  },
];

const data = [
  { label: 'Beginner', value: 1 },
  { label: 'Intermediate', value: 2 },
  { label: 'Advanced', value: 3 },
  { label: 'Expert', value: 4 },
  { label: 'Iron man', value: 5 },
];

const ChallengesList = () => {
  const [searchText, setSearchText] = useState('');
  const [difficulties, setDifficulties] = useState<string[]>([]);

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

        <View style={styles.dropdownContainer}>
          <Text>Difficulty level</Text>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select difficulty"
            searchPlaceholder="Search..."
            value={difficulties}
            onChange={(item) => {
              setDifficulties(item);
            }}
          />
        </View>
      </View>
      <FlatList
        data={DUMMY_CHALLENGES}
        keyExtractor={(challenge) => challenge.id.toString()}
        renderItem={({ item }) => {
          return (
            <ChallengeItem
              title={item.title}
              description={item.description}
              difficultyLevel={item.difficultyLevel}
              imageSource={item.imageSource}
              rewardValue={item.rewardValue}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {},
  dropdownContainer: {
    padding: 16,
    gap: 10,
  },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});

export default ChallengesList;
