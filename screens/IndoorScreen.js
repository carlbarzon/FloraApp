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

export default class IndoorScreen extends Component {
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
            Indoor Plants
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                source={require("../assets/alocasia.png")}
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
                  ALOCASIA
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
                Indoor Plants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                source={require("../assets/cactus.png")}
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
                  CACTUS
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
                Indoor Plants
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                style={{ width: 140, height: 170 }}
                source={require("../assets/crocodilefern.png")}
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
                  CROCODILE
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
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                FERN
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Indoor Plants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                source={require("../assets/snakeplant.png")}
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
                  SNAKE
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
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                PLANT
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#16a085",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                Indoor Plants
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                source={require("../assets/coffeeplant.png")}
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
                  COFFEE
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  P600
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                PLANT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AlocasiaDetailScreen")
              }
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
                source={require("../assets/zansibar.png")}
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
                  ZANSIBAR
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 20,
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
                Indoor Plants
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
