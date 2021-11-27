import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchOption({ enteredValue, setEnteredValue }) {
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        blurOnSubmit
        autoCorrect={false}
        keyboardType="default"
        onChangeText={setEnteredValue}
        value={enteredValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 0,
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 25,
    fontSize: 20,
  },
});
