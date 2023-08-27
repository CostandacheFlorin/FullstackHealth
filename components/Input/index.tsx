import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
  KeyboardType,
} from 'react-native';
import { colors } from '../../styles/constants';
interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: boolean;
  errorMessage: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  type?: KeyboardType;
  placeholder?: string;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  errorMessage,
  labelStyle,
  inputStyle,
  placeholder,
  type = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={type}
      />
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});

export default Input;
