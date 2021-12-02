import React, {useEffect, useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import SearchOption from '../components/SearchOption';
import Album from '../components/Album';
import Sorting from '../components/Sorting';
import AscendingSort from '../components/AscendingSort';
import DescendingSorting from '../components/DescendingSorting';
import SortByArtist from '../components/SortByArtist';
import SortByDate from '../components/SortByDate';

export default function Home({navigation}) {
  const [enteredValue, setEnteredValue] = useState('');
  const [album, setAlbum] = useState([]);
  const [selectedValue, setSelectedValue] = useState('low');

  // data fetch
  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(res => res.json())
      .then(result => setAlbum(result.feed.entry));
  }, []);

  let sortByPrice;
  selectedValue === 'low'
    ? (sortByPrice = <AscendingSort album={album} />)
    : (sortByPrice = <DescendingSorting album={album} />);

  const artistSort = e => {
    console.log(e);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Albums" />
      <SearchOption
        enteredValue={enteredValue}
        setEnteredValue={setEnteredValue}
      />
      <Sorting
        album={album}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        artistSort={artistSort}
      />
      <SortByArtist album={album} />
      <SortByDate album={album} />
      {sortByPrice}
      <ScrollView>
        <Album
          enteredValue={enteredValue}
          navigation={navigation}
          album={album}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
