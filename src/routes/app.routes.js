import React from "react";
import { Initial } from "../pages/Initial";
import { Company } from "../pages/Company";
import { Cart } from "../pages/Cart";
import { Scanner } from "../pages/Scanner";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Initial"
          component={Initial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Company"
          component={Company}
          options={{
            headerShown: true,
            headerTitle: "Lojas",
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTitle: "Carrinho",
          }}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{
            headerShown: true,
            headerTitle: "Leitor",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
