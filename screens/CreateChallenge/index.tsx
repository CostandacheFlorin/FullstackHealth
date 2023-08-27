import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode } from 'expo-av';
import RatingPicker from '../../components/RatingPicker';
import Input from '../../components/Input';
import { colors } from '../../styles/constants';

type ChallengeType = {
  title: string;
  description: string;
  value: number;
  image: string;
  difficulty: number;
};

type CreateChallengeErrorsType = {
  title: boolean;
  description: boolean;
  value: boolean;
};

const CreateChallenge = () => {
  const [challenge, setChallenge] = useState<ChallengeType>({
    title: '',
    description: '',
    value: 0,
    image: '',
    difficulty: 0,
  });

  const [errors, setErrors] = useState<CreateChallengeErrorsType>({
    title: false,
    description: false,
    value: false,
  });
  const [difficultyLevel, setDifficultyLevel] = useState<number>(1);
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

  const handleInputChange = (key: string, value: string | number) => {
    setChallenge((prevChallenge) => ({
      ...prevChallenge,
      [key]: value,
    }));
  };

  const createChallengeHandler = () => {
    let tempErrors = {
      title: false,
      description: false,
      value: false,
    };
    if (challenge.title.trim().length === 0) {
      tempErrors = { ...tempErrors, title: true };
    }

    if (challenge.description.trim().length === 0) {
      tempErrors = { ...tempErrors, description: true };
    }

    if (challenge.value <= 0) {
      tempErrors = { ...tempErrors, value: true };
    }

    if (Object.values(tempErrors).some((error) => error)) {
      setErrors(tempErrors);
      return;
    }
    setChallenge({
      title: '',
      description: '',
      value: 0,
      image: '',
      difficulty: 0,
    });

    setErrors({
      title: false,
      description: false,
      value: false,
    });
  };
  return (
    <View style={styles.formContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            label="Title"
            value={challenge.title}
            onChangeText={(value: string) => handleInputChange('title', value)}
            error={errors.title}
            errorMessage="Title cannot be empty"
            labelStyle={{ fontSize: 20, textAlign: 'center' }}
            placeholder="Enter a title"
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="Description"
            value={challenge.description}
            onChangeText={(value: string) =>
              handleInputChange('description', value)
            }
            error={errors.description}
            errorMessage="Description cannot be empty"
            labelStyle={{ fontSize: 20, textAlign: 'center' }}
            placeholder="Choose a description"
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="Reward value"
            value={challenge.value.toString()}
            onChangeText={(value: string) =>
              handleInputChange('value', Number(value))
            }
            error={errors.value}
            errorMessage="Reward value cannot be 0"
            labelStyle={{ fontSize: 20, textAlign: 'center' }}
            placeholder="Set the reward value"
            type="number-pad"
          />
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: colors.background,
    paddingTop: 15,
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
  inputContainer: { marginHorizontal: 25 },
  media: {
    width: '90%',
    height: 300,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  submitText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreateChallenge;
