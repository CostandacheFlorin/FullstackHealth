import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Input';
import { Video, ResizeMode } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';

type RewardType = {
  title: string;
  description: string;
  value: number;
  image: string;
};

type CreateRewardErrorsType = {
  title: boolean;
  description: boolean;
  value: boolean;
};

const CreateReward = () => {
  const [reward, setReward] = useState<RewardType>({
    title: '',
    description: '',
    value: 0,
    image: '',
  });

  const [errors, setErrors] = useState<CreateRewardErrorsType>({
    title: false,
    description: false,
    value: false,
  });
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
    setReward((prevReward) => ({
      ...prevReward,
      [key]: value,
    }));
  };

  const createRewardHandler = () => {
    let tempErrors = {
      title: false,
      description: false,
      value: false,
    };
    if (reward.title.trim().length === 0) {
      tempErrors = { ...tempErrors, title: true };
    }

    if (reward.description.trim().length === 0) {
      tempErrors = { ...tempErrors, description: true };
    }

    if (reward.value <= 0) {
      tempErrors = { ...tempErrors, value: true };
    }

    if (Object.values(tempErrors).some((error) => error)) {
      setErrors(tempErrors);
      return;
    }
    setReward({
      title: '',
      description: '',
      value: 0,
      image: '',
    });

    setErrors({
      title: false,
      description: false,
      value: false,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a reward</Text>

      <View style={styles.inputContainer}>
        <Input
          label="Title"
          value={reward.title}
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
          value={reward.description}
          onChangeText={(value: string) =>
            handleInputChange('description', value)
          }
          error={errors.description}
          errorMessage="Description cannot be empty"
          labelStyle={{ fontSize: 20, textAlign: 'center' }}
          placeholder="Enter a description"
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          label="Points cost"
          value={reward.value.toString()}
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
      <TouchableOpacity
        style={styles.submitButton}
        onPress={createRewardHandler}
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
  inputContainer: { marginHorizontal: 25 },
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
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: 'green',
  },
  submitText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreateReward;
