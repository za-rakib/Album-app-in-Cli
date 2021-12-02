import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SortByArtist({album}) {
  album.sort(function (x, y) {
    let a = x['im:name'].label.toUpperCase(),
      b = y['im:name'].label.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  return (
    <View>
    </View>
  );
}

const styles = StyleSheet.create({});
