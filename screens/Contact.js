import { StyleSheet, Text,View } from "react-native";
import React from "react";




const Contact = () => {
    return (
        <View style={{ height: 200 }}>
        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Delivering To Home
            </Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              25/2 Rna Shopping arcade Lucknow complex
            </Text>
          </View>
        </View>

        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="amazon-pay" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>₹{total}</Text>
            <Text
              style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
            >
              Pay Via Cash
            </Text>
          </View>
        </View>
        <Pressable
        onPress={placeOrder}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Zamów
          </Text>
        </Pressable>
      </View>
    )
}


export default Contact

const styles = StyleSheet.create({});