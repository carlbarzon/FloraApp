import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AlocasiaSwiper from "../assets/alocasiaSwiper";

const AlocasiaDetailScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "90%",
        }}
      >
        <View style={{ width: "10%", paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/17.png")}
              style={{ marginVertical: 40 }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../assets/11.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../assets/12.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../assets/13.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../assets/14.png")} />
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <AlocasiaSwiper />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#62636a",
          }}
        >
          Alocasia
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 180,
            fontSize: 20,
          }}
        >
          P400
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#b1e5d3",
          paddingTop: 3,
          fontSize: 20,
        }}
      >
        Indoor Plant
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "50%",
            backgroundColor: "#00a46c",
            height: 70,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 17,
            }}
          >
            Buy Now
          </Text>
        </View>

        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AlocasiaDescription")}
          >
            <Text
              style={{
                color: "#62636a",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Description
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlocasiaDetailScreen;
