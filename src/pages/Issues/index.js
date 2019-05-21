import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import api from "~/services/api";
import styles from "./styles";
import Header from "~/components/Header";
import List from "~/components/List";

export default class Issues extends Component {
  state = {
    activeFilter: "all",
    loading: true,
    issues: [],
    error: ""
  };
  componentDidMount = async () => {
    const { activeFilter } = this.state;
    this.getIssues(activeFilter);
  };
  handleFilterChange = status => {
    this.setState({ activeFilter: status });
    this.getIssues(status);
  };
  getIssues = async status => {
    const id = this.props.navigation.getParam("id");
    try {
      const { data } = await api.get(
        `repositories/${id}/issues?state=${status}`
      );
      this.setState({
        issues: data,
        loading: false
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: "Issues não encontradas"
      });
    }
  };
  render() {
    const repositoryName = this.props.navigation.getParam("name");
    const { issues, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <Header issues title={repositoryName} />
        <View style={styles.filters}>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => this.handleFilterChange("all")}
          >
            <Text
              style={
                this.state.activeFilter === "all"
                  ? styles.activeFilter
                  : styles.inactiveFilter
              }
            >
              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => this.handleFilterChange("open")}
          >
            <Text
              style={
                this.state.activeFilter === "open"
                  ? styles.activeFilter
                  : styles.inactiveFilter
              }
            >
              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => this.handleFilterChange("closed")}
          >
            <Text
              style={
                this.state.activeFilter === "closed"
                  ? styles.activeFilter
                  : styles.inactiveFilter
              }
            >
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator style={styles.loading} />}
        {error !== "" && <Text style={styles.error}>{error}</Text>}
        {issues.length > 0 && <List issues items={issues} />}
        {issues.length === 0 && !loading && error === "" && (
          <Text style={styles.empty}>Sem issues</Text>
        )}
      </View>
    );
  }
}
