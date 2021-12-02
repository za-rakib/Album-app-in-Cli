import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AscendingSort({album}) {
  album.sort(function (x, y) {
    return x['im:price'].attributes.amount - y['im:price'].attributes.amount;
  });

  return <View>
    
  </View>;
}

const styles = StyleSheet.create({});
