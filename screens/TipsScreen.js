import React, { Component } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import imgindoor from "../assets/inplant.png";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class TipsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: "#16a085" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: "#16a085",
              justifyContent: "center",
              alignContent: "center",
              marginTop: 20,
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
              Tips and Trivias
            </Text>
          </View>

          <View style={{ marginTop: -20, marginBottom: 80 }}>
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => this.props.navigation.navigate("Tips1Screen")}
              >
                <View style={styles.categoryIcon}>
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#de4f35",
                      fontWeight: "bold",
                      fontSize: 18,

                      paddingRight: 5,
                      marginTop: -10,
                    }}
                  >
                    10 Top Gardening Tips for Beginners
                  </Text>
                  <Image
                    style={{
                      height: 75,
                      width: 75,
                      marginLeft: 20,
                      marginBottom: -35,
                      position: "absolute",
                    }}
                    source={imgindoor}
                  />
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#000",
                      fontSize: 10,
                    }}
                  >
                    Wondering how to start a garden? Find your confidence with
                    these expert gardening tips.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => this.props.navigation.navigate("Tips2Screen")}
              >
                <View style={styles.categoryIcon}>
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#de4f35",
                      fontWeight: "bold",
                      fontSize: 18,

                      paddingRight: 5,
                      marginTop: -10,
                    }}
                  >
                    5 Ideas to display Houseplants |Indoor Plants Decoration
                  </Text>
                  <Image
                    style={{
                      height: 75,
                      width: 75,
                      marginLeft: 20,
                      marginBottom: -35,
                      position: "absolute",
                    }}
                    source={imgindoor}
                  />
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#000",
                      fontSize: 10,
                    }}
                  >
                    You don’t need a large room to have indoor plants. Be
                    creative and grow plants vertically.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => this.props.navigation.navigate("Tips3Screen")}
              >
                <View style={styles.categoryIcon}>
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#de4f35",
                      fontWeight: "bold",
                      fontSize: 18,

                      paddingRight: 5,
                      marginTop: -10,
                    }}
                  >
                    Fact or Fiction: Plant Myths Debunked
                  </Text>
                  <Image
                    style={{
                      height: 75,
                      width: 75,
                      marginLeft: 20,
                      marginBottom: -35,
                      position: "absolute",
                    }}
                    source={imgindoor}
                  />
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#000",
                      fontSize: 10,
                    }}
                  >
                    Adding Peroxide to the Soil. This one is a double-edged
                    sword. Adding hydrogen peroxide to the soil is a common
                    thing to hear in the plant community.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => this.props.navigation.navigate("Tips3Screen")}
              >
                <View style={styles.categoryIcon}>
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#de4f35",
                      fontWeight: "bold",
                      fontSize: 18,

                      paddingRight: 5,
                      marginTop: -10,
                    }}
                  >
                    Fact or Fiction: Plant Myths Debunked
                  </Text>
                  <Image
                    style={{
                      height: 75,
                      width: 75,
                      marginLeft: 20,
                      marginBottom: -35,
                      position: "absolute",
                    }}
                    source={imgindoor}
                  />
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#000",
                      fontSize: 10,
                    }}
                  >
                    Adding Peroxide to the Soil. This one is a double-edged
                    sword. Adding hydrogen peroxide to the soil is a common
                    thing to hear in the plant community.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryBtn}
                onPress={() => this.props.navigation.navigate("Tips3Screen")}
              >
                <View style={styles.categoryIcon}>
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#de4f35",
                      fontWeight: "bold",
                      fontSize: 18,

                      paddingRight: 5,
                      marginTop: -10,
                    }}
                  >
                    Fact or Fiction: Plant Myths Debunked
                  </Text>
                  <Image
                    style={{
                      height: 75,
                      width: 75,
                      marginLeft: 20,
                      marginBottom: -35,
                      position: "absolute",
                    }}
                    source={imgindoor}
                  />
                  <Text
                    style={{
                      marginLeft: 120,
                      color: "#000",
                      fontSize: 10,
                    }}
                  >
                    Adding Peroxide to the Soil. This one is a double-edged
                    sword. Adding hydrogen peroxide to the soil is a common
                    thing to hear in the plant community.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
    alignItems: "center",
  },
  categoryBtn: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  categoryIcon: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    width: "105%",
    height: 100,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: -40,
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
    marginLeft: 120,
    color: "#de4f35",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: -10,
    paddingRight: 5,
  },
  categoryTxt: {
    marginLeft: 120,
    color: "#000",
    fontSize: 10,
    marginTop: -50,
    justifyContent: "center",
  },
  tinyLogo: {
    height: 75,
    width: 75,
    marginLeft: 20,
    marginTop: -20,
  },
});
