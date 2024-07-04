
import ice from "../data/ice"
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Pressable,
  } from "react-native";
  import React, { useContext } from "react";
  import pizza from "../data/pizza";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import PizzaComponent from "../components/PizzaComponent";
  import { CartItems } from "../Context";



const Ice = () =>{
    const data = ice;
    const navigation = useNavigation();
    const { cart, setCart } = useContext(CartItems);
    const total = cart
      .map((item) => Number(item.price * item.quantity))
      .reduce((prev, curr) => prev + curr, 0);
    console.log(cart, "cart items added");
    console.log(total, "total price");
    return (
      <SafeAreaView>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size={24}
          color="black"
          
        />
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <PizzaComponent pizza={item} />}
        />
        {total === 0 ? null : (
          <Pressable
          onPress={() => navigation.navigate("Cart")}
            style={{
              backgroundColor: "green",
              padding: 10,
              position: "absolute",
              bottom: 100,
              left: 100,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                
              }}
            >
              Przejdz do zamówienia
            </Text>
          </Pressable>
        )}
      </SafeAreaView>
    );
  };



export default Ice

const styles = StyleSheet.create({})