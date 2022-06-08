import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Initial() {
  return (
    <View style={styles.container}>
      <Text>Insira o seu CEP</Text>
      <View style={{ width: 200, borderBottomWidth: 0.3, marginVertical: 30 }}>
        <TextInput />
      </View>
      <TouchableOpacity
        style={{
          width: 200,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e5bc6",
          borderRadius: 20,
        }}
      >
        <Text style={{color: "#fff"}}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
