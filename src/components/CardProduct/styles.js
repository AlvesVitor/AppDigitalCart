import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e5e5e5',
    // backgroundColor: "#e5e5e5",
    paddingHorizontal: 10,
    marginVertical: 7,
    borderRadius: 10,
  },
  sessionImg: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  AreaDescription: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12
  },
  amountText: {
    fontSize: 12,
    paddingHorizontal: 10
  },
  subTitle: {
    fontSize: 12
  },
  totalText:{
    fontSize: 12,
    paddingVertical: 7,
  },
  sessionAmount: {
    paddingVertical: 7,
    flexDirection: 'row',
  },
  sessionTotal: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
