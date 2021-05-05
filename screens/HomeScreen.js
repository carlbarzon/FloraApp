import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#FFF",
        }}
      >
        <View
          style={{
            backgroundColor: "#16a085",
            height: "20%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={{
              height: 10,
              width: 20,
              marginTop: 50,
            }}
          />
          <View
            style={{
              alignItems: "flex-start",
              marginTop: -30,
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <FontAwesome
                name="user-circle"
                size={40}
                style={{ marginTop: 40, color: "#fff", marginBottom: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
              width: "100%",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                  marginTop: -10,
                }}
              >
                Hi Plantita!
              </Text>
            </View>
            <View
              style={{ width: "50%", alignItems: "flex-end", marginTop: -10 }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("CartScreen")}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignContent: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <FontAwesome
                    name="shopping-cart"
                    size={28}
                    style={{ color: "#16a085", paddingLeft: 5 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={["rgba(0,164,109,0.4)", "transparent"]}
          style={{
            left: 0,
            right: 0,
            height: 90,
            marginTop: -45,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#16a085"
              style={{
                fontWeight: "bold",
                fontSize: 18,
                width: 310,
              }}
            />
            <Image
              source={require("../assets/3.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
        </LinearGradient>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61",
              }}
            >
              Recommended
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#16a085",
                width: 115,
              }}
            ></View>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Browse")}>
              <View
                style={{
                  backgroundColor: "#16a085",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  More
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 400 }}
        >
          <LinearGradient
            colors={["rgba(0,164,109,0.09)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 100,
              marginTop: 220,
              top: 0,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("AlocasiaDetailScreen")}
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
              style={{ width: 160, height: 180, borderRadius: 10 }}
              source={require("../assets/alocasia1.jpg")}
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
            onPress={() => navigation.navigate("AgaveDetailScreen")}
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
              style={{ width: 160, height: 180, borderRadius: 10 }}
              source={require("../assets/agave1.jpg")}
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
                color: "#16a085",
                paddingTop: 3,
                marginLeft: 10,
              }}
            >
              Outdoor Plants
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("MintDetailScreen")}
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
              style={{ width: 160, height: 180, borderRadius: 10 }}
              source={require("../assets/mint1.png")}
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
                  paddingLeft: 60,
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
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: -90,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61",
              }}
            >
              Featured Plants
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#16a085",
                width: 120,
              }}
            ></View>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Browse")}>
              <View
                style={{
                  backgroundColor: "#16a085",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#FFF",
                  }}
                >
                  More
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 500 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AppleDetailScreen")}
            style={{
              height: 320,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 250,
            }}
          >
            <Image
              style={{ width: 250, height: 250, borderRadius: 10 }}
              source={require("../assets/apple1.jpg")}
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
                APPLE
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 120,
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
              Fruit Bearing Plants
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BegoniaDetailScreen")}
            style={{
              height: 320,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 250,
            }}
          >
            <Image
              style={{ width: 250, height: 250, borderRadius: 10 }}
              source={require("../assets/begonia1.jpg")}
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
                BEGONIA
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 100,
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
              Flowering Plants
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AlocasiaDetailScreen")
            }
            style={{
              height: 320,
              elevation: 2,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 250,
            }}
          >
            <Image
              style={{ width: 250, height: 250, borderRadius: 10 }}
              source={require("../assets/persian1.jpg")}
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
                PERSIAN SHIELD
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 60,
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
              Outdoor Plant
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
