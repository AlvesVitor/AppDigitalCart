import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";

export function IconComponent({ name, color, size, style }) {
  return <Icon name={name} color={color} size={size} style={style} />;
}
