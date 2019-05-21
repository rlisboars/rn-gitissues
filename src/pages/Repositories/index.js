import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

import api from "~/services/api";
import styles from "./styles";
import Header from "~/components/Header";
import List from "~/components/List";

export default class Repositories extends Component {
  state = {
    repositories: [],
    inputText: "",
    loading: false,
    error: ""
  };

  STORAGE_KEY = "@GitIssues:repos";

  componentDidMount = async () => {
    const savedRepositories = await AsyncStorage.getItem(this.STORAGE_KEY);
    this.setState({
      repositories: savedRepositories ? JSON.parse(savedRepositories) : []
    });
  };

  addRepository = async () => {
    this.setState({ loading: true, error: "" });
    const repository = this.state.inputText;
    try {
      const { data } = await api.get(`/repos/${repository}`);
      this.setState(
        {
          repositories: [
            data,
            ...this.state.repositories.filter(rep => rep.id !== data.id)
          ],
          inputText: ""
        },
        _ => {
          AsyncStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(this.state.repositories)
          );
        }
      );
    } catch (err) {
      if (err.response) this.setState({ error: "Repositório não encontrado" });
    }
    this.setState({ loading: false });
  };

  render() {
    const { repositories, inputText, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="organização/repositório"
            autoCorrect={false}
            autoCapitalize="none"
            value={inputText}
            onChangeText={text => this.setState({ inputText: text })}
            onSubmitEditing={this.addRepository}
          />
          <TouchableOpacity>
            <Icon style={styles.add} name="plus" onPress={this.addRepository} />
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator style={styles.loading} />}
        {error !== "" && <Text style={styles.error}>{error}</Text>}
        {repositories && repositories.length > 0 && (
          <List repositories items={repositories} />
        )}
        {repositories &&
          repositories.length === 0 &&
          !loading &&
          error === "" && (
            <Text style={styles.empty}>Adicione novos repositórios</Text>
          )}
      </View>
    );
  }
}
