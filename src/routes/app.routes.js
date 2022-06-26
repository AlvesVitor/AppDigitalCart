import React, { useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { IconComponent as Icon } from "../components/Icon";
import { TouchableOpacity } from "react-native";
import { Scanner } from "../pages/Scanner";
import { Initial } from "../pages/Initial";
import { Company } from "../pages/Company";
import { Context } from "../context";
import { Cart } from "../pages/Cart";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const { sound, setSound } = useContext(Context);
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
            headerRight: () => (
              <TouchableOpacity onPress={() => setSound(!sound)}>
                <Icon
                  name={sound ? "volume-high" : "volume-off"}
                  color="#000"
                  size={22}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
