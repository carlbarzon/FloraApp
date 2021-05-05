import React from "react";
import { View, ImageBackground, Image, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShopList from "./ShopList";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class CartScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#16a085",
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 30,
            marginLeft: 10,
            color: "#fff",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <FontAwesome
                name="chevron-left"
                size={25}
                style={{
                  paddingRight: 20,
                  color: "#fff",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          Shopping Cart
        </Text>
        <ScrollView style={{ marginTop: 30 }}>
          <ShopList
            img={require("../assets/alocasia.png")}
            title="Alocasia"
            bg="#a7c7aa"
            price="P400"
          />
          <ShopList
            img={require("../assets/agave.png")}
            title="Agave"
            bg="#a7c7aa"
            price="P400"
          />
          <ShopList
            img={require("../assets/apple.png")}
            title="Apple"
            bg="#a7c7aa"
            price="P800"
          />
        </ScrollView>

        <View
          style={{
            backgroundColor: "#a7c7aa",
            borderRadius: 15,
            padding: 20,
            marginBottom: 40,
            margin: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
              borderBottomColor: "white",
              borderBottomWidth: 1,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "right",
              borderBottomColor: "white",
              borderBottomWidth: 1,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            P1600
          </Text>

          <Text
            style={{
              color: "white",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            Sub Total: P1600
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CheckoutScreen")}
          style={{ paddingBottom: 40 }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: 150,
              height: 50,
              marginLeft: 220,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginBottom: 21,
                color: "#16a085",
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 20,
              }}
            >
              Check Out
            </Text>

            <View
              style={{
                height: 38,
                width: 37,
                marginLeft: 80,
                marginTop: -50,
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="chevron-right"
                size={15}
                style={{ color: "#16a085", paddingLeft: 20 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
