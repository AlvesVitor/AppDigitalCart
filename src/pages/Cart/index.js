import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";

export function Cart({ route }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  );
}
