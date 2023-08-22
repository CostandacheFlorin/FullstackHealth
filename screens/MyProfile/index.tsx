import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types/Navigation';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type ChallengeDetailsRouteProp = RouteProp<RootStackParamList, 'MyProfile'>;
type ChallengeDetailsNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'MyProfile'
>;

type Props = {
  navigation: ChallengeDetailsNavigationProp['navigation'];
};

const MyProfile = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.points}>Level</Text>
        <Text style={styles.points}>Points: 1000</Text>
        <Text style={styles.streak}>Current Streak: 7 days</Text>
        <Text style={styles.streak}>Highest Streak: 14 days</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RedeemedList')}
          style={styles.inventoryButton}
        >
          <Text style={styles.buttonText}>View redeem history</Text>
        </TouchableOpacity>

        <Text style={styles.streak}>0/47 achievements</Text>

        <TouchableOpacity style={styles.inventoryButton}>
          <Text style={styles.buttonText}>Check my achievements</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F1C',
  },
  header: {
    backgroundColor: '#FF9F1C',
    paddingVertical: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 30,
    marginTop: -30,
  },
  username: {
    fontSize: 28,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  points: {
    fontSize: 20,
    marginBottom: 10,
    color: '#555',
  },
  streak: {
    fontSize: 20,
    marginBottom: 10,
    color: '#555',
  },
  inventoryButton: {
    backgroundColor: '#FF9F1C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyProfile;
