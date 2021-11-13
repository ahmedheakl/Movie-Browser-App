import React from "react";
import { FlatList, Text, View } from "react-native";
import PropTypes from "prop-types";

import Row from "./Row";

const ListOfMovies = (props) => (
  <View>
    <FlatList
      renderItem={({ item }) => <Row {...item} navigation={props.navigation} />}
      data={props.movies}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

ListOfMovies.propTypes = {
  movies: PropTypes.array,
};
export default ListOfMovies;
