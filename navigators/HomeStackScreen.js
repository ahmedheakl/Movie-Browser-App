import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import MovieScreen from "../screens/MovieScreen";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  const options = {
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <HomeStack.Navigator initialRouteName="Search">
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={options}
      />
      <HomeStack.Screen
        name="Movie"
        component={MovieScreen}
        options={options}
      />
    </HomeStack.Navigator>
  );
}
