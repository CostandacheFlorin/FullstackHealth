import React from "react";
import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types/Navigation";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeScreenProps["navigation"];
}

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <Button
      title="Create a challenge"
      onPress={() => navigation.navigate("CreateChallenge")}
    />
  );
};

export default HomeScreen;
