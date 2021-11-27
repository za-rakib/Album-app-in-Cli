import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AlbumDetails({ route }) {
  const { image, name, artist, price, release, rights } = route.params;
  // console.log(image, name, artist, price, release, rights);
  return (
    <View style={styles.albumDetails}>
      <AlbumImage image={image} />
      <AlbumName name={name} />
      <AlbumDescription
        artist={artist}
        price={price}
        release={release}
        rights={rights}
      />
    </View>
  );
}

const AlbumImage = ({ image }) => (
  <Image source={{ uri: image }} style={styles.image} />
);
const AlbumName = ({ name }) => (
  <Text style={styles.name}>Album Name : {name}</Text>
);
const AlbumDescription = ({ artist, price, release, rights }) => (
  <View>
    <Text style={styles.artist}>Artist Name : {artist}</Text>
    <Text style={styles.price}>Price: {price}</Text>
    <Text style={styles.release}>Release : {release}</Text>
    <Text style={styles.rights}>{rights}</Text>
  </View>
);
const styles = StyleSheet.create({
  albumDetails: {
    marginTop: 50,
    backgroundColor: "#272c4a",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius:50,
  },
  name: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#eee",
    padding: 5,
  },
  artist: {
    color: "#eee",
    padding: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  price: {
    color: "#eee",
    padding: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  release: {
    color: "#eee",
    padding: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  rights: {
    color: "#eee",
    padding: 5,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});
