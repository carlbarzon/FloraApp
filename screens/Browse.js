import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import imgparsley from "../assets/parsley.jpg";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Browse = ({ navigation }) => {
  {
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
            <TouchableOpacity onPress={() => navigation.navigate("Navigator")}>
              <View>
                <FontAwesome
                  name="chevron-left"
                  size={28}
                  style={{ paddingRight: 20, color: "#fff", marginTop: 10 }}
                />
              </View>
            </TouchableOpacity>
            Recommended
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{ width: 150, height: 180 }}
                source={require("../assets/agave.png")}
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
                  AGAVE
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{
                  width: 140,
                  height: 200,
                  marginLeft: 10,

                  marginTop: -20,
                }}
                source={require("../assets/hosta.png")}
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
                  HOSTA
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{ width: 130, height: 170, marginLeft: 10 }}
                source={require("../assets/lilacsage.png")}
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
                  LILAC
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 50,
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
                SAGE
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{ width: 160, height: 150, marginBottom: 30 }}
                source={require("../assets/hyacinth.png")}
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
                  HYACINTH
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{ width: 160, height: 180 }}
                source={require("../assets/marigold.png")}
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
                  MARIGOLD
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{
                  width: 160,
                  height: 140,
                  marginTop: 20,
                  marginBottom: 20,
                }}
                source={require("../assets/chico.png")}
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
                  CHICO
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#00a46c",
                    paddingLeft: 40,
                  }}
                >
                  P400
                </Text>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
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
              }}
            >
              <Image
                style={{ width: 160, height: 180 }}
                source={require("../assets/tomato.png")}
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
                  TOMATOES
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
                  color: "#b1e5d3",
                  paddingTop: 3,
                  marginLeft: 10,
                }}
              >
                MARIKINA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Browse;
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
