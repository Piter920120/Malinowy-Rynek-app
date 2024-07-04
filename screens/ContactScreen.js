import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Feather, Fontisto } from "@expo/vector-icons";

const ContactScreen = () => {
  const phoneNumber = "+48723525494";
  const emailAddress = "Malinowy.rynek@gmail.com";

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  return (
    <View style={{ height: 150 }}>
      <TouchableOpacity onPress={handleCall}>
        <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
          <Feather name="phone" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{phoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEmail}>
        <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
          <Fontisto name="email" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Napisz do Nas!</Text>
            <Text style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}>
              {emailAddress}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});

