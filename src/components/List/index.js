import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";
import ListItem from "./ListItem";

export default class List extends Component {
  renderListItem = ({ item }) => (
    <ListItem
      item={item}
      isRepository={this.props.repositories}
      isIssue={this.props.issues}
    />
  );
  render() {
    const items = this.props.items;
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}
