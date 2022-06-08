import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";

export function Initial() {
  const [cep, setCep] = useState("");
  const navigation = useNavigation();

  function handleOnPress() {
    if (!cep.trim()) {
      return Alert.alert("Atenção", "Insira um CEP valido!");
    }
    navigation.navigate("Company", { cep: cep });
  }

  return (
    <View style={styles.container}>
      <Text>Insira o seu CEP</Text>
      <View style={{ width: 200, borderBottomWidth: 0.3, marginVertical: 30 }}>
        <TextInput
          keyboardType="numeric"
          value={cep.replace(/[^0-9]/g, '')}
          onChangeText={(e) => setCep(e)}
          maxLength={8}
        />
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
        onPress={handleOnPress}
      >
        <Text style={{ color: "#fff" }}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
