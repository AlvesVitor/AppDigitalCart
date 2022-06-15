import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import LOGO from "../../assets/img/logo.png";

import { styles } from "./styles";

export function Initial() {
  const [cep, setCep] = useState("");
  const navigation = useNavigation();

  function handleOnPress() {
    if (cep.length < 8) {
      Alert.alert("Atenção!", "Insira um CEP válido");
      return;
    }
    navigation.navigate("Company", { cep: cep });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.sessionImg}>
          <Image style={styles.logo} source={LOGO} resizeMode="contain" />
          <Text style={styles.title}>Insira o seu CEP</Text>
        </View>

        <View style={styles.sessionInput}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={cep.replace(/[^0-9]/g, "")}
            onChangeText={(e) => setCep(e)}
            maxLength={8}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
