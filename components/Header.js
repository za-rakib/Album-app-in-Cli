import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constant/Colors";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
    backgroundColor:Colors.primary,
    padding:10
  },
  text:{
      color: 'white',
      fontWeight:'bold',
      fontSize:24
  }
});
