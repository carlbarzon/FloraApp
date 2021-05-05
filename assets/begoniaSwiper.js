import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const BegoniaSwiper = () => {
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: "#FFF",
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#FFF",
        activeDotColor: "#FFF",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("./begonia1.jpg")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            height: 500,
            width: 350,
            marginTop: 60,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("./begonia2.png")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            height: 500,
            width: 350,
            marginTop: 60,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("./begonia3.png")}
          style={{
            marginLeft: 120,
            marginBottom: 130,
            height: 500,
            width: 350,
            marginTop: 60,
            borderRadius: 20,
          }}
        />
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default BegoniaSwiper;
