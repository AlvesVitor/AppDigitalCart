import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, TouchableOpacity } from "react-native";
import LOGO from "../../assets/img/logo.png";

import { styles } from "./styles";

export function CardCompany({ data }) {
  const { id, name } = data;
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("Cart", { id: id });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Image style={styles.logo} source={LOGO} resizeMode="contain" />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}
