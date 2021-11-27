import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View,TouchableOpacity } from "react-native";

export default function Album({ navigation, enteredValue, album }) {
  // console.log("Album Data", album);
  return (
    <View style={styles.container}>
      <Text>
        {album
          .filter((data) => {
            // console.log("data",data.rights.label)
            if (enteredValue === "") {
              return data;
            } else if (
              data["im:name"].label
                .toLowerCase()
                .includes(enteredValue.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              style={styles.singleContainer}
              onPress={() =>
                navigation.navigate("AlbumDetails", {
                  image:data["im:image"][2].label,
                  name:data["im:name"].label,
                  artist:data["im:artist"].label,
                  price:data["im:price"].label,
                  release:data["im:releaseDate"].label,
                  rights:data.rights.label,
                })
              }
            >
              <View>
                <Image
                  style={styles.image}
                  source={{
                    uri: data["im:image"][2].label,
                  }}
                />
              </View>
              <Text>{data["im:name"].label}</Text>
            </TouchableOpacity>
          ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  singleContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
