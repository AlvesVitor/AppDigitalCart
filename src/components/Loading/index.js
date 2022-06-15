import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";

export function Loading() {
  const { blue } = theme.colors;

  return <ActivityIndicator size={30} color={blue} />;
}
