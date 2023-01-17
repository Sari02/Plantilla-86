import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.replace("Login");
    //!!se cambio a mayusculas, debe estar igual escrito que en App.js
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Cerrar sesión</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
