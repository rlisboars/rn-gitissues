import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const ListItem = ({ item, navigation, isRepository, isIssue }) => {
  handlePress = item => {
    const { id, name, html_url } = item;
    if (isRepository) navigation.navigate("Issues", { id, name });
    if (isIssue) Linking.openURL(html_url);
  };
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(item)}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri: isRepository ? item.owner.avatar_url : item.user.avatar_url
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {isRepository ? item.name : item.title}
          </Text>
          <Text style={styles.login}>
            {isRepository ? item.owner.login : item.user.login}
          </Text>
        </View>
        <Icon style={styles.action} name="chevron-right" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withNavigation(ListItem);
