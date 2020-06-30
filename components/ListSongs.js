import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListSongs = ({ song, navigation }) => (
  <TouchableOpacity style={styles.listSongs} onPress={() => navigation.navigate(song.title, {
    title: song.title,
    text: song.text
  })}>
    <View style={styles.listSongsView}>
      <Text style={styles.listSongsTitle}>{song.title}</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  listSongs: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listSongsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listSongsTitle: {
    fontSize: 16
  }
})

export default ListSongs;
