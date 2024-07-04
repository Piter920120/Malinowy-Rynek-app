import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
    Linking,
  } from "react-native";
  import React, { useContext } from "react";
  import { CartItems } from "../Context";
  import { Entypo } from "@expo/vector-icons";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";

  const CartScreen = () => {
    const navigation = useNavigation();
    const { cart, setCart } = useContext(CartItems);
    const total = cart
      .map((item) => Number(item.price * item.quantity))
      .reduce((prev, curr) => prev + curr, 0);
    const sides = [
      {
        id: "0",
        name: "Stripsy",
        image: require("../photos/stripsy.png"),
        price: 20,
        description: "Chrupiace stripsy z kurczaka w panierce",
        quantity: 1,
      },
      {
        id: "1",
        name: "Nuggetsy",
        image: require("../photos/nuggets.png"),
        price: 20,
        description: "Przepyszne nuggetsy z kurczaka",
        quantity: 1,
      },
      {
        id: "2",
        name: "Krążki cebulowe",
        image: require("../photos/onion.jpg"),
        price: 20,
        description: "Dla fanów wege, krążki w panierce ",
        quantity: 1,
      },
      {
        id: "3",
        name: "Frytki",
        image: require("../photos/frytki.png"),
        price: 10,
        description: "Grubo krojone frytki",
        quantity: 1,
      },
    ];
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
    const phoneNumber='+48723525494'
    const placeOrder = () => {
      navigation.navigate("Order")
      const message = `Twoje zamowienie! Wartość: $${total.toString()}. Podejdz do okienka i zapłać`;      const url = `sms:${phoneNumber}&body=${message}`;

      
      Linking.openURL(url)
      .then(() => {
        console.log("Aplikacja do obsługi SMS-a została otwarta.");
        setCart([]);
      })
      .catch((error) => {
        console.error("Błąd podczas otwierania aplikacji do obsługi SMS-a: ", error);
      });
    }

   
    return (
      <>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item, key) => (
              <Pressable
                style={{
                  backgroundColor: "#e46178",
                  padding: 10,
                  margin: 10,
                  borderRadius: 8,
                }}
                key={key}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 70, height: 70, borderRadius: 6 }}
                    source={item.image}
                  />
  
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                    >
                      {item.name}
                    </Text>
  
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 6,
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 17 }}>
                        {item.size}
                      </Text>
                      <Text style={{ color: "white", fontSize: 15 }}>
                        {" "}
                        | {item.description.substr(0, 25) + "..."}
                      </Text>
                    </View>
  
                    <Text style={{ color: "white", fontSize: 16 }}>
                      ${item.price * item.quantity}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
            <View>
              <Text style={{fontSize:18,fontWeight: "bold",padding:8}}> Dodaj do zamówienia</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {sides.map((item, index) => (
                  <Pressable
                    style={{
                      margin: 10,
                      backgroundColor: "#E8E8E8",
                      borderRadius: 4,
                      width: 160,
                      height: 130,
                    }}
                  >
                    <View
                      style={{
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60, borderRadius: 6 }}
                        source={item.image }
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ width: 70, fontSize: 15 }}>
                          {item.name}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                          ${item.price}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderColor: "#BEBEBE",
                        borderRadius: 1,
                        borderStyle: "dotted",
                        borderWidth: 0.5,
                        marginTop: 3,
                      }}
                    />
                    <Pressable onPress={() => addToCart(item)}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          color: "#e46178",
                          marginTop: 10,
                          fontWeight: "600",
                        }}
                      >
                        Dodaj
                      </Text>
                    </Pressable>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
  
        {total === 0 ? (
           <Pressable
           style={{
             marginBottom: "auto",
             marginTop: "auto",
             alignItems: "center",
             justifyContent: "center",
             height: "100%",
           }}
         >
           <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
             Koszyk jest pusty!
           </Text>
           <Image
             style={{
               width: 250,
               height: 600,
               resizeMode: "contain",
             }}
             source={{
               uri: "",
             }}
           />
         </Pressable>
        ) : (
          <View style={{ height: 200 }}>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Odbiór zamówień
              </Text>
              <Text
                style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
              >
                Sobieskiego 4, 14-200 Iława
              </Text>
            </View>
          </View>
  
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome5 name="amazon-pay" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>${total}</Text>
              <Text
                style={{ fontSize: 16, width: 200, marginTop: 3, color: "gray" }}
              >
                Zapłać przy kasie
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
        )}  
       
      </>
    );
  };
  
  export default CartScreen;
  
  const styles = StyleSheet.create({});