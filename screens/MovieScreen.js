import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const SeparatorThick = () => <View style={styles.separatorThick} />;
const SeparatorThin = () => <View style={styles.separatorThin} />;

const Genres = (props) => {
  const [genresList, setGenresList] = useState(
    props.genres.replace(/\s/g, "").split(",")
  );
  if (genresList) {
    return (
      <View style={styles.row}>
        {genresList.map((genre) => (
          <View style={styles.genre}>
            <Text style={styles.Label}>{genre}</Text>
          </View>
        ))}
      </View>
    );
  }
};

export default function MovieScreen({ navigation, route }) {
  const [searchResults, setSearchResults] = useState(null);
  const [genres, setGenres] = useState(null);
  const props = route.params.props;

  const getMovie = async (imdbID) => {
    const URL = `https://www.omdbapi.com/?apikey=807a81e0&i=${imdbID}&r=json`;
    const response = await fetch(URL);
    const Search = await response.json();
    setSearchResults(Search);
    setGenres(Search.Genre);
  };
  const changeTitle = () => {
    navigation.setOptions({
      title: route.params.props.Title,
    });
  };
  useEffect(() => {
    changeTitle();
    getMovie(route.params.props.imdbID);
  }, []);

  if (searchResults == null || genres == null) return <View></View>;
  return (
    <ScrollView style={{ flex: 1, paddingTop: 5, paddingBottom: 20 }}>
      <Image source={{ uri: searchResults.Poster }} style={styles.image} />
      <Genres genres={genres} />
      <View style={{ padding: 5, backgroundColor: "#D3D3D3" }}>
        <Text style={{ fontSize: 17, textAlign: "justify" }}>
          {searchResults.Plot}
        </Text>
        <SeparatorThin />
        <Text style={{ fontSize: 15, textAlign: "justify" }}>
          Year of Release: {searchResults.Year}
        </Text>
        <SeparatorThin />
        <Text style={{ fontSize: 15, textAlign: "justify" }}>
          Production: {searchResults.Production}
        </Text>
        <SeparatorThin />
        <Text style={{ fontSize: 15, textAlign: "justify" }}>
          Director: {searchResults.Director}
        </Text>
      </View>
      <SeparatorThick />

      <Button
        title="Back to Search"
        color="green"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  separatorThick: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: 4,
    marginVertical: 10,
  },
  separatorThin: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  genre: {
    color: "black",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "black",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginVertical: 6,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 300,
    marginRight: 10,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Label: {
    fontSize: 14,
    fontWeight: "500",
    color: "coral",
  },
});
