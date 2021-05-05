import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

const data = [
  {
    title: "DISCOVER AND GROW A NEW PLANT",
    text: "Follow your heart’s desire and have your home decorated.",
    image: require("../assets/plant1.png"),
  },
  {
    title: "PLANTIPS",
    text: "Learn the proper way of taking care of your plant.",
    image: require("../assets/plant2.png"),
  },
  {
    title: "PLANTRIVIA",
    text: "Know more about the value of your heart!",
    image: require("../assets/plant3.png"),
  },
];

const OnboardScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.imgView}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.rightText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = (props) => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16a085",
  },
  image: {
    marginVertical: 60,
  },

  imgView: {
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    marginTop: -130,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 50,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 50,
    marginTop: 20,
  },

  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: "#fff",
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: "#fff",
  },

  dotStyle: {
    backgroundColor: "#B2D0BF",
  },
  activeDotStyle: {
    backgroundColor: "#27ae60",
  },
});

export default OnboardScreen;
