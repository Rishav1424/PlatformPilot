import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

function App() {
  return <Text style={styles.title}>First React Native App</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 30,
  },
});

export default App;
