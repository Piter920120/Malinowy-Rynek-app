import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import MenuComponent from "../components/MenuComponent";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../Context";
import Malinowy from "../photos/malinowy.jpg";
import MapView, { Marker } from "react-native-maps";
import ContactScreen from "./ContactScreen";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 10 }}>
          <Image style={{ width: "auto", height: 270 }} source={Malinowy} />
        </View>

        <MenuComponent />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          Nasza Lokalizacja
        </Text>
        <View
          style={{ marginLeft: "25%", flexDirection: "row", alignItems: "center", marginBottom:10 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#e46178" }}>
            Witamy w Iławie!
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <MapView
            style={{ height: 200, width: "95%", marginBottom: 10 }}
            initialRegion={{
              latitude: 53.59448758516665,
              longitude: 19.564655283173852,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: 53.59448758516665,
                longitude: 19.564655283173852,
              }}
            />
          </MapView>
      
        </View>
        <ContactScreen/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
