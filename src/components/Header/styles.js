import { StyleSheet } from "react-native";
import { colors } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: getStatusBarHeight() + 54,
    paddingTop: getStatusBarHeight(),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    marginLeft: 15
  },
  leftAction: {
    fontSize: 18
  },
  title: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: -45
  }
});

export default styles;
