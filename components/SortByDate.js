import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SortByDate({album}) {
  album.sort(function (x, y) {
    let a = new Date(x['im:releaseDate'].attributes.label),
      b = new Date(y['im:releaseDate'].attributes.label);
    return a - b;
  });

  return (
    <View>
    </View>
  );
}

const styles = StyleSheet.create({});
