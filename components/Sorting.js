import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function Sorting({album, selectedValue, setSelectedValue,artistSort}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Sorting</Text>
      </View>
      <View style={styles.sortingItem}>
        <View>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Low to High" value="low" />
            <Picker.Item label="High to Low " value="high" />
          </Picker>
        </View>
        <View style={styles.artist}>
          <View style={styles.button}>
            <Button onPress={artistSort} title="Artist" />
          </View>
        </View>
        <View>
          <View style={styles.button}>
            <Button title="Date" />
          </View>

          {/* <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Date" value="low" />
            <Picker.Item label="High to Low " value="high" />
          </Picker> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#d9deff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
  },
  picker: {
    height: 50,
    width: 150,
    color: '#000',
  },
  button: {
    height: 50,
    color: '#000',
    marginEnd:10,
    padding:5
  },
});
