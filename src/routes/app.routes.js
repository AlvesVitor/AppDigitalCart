import React from "react";
import { Initial } from "../pages/Initial";
import { Company } from "../pages/Company";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Initial" component={Initial}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Company" component={Company}
                    options={{
                        headerShown: true,
                        headerTitle: "Company",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}