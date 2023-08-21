import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode } from 'expo-av';
import RatingPicker from '../../components/RatingPicker';

const CreateChallenge = () => {
  const [difficultyLevel, setDifficultyLevel] = useState<number>(0);
  const [media, setMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | undefined>();
  const [status, setStatus] = useState({});
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.assets[0].uri);
      setMediaType(result.assets[0].type);
    }
  };

  const createChallengeHandler = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a challenge</Text>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Reward value</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.label}>Image / Video</Text>
        <Button title="Pick an image" onPress={pickImage} />
        {mediaType === 'image' && media && (
          <Image source={{ uri: media }} style={styles.media} />
        )}
        {mediaType === 'video' && media && (
          <Video
            source={{ uri: media }}
            style={styles.media}
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
      </View>

      <View>
        <Text style={styles.label}>Difficulty level</Text>
        <RatingPicker
          style={{ alignSelf: 'center', margin: 5 }}
          rating={difficultyLevel}
          setRating={setDifficultyLevel}
        />
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={createChallengeHandler}
      >
        <Text style={styles.submitText}>Create a challenge</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
  },
  media: {
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
  submitButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    alignSelf: 'center',
  },
  submitText: {
    fontWeight: 'bold',
  },
});

export default CreateChallenge;
