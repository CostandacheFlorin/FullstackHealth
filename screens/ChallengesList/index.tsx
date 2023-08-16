import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import ChallengeItem from '../../components/ChallengeItem';
import Searchbar from '../../components/Searchbar';

export enum Difficulties {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
  IRON_MAN = 'iron',
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
  { label: 'Beginner', value: 'beginner' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced', value: 'advanced' },
  { label: 'Expert', value: 'expert' },
  { label: 'Iron man', value: 'iron' },
];

const ChallengesList = () => {
  const [searchText, setSearchText] = useState('');
  const [difficulties, setDifficulties] = useState<string[]>([]);

  let filteredData = DUMMY_CHALLENGES;
  if (searchText !== '' || difficulties.length !== 0) {
    filteredData = DUMMY_CHALLENGES.filter(
      (challenge) =>
        (difficulties.includes(challenge.difficultyLevel) &&
          challenge.description
            .toLowerCase()
            .includes(searchText.toLowerCase())) ||
        challenge.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  console.log(searchText);
  console.log(DUMMY_CHALLENGES[0].title);
  console.log(
    DUMMY_CHALLENGES[0].description
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
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
        data={filteredData}
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
