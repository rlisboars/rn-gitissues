import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 8,
    borderRadius: metrics.baseRadius,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  infoContainer: {
    flexDirection: "column",
    marginLeft: 8,
    flexGrow: 1
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.dark,
    maxWidth: 250
  },
  login: {
    fontSize: 12,
    color: colors.regular,
    marginTop: 3
  },
  action: {
    color: colors.light,
    fontSize: 14
  }
});

export default styles;
