import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  onSearchSubmit?: any;
};
const Searchbar = ({
  value,
  setValue,
  placeholder = 'Search',
  onSearchSubmit,
}: SearchBarProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={24} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={(newValue) => setValue(newValue)}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default Searchbar;
