import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const OrderData = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#e46178", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          borderRadius: 6,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Twoje zamówienie zostało przyjęte!
        </Text>

        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Poczekaj, aż zostaniesz wywołany
        </Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
      <MapView
      style={{ height: 200, width: 250 }}
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

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          margin: 10,
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: "#fff0f5",
            borderWidth: 1,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
            Jestes blisko Malinowego?
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
            Czy ktoś może odebrać Twoje zamówienie?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderData;

const styles = StyleSheet.create({});
