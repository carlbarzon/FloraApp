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

export default class HerbsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Herb Plants
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 160, height: 180 }}
                source={require("../assets/mint.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  MINT
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 160, height: 180 }}
                source={require("../assets/parsley.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  PARSLEY
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 35,
                  }}
                >
                  P500
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 140, height: 170, marginLeft: 10 }}
                source={require("../assets/rosemary.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  ROSEMARY
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 150, height: 170 }}
                source={require("../assets/sage.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  SAGE
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  P900
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 120, height: 180, marginLeft: 20 }}
                source={require("../assets/scallion.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  SCALLION
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MintDetailScreen")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
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
                style={{ width: 200, height: 180, marginLeft: -20 }}
                source={require("../assets/thyme.png")}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  THYME
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Herb Plants
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#16a085",
  },
  categoryContainer: {
    flexDirection: "row",
    width: 400,
    padding: 10,
    marginTop: -30,
  },
});
