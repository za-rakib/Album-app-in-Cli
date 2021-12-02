import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DescendingSorting({album}) {
  let ascendingSort = album.sort(function (x, y) {
    return x['im:price'].attributes.amount - y['im:price'].attributes.amount;
  });

  const descendingSort = ascendingSort.reverse();
  return <View></View>;
}

const styles = StyleSheet.create({});
