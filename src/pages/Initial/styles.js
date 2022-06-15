import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const { grey, blue } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sessionImg: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  sessionInput: {
    width: 180,
    height: 40,
    borderWidth: 0.3,
    borderRadius: 7,
    marginVertical: 30,
    alignItems: "center",
    borderColor: grey,
  },
  input: {
    width: "100%",
    fontSize: 15,
    color: grey,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    color: grey,
  },
  button: {
    width: 150,
    backgroundColor: blue,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
