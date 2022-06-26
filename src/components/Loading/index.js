import React from "react";
import { theme } from "../../global/styles/theme";
import { ActivityIndicator } from "react-native";

export function Loading() {
  const { blue } = theme.colors;

  return <ActivityIndicator size={30} color={blue} />;
}
