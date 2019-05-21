import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Header = ({ title, repositories, issues, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {issues && (
          <TouchableOpacity onPress={() => navigation.navigate("Repositories")}>
            <Icon style={styles.leftAction} name="chevron-left" />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={styles.rightContainer} />
    </View>
  );
};

export default withNavigation(Header);
