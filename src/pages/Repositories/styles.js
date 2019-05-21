import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingLeft: 12,
    marginRight: 12,
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: colors.light,
    height: 40
  },
  add: {
    fontSize: 18
  },
  empty: {
    color: colors.regular,
    textAlign: "center",
    marginTop: 20
  },
  loading: {
    paddingTop: 20
  },
  error: {
    color: colors.regular,
    fontSize: 12,
    paddingTop: 20,
    textAlign: "center"
  }
});

export default styles;
