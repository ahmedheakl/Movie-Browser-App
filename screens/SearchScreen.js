import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
// import { fetchMovies } from "../api";
import ListOfMovies from "../components/ListOfMovies";

export default function SearchScreen({ navigation }) {
  const [wrote, setWrote] = useState(false);
  const [movie, setMovie] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleMovie = (text) => {
    if (text !== "") {
      setWrote(true);
    } else {
      setWrote(false);
    }
    setMovie(text);
  };

  const fetchMovies = async (title) => {
    const URL = `https://www.omdbapi.com/?apikey=807a81e0&s=${title}&r=json`;
    const response = await fetch(URL);
    const Search = await response.json();
    setSearchResults(Search["Search"]);
  };

  const handleSubmit = () => {
    setSearchResults(null);
    fetchMovies(movie);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Search Movies by Title:</Text>
      <TextInput
        placeholder="Enter a Movie Title"
        autoFocus={true}
        style={styles.textinput}
        onChangeText={(text) => {
          handleMovie(text);
        }}
      />
      <Button
        title="Search"
        disabled={!wrote}
        style={{ marginTop: 20 }}
        onPress={handleSubmit}
      />
      {searchResults == null ? (
        <View></View>
      ) : (
        <ListOfMovies navigation={navigation} movies={searchResults} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textinput: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});
