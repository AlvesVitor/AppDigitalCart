import React from "react";
import { View, TouchableOpacity } from "react-native";
import { IconComponent as Icon } from "../Icon";
import { styles } from "./styles";

export function FabButton({ style, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="qrcode-scan" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
