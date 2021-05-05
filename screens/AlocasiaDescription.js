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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import imgindoor from "../assets/inplant.png";
export default class AlocasiaDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#16a085",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              borderRadius: 10,
              marginLeft: 20,
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
                    marginLeft: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Image
            style={styles.imageArticle}
            source={require("../assets/alocasia.png")}
          />

          <View
            style={{
              backgroundColor: "#16a085",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: "bold",
                  marginBottom: 20,
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                Alocasia
              </Text>
              <Text style={{ marginBottom: 30, padding: 20, color: "#fff" }}>
                Plant expert Jen Stearns calls the alocasia plant a "really
                showy" option that features defined stems with one leaf on each
                stem but has a lot of variations (some leaves have thick, white
                veins, while others look like stingrays!). They like to dry out
                between watering, and require some misting, too.
              </Text>

              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/type.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Type: Tropical houseplant
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/soil.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -15,
                      fontWeight: "bold",
                    }}
                  >
                    Soil: Loose, well-draining potting mix or crumbly loam
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/light.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Light: Bright indirect light indoors
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/design.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Design Tip: warm, bright area
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/lifespan.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Lifespan: 1-2 years
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/fertilizer.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -15,
                      fontWeight: "bold",
                    }}
                  >
                    Fertilizer: During the growing season or frequent
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/companion.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Companions: Chartreuse plants
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/peak.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Peak Season: Spring through to summer
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={require("../assets/care.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -10,
                      fontWeight: "bold",
                    }}
                  >
                    Care level: Intermediate
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      marginLeft: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/usd.png")}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      padding: 20,
                      paddingRight: 50,
                      fontSize: 15,
                      marginTop: -15,
                      fontWeight: "bold",
                    }}
                  >
                    USDA Zones: 10–11 (often grown as a houseplant)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#16a085",
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
  },
  imageArticle: {
    width: "100%",
    height: 500,
  },
});
