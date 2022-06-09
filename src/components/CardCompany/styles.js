import { StyleSheet } from "react-native";

import { theme } from ".././../global/styles/theme";

const { grey } = theme.colors;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        alignItems: "center",
        borderBottomWidth: 5,
        borderBottomColor: "#f5f5f5",
        paddingHorizontal: 10
    },
    logo: {
        width: 60,
        height: 60
    },
    title: {
        fontSize: 18,
        marginLeft: 10,
        color: grey
    }
});
