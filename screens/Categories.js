import React, { Component } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import imgindoor from "../assets/inplant.png";
import imgoutdoor from "../assets/outplant.png";
import imgherb from "../assets/herbs.png";
import imgfruit from "../assets/fruit.png";
import imgflower from "../assets/flower.png";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        animation="fadeIn"
        style={{ backgroundColor: "#16a085", paddingTop: 50, height: "100%" }}
      >
        <View
          style={{
            backgroundColor: "#16a085",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",

              marginBottom: 30,
              marginLeft: 10,
              color: "#fff",
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <View>
                <FontAwesome
                  name="chevron-left"
                  size={28}
                  style={{
                    paddingRight: 20,
                    color: "#fff",
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            Welcome to Shop
          </Text>
        </View>
        <View animation="fadeIn" style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate("IndoorScreen")}
          >
            <View style={styles.categoryIcon}>
              <Image style={styles.tinyLogo} source={imgindoor} />
              <Text style={styles.categoryBtnTxt}>Indoor Plants</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate("OutdoorScreen")}
          >
            <View style={styles.categoryIcon}>
              <Image style={styles.tinyLogo} source={imgoutdoor} />
              <Text style={styles.categoryBtnTxt}>Outdoor Plants</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate("HerbsScreen")}
          >
            <View style={styles.categoryIcon}>
              <Image style={styles.tinyLogo} source={imgherb} />
              <Text style={styles.categoryBtnTxt}>Herbs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate("FruitScreen")}
          >
            <View style={styles.categoryIcon}>
              <Image style={styles.tinyLogo} source={imgfruit} />
              <Text style={styles.categoryBtnTxt}>Fruit Bearing Plants</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate("FloweringScreen")}
          >
            <View style={styles.categoryIcon}>
              <Image style={styles.tinyLogo} source={imgflower} />
              <Text style={styles.categoryBtnTxt}>Flowering Plants</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    alignItems: "center",
  },
  categoryBtn: {
    flex: 1,
    width: "50%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
    fontWeight: "bold",
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
});
