import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";
import HomeScreen from "./HomeScreen";
import AlocasiaDetailScreen from "./AlocasiaDetailScreen";
import AgaveDetailScreen from "./AgaveDetailScreen";
import MintDetailScreen from "./MintDetailScreen";
import AppleDetailScreen from "./AppleDetailScreen";
import BegoniaDetailScreen from "./BegoniaDetailScreen";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import OnboardScreen from "./OnboardScreen";
import Categories from "./Categories";
import Browse from "./Browse";
import TipsScreen from "./TipsScreen";
import IndoorScreen from "./IndoorScreen";
import OutdoorScreen from "./OutdoorScreen";
import HerbsScreen from "./HerbsScreen";
import FruitScreen from "./FruitScreen";
import FloweringScreen from "./FloweringScreen";
import Tips1Screen from "./Tips1Screen";
import Tips2Screen from "./Tips2Screen";
import Tips3Screen from "./Tips3Screen";
import AlocasiaDescription from "./AlocasiaDescription";
import AgaveDescription from "./AgaveDescription";
import MintDescription from "./MintDescription";
import AppleDescription from "./AppleDescription";
import BegoniaDescription from "./BegoniaDescription";
import CartScreen from "./CartScreen";
import AboutScreen from "./AboutScreen";
import CheckoutScreen from "./CheckoutScreen";
import ProfileScreen from "./ProfileScreen";

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#eff4f0",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Store"
        component={Categories}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/store.png")}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trivia"
        component={TipsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/trivia.png")}
              style={{ height: 50, width: 50 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/about.png")}
              style={{ height: 30, width: 30, marginTop: -5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="OnboardScreen" component={OnboardScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="Navigator" component={BottomTabNavigator} />
    <RootStack.Screen
      name="AlocasiaDetailScreen"
      component={AlocasiaDetailScreen}
    />
    <RootStack.Screen name="AgaveDetailScreen" component={AgaveDetailScreen} />
    <RootStack.Screen name="MintDetailScreen" component={MintDetailScreen} />
    <RootStack.Screen name="AppleDetailScreen" component={AppleDetailScreen} />
    <RootStack.Screen
      name="BegoniaDetailScreen"
      component={BegoniaDetailScreen}
    />
    <RootStack.Screen name="Browse" component={Browse} />
    <RootStack.Screen name="IndoorScreen" component={IndoorScreen} />
    <RootStack.Screen name="OutdoorScreen" component={OutdoorScreen} />
    <RootStack.Screen name="HerbsScreen" component={HerbsScreen} />
    <RootStack.Screen name="FruitScreen" component={FruitScreen} />
    <RootStack.Screen name="FloweringScreen" component={FloweringScreen} />
    <RootStack.Screen name="Tips1Screen" component={Tips1Screen} />
    <RootStack.Screen name="Tips2Screen" component={Tips2Screen} />
    <RootStack.Screen name="Tips3Screen" component={Tips3Screen} />
    <RootStack.Screen
      name="AlocasiaDescription"
      component={AlocasiaDescription}
    />

    <RootStack.Screen name="AgaveDescription" component={AgaveDescription} />
    <RootStack.Screen name="MintDescription" component={MintDescription} />
    <RootStack.Screen name="AppleDescription" component={AppleDescription} />
    <RootStack.Screen
      name="BegoniaDescription"
      component={BegoniaDescription}
    />
    <RootStack.Screen name="CartScreen" component={CartScreen} />
    <RootStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
