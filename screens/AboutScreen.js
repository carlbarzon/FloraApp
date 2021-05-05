import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import background from "../assets/bg.png";
import Icon from "react-native-vector-icons/Entypo";

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              resizeMode: "cover",
              width: 430,
              height: 650,
              alignItems: "center",
            }}
            source={background}
          >
            <Text style={styles.abttitle}>ABOUT US</Text>
            <Text style={styles.abouttxt}>
              Flora contains high-quality application design best suited for any
              plantito/plantitas connected to plants it includes Indoor and
              outdoor plants, herbs, fruit bearing plant trees and flowering
              plants. It’s minimalist and straightforward, making it a
              refreshing and simple alternative to many of the social
              media-style plant apps out there.
            </Text>
            <Text style={styles.follow}>Follow us!</Text>
            <View style={styles.iconContainer}>
              <Icon name="facebook-with-circle" size={40} color="#16a085" />
              <Icon name="twitter-with-circle" size={40} color="#16a085" />
              <Icon name="instagram-with-circle" size={40} color="#16a085" />
              <Icon name="youtube-with-circle" size={40} color="#16a085" />
              <Icon name="pinterest-with-circle" size={40} color="#16a085" />
            </View>
          </ImageBackground>
          <View style={styles.container}>
            <Text style={styles.devtitle}>DEVELOPERS</Text>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginTop: 50,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/cabang.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  CABANG
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Erika Joy
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Designer & Developer
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/cleofe.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  CLEOFE
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Maria Nikka
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Researcher & Documentation
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/espiritu.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  ESPIRITU
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Mhoreen
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Designer & Developer
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/lalong.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  LALONG
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Carl Joshua
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Main Designer & Main Developer
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/marcaida.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  MARCAIDA
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Erika Joy
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Researcher & Documentation
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 350,
                height: 150,
                marginBottom: 20,
                marginLeft: 20,
                borderRadius: 10,
                flexDirection: "row",
                shadowOffset: 10,
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
              <Image
                source={require("../assets/nebrida.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              />

              <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text
                  style={{
                    fontSize: 30,
                    width: 170,
                    color: "#16a085",
                    fontWeight: "bold",
                  }}
                >
                  NEBRIDA
                </Text>
                <Text
                  style={{
                    color: "#16a085",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginRight: 80,
                    marginTop: -5,
                  }}
                >
                  Hannah Mae
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    marginTop: 10,
                  }}
                >
                  Designer & Developer
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#16a085",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 20,
  },

  iconContainer: {
    flexDirection: "row",
    width: "95%",
    marginTop: 5,
    marginBottom: 5,
    marginTop: 20,
    marginRight: 40,
    justifyContent: "center",
  },

  //HEADINGS
  abttitle: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#16a085",
    justifyContent: "center",
    marginRight: 40,
    marginBottom: 10,
    marginTop: 190,
  },
  devtitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    paddingHorizontal: 30,
    marginBottom: 10,
    paddingTop: 20,
  },

  abouttxt: {
    fontSize: 15,
    color: "#808080",

    paddingRight: 70,
    paddingLeft: 30,

    textAlign: "justify",
  },

  follow: {
    fontSize: 20,
    color: "#16a085",
    marginRight: 40,
    textAlign: "center",
    marginTop: 100,
  },
});
