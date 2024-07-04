import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import zeroImg from "../photos/zero.jpg";
import burgerImg from "../photos/burgerBlack.png";
import fishImg from "../photos/fishBlack.png";
import iceCreamImg from "../photos/iceBlack.png";
import drinksImg from "../photos/drinksBlack.png";
import beersImg from "../photos/beerBlack.png";
import desertsImg from "../photos/desetrsBlack.png";



const MenuComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", flexDirection:"row", alignItems:"center" }}>Menu</Text>
      <Pressable
        style={{
          backgroundColor: "#e46178",
          display:"flex",
          flexWrap:"wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:30,
          marginTop:14,
          borderRadius:10,
        }}
      >
        
        <Pressable onPress={() => navigation.navigate("Pizza")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={fishImg}
          />
          <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10,marginBottom:10,}}>Rybki</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Burgers")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={burgerImg}
          />
         <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10, marginBottom:10}}>Burgery</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Beer")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={beersImg}
          />
         <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10, marginBottom:10}}>Piwko</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Deserts")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={desertsImg}
          />
         <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10}}>Desery</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Ice")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={iceCreamImg}
          />
         <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10}}>Lody</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Drinks")}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 40 }}
            source={drinksImg}
          />
         <Text style={{textAlign:"center", fontSize:17,color:"white", marginTop:10}}>Drinki</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});
