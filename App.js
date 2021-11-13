import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomTabNavi from "./navigators/BottomTabNavi";
import { LogBox } from "react-native";

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return <BottomTabNavi />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
