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
export default class BegoniaDescription extends Component {
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
            source={require("../assets/begonia.png")}
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
                Begonia
              </Text>
              <Text style={{ marginBottom: 30, padding: 20, color: "#fff" }}>
                When they bloom: Spring through summer (though some types bloom
                year-round) Why we love them: Begonias come in a staggering
                array of shapes and colors and bloom continually without any
                deadheading (pinching off spent blooms). They're the perfect
                low-maintenance annual for any garden!
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
                    Type: Flowering plant
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
                    Soil: Well-drained
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
                    Light: Prefers shade
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
                    Design Tip: Colorful containers
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
                    Lifespan: Perennial
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
                    Companions: Ferns, coleus
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
                    Peak Season: Summer
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

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
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
                    USDA Zones: 9-10
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
