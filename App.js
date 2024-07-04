import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { BasketContext } from "./Context";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar style="auto" />
      <BasketContext>
        <StackNavigator />
      </BasketContext>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop:15,
    flexGrow: 1,
    backgroundColor: "white",
  },
});
