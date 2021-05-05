import React from "react";
import { View, ImageBackground, Image, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 30,
            marginLeft: 10,
            color: "#16a085",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <FontAwesome
                name="chevron-left"
                size={25}
                style={{
                  paddingRight: 20,
                  color: "#16a085",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          Profile
        </Text>

        <ScrollView>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#16a085",
                width: 360,
                height: 100,
                borderRadius: 20,
                marginLeft: 15,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                shadowOffset: 50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.85,
                shadowRadius: 3.84,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",

                  marginLeft: 20,
                }}
              >
                <FontAwesome
                  name="user-circle"
                  size={40}
                  style={{ marginTop: 10, color: "#fff", marginBottom: 10 }}
                />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      paddingHorizontal: 20,
                      width: 170,

                      fontWeight: "bold",
                    }}
                  >
                    Juan Dela Cruz
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    paddingHorizontal: 20,
                    marginRight: 80,
                  }}
                >
                  09274789275
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    paddingHorizontal: 20,
                    marginRight: 80,
                  }}
                >
                  #28 E.Panganiban St. Brgy. Dalig, Antipolo City
                </Text>
              </View>
              <View
                style={{ marginLeft: -120, marginRight: 40, paddingLeft: 30 }}
              >
                <FontAwesome
                  name="chevron-right"
                  size={10}
                  style={{ color: "#fff" }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <TouchableOpacity>
                  <FontAwesome5
                    name="wallet"
                    size={30}
                    style={{ color: "#16a085" }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "normal", marginTop: 10, fontSize: 12 }}
                >
                  To Pay
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <TouchableOpacity>
                  <FontAwesome5
                    name="shipping-fast"
                    size={30}
                    style={{ color: "#16a085" }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "normal", marginTop: 10, fontSize: 12 }}
                >
                  To Ship
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <TouchableOpacity>
                  <FontAwesome5
                    name="box-open"
                    size={30}
                    style={{ color: "#16a085" }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "normal", marginTop: 10, fontSize: 12 }}
                >
                  To Recieve
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <TouchableOpacity>
                  <FontAwesome
                    name="comment"
                    size={30}
                    style={{ color: "#16a085" }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "normal", marginTop: 10, fontSize: 12 }}
                >
                  To Review
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                borderColor: "#16a085",
                borderWidth: 2,
                width: 360,
                height: 100,
                borderRadius: 20,
                marginLeft: 15,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                shadowOffset: 50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.85,
                shadowRadius: 3.84,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                }}
              >
                <Image
                  source={require("../assets/alocasia.png")}
                  style={{ height: 80, width: 80 }}
                />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 18,
                      paddingHorizontal: 10,
                      width: 170,
                      fontWeight: "bold",
                    }}
                  >
                    Delivered
                  </Text>
                </View>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 12,
                    paddingHorizontal: 10,
                    marginRight: 80,
                    paddingRight: 50,
                  }}
                >
                  Need help? Know more about our Free and Easy Return
                </Text>
              </View>
              <View
                style={{ marginLeft: -150, marginRight: 40, paddingLeft: 30 }}
              >
                <FontAwesome
                  name="chevron-right"
                  size={10}
                  style={{ color: "#000" }}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "#16a085",
              marginTop: 30,
              width: 360,
              height: 220,
              borderRadius: 20,
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              shadowOffset: 50,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.85,
              shadowRadius: 3.84,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    paddingHorizontal: 20,
                    width: 170,
                    marginTop: 30,
                    fontWeight: "bold",
                  }}
                >
                  Flora Wallet
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    paddingRight: 80,
                    paddingLeft: 30,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}
                  >
                    2500.00
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 5,
                    }}
                  >
                    PHP
                  </Text>

                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        width: 70,
                        height: 30,
                        borderRadius: 20,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                        Cash In
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}
                  >
                    3
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: 5,
                    }}
                  >
                    Vouchers
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        width: 70,
                        height: 30,
                        borderRadius: 20,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 15,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                        View
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
