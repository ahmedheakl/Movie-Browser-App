import React from "react";
import { Text, View, Button } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          marginBottom: 30,
          fontSize: 20,
          backgroundColor: "red",
          alignItems: "center",
          padding: 10,
          borderRadius: 7,
          color: "white",
        }}
      >
        There are no Settings Implemented!
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
