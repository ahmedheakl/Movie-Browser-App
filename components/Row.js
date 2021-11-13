import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  row: { padding: 10, flexDirection: "row" },
});

const handlePress = (props) => {
  props.navigation.navigate("Movie", {
    props,
  });
};

const Row = (props) => (
  <TouchableOpacity style={styles.row} onPress={() => handlePress(props)}>
    <Image
      source={{ uri: props.Poster }}
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
    <Text style={{ marginTop: 15 }}>
      {props.Title} [{props.Year}]
    </Text>
  </TouchableOpacity>
);

Row.propTypes = {
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
};

export default Row;
