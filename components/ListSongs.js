import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListSongs = ({ song, navigation }) => {
  const { title, text, route } = song;
  return (
    <TouchableOpacity style={styles.listSongs} onPress={() => navigation.navigate(route, {
      title,
      text
    })}>
      <View style={styles.listSongsView}>
        <Text style={styles.listSongsTitle}>{song.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

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
    fontSize: 16,
    color: 'darkslateblue',
  }
})

export default ListSongs;
