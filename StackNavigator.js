import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PizzaScreen from "./screens/PizzaScreen";
import Pizza from "./screens/Pizza";
import CartScreens from "./screens/CartScreens";
import OrderData from "./screens/OrderData";
import BeerScreen from "./screens/BeerScreen";
import Ice from './screens/Ice'
import Deserts from "./screens/Deserts";
import Drinks from "./screens/Drinks";
import Burger from "./screens/Burger";
import ContactScreen from "./screens/ContactScreen";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Pizza" component={PizzaScreen}options={{headerShown:false}}/>
                <Stack.Screen name="PizzaMania" component={Pizza} options={{headerShown:false}}/>
                <Stack.Screen name="Beer" component={BeerScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Ice" component={Ice} options={{headerShown:false}}/>
                <Stack.Screen name="Deserts" component={Deserts} options={{headerShown:false}}/>
                <Stack.Screen name="Drinks" component={Drinks} options={{headerShown:false}}/>
                <Stack.Screen name="Burgers" component={Burger} options={{headerShown:false}}/>
                <Stack.Screen name="Cart" component={CartScreens} />
                <Stack.Screen name="Order" component={OrderData} options={{headerShown:false}}/>
                <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
