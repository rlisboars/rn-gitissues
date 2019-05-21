import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    height: 30
  },
  filter: {
    alignItems: "center"
  },
  activeFilter: {
    fontWeight: "bold",
    color: colors.dark
  },
  inactiveFilter: {
    color: colors.regular
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
