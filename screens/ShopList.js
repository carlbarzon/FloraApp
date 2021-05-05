import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class ShopList extends React.Component {
  render() {
    const { img, title, bg, onPress, price } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          backgroundColor: bg,
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: "center",
          marginTop: 10,
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
        <View
          style={{
            backgroundColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowOffset: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image source={img} style={{ width: 40, height: 40 }} />
        </View>
        <View>
          <Text
            style={{
              color: "#345c74",
              fontSize: 18,
              paddingHorizontal: 20,
              width: 170,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              paddingHorizontal: 20,
              marginRight: 80,
            }}
          >
            {price}
          </Text>
        </View>
        <Text
          style={{
            color: "#345c74",
            fontSize: 13,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        ></Text>

        <TouchableOpacity>
          <FontAwesome5
            name="trash"
            size={20}
            style={{ marginLeft: 40, color: "#fff" }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
