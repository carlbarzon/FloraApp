import React from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class CheckoutScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#16a085",
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
            color: "#fff",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <FontAwesome5
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
          Checkout
        </Text>

        <ScrollView>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#fff",
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
                  backgroundColor: "#16a085",
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",

                  marginLeft: 20,
                }}
              >
                <FontAwesome5
                  name="map-marker-alt"
                  size={30}
                  style={{ color: "#fff" }}
                />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#345c74",
                      fontSize: 18,
                      paddingHorizontal: 20,
                      width: 170,

                      fontWeight: "bold",
                    }}
                  >
                    Juan Dela Cruz
                  </Text>
                  <Text
                    style={{
                      color: "#345c74",
                      fontSize: 16,
                      paddingHorizontal: 20,
                      marginLeft: -25,
                    }}
                  >
                    09274789...
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#345c74",
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
                <FontAwesome5 name="chevron-right" size={10} />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              width: 360,
              height: 100,
              borderRadius: 20,
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#16a085",
                width: 50,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",

                marginLeft: 20,
              }}
            >
              <Image
                source={require("../assets/alocasia.png")}
                style={{ height: 100, width: 100 }}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    paddingHorizontal: 20,
                    width: 170,

                    fontWeight: "bold",
                  }}
                >
                  ALOCASIA
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    paddingHorizontal: 20,
                    marginLeft: 10,
                  }}
                >
                  Qty: 1
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                Indoor Plants
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                P400
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 360,
              height: 100,
              borderRadius: 20,
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#16a085",
                width: 50,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",

                marginLeft: 20,
              }}
            >
              <Image
                source={require("../assets/agave.png")}
                style={{ height: 80, width: 80 }}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    paddingHorizontal: 20,
                    width: 170,

                    fontWeight: "bold",
                  }}
                >
                  AGAVE
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    paddingHorizontal: 20,
                    marginLeft: 10,
                  }}
                >
                  Qty: 1
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                Outdoor Plants
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                P400
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 360,
              height: 100,
              borderRadius: 20,
              marginLeft: 15,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#16a085",
                width: 50,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",

                marginLeft: 20,
              }}
            >
              <Image
                source={require("../assets/apple.png")}
                style={{ height: 80, width: 80 }}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    paddingHorizontal: 20,
                    width: 170,

                    fontWeight: "bold",
                  }}
                >
                  Apple
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    paddingHorizontal: 20,
                    marginLeft: 10,
                  }}
                >
                  Qty: 1
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                Fruit Bearing Plant
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  paddingHorizontal: 20,
                  marginRight: 80,
                }}
              >
                P800
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                marginTop: 30,
                backgroundColor: "#fff",
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
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",

                  marginLeft: 20,
                }}
              >
                <FontAwesome5
                  name="truck-loading"
                  size={20}
                  style={{ color: "#16a085" }}
                />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#345c74",
                      fontSize: 18,
                      paddingHorizontal: 20,
                      width: 170,

                      fontWeight: "bold",
                    }}
                  >
                    STANDARD DELIVERY
                  </Text>
                  <Text
                    style={{
                      color: "#345c74",
                      fontSize: 16,
                      paddingHorizontal: 20,
                      marginLeft: 10,
                    }}
                  >
                    P41.50
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#345c74",
                    fontSize: 12,
                    paddingHorizontal: 20,
                    marginRight: 80,
                  }}
                >
                  EST. Arrival: 6-19 May
                </Text>
              </View>
              <View
                style={{ marginLeft: -30, marginRight: 20, paddingLeft: 30 }}
              >
                <FontAwesome5 name="chevron-right" size={10} />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Select Payment Method
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>
              View all methods >
            </Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: 200,
                height: 110,
                borderRadius: 20,
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 20,
                }}
              >
                <FontAwesome5
                  name="wallet"
                  size={30}
                  style={{ color: "#16a085" }}
                />
                <View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}
                  >
                    Flora Wallet
                  </Text>
                  <Text style={{ fontSize: 12, marginLeft: 20 }}>
                    Balance: P2500.00
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -10 }}>
                Top up & pay
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                width: 200,
                height: 110,
                borderRadius: 20,
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 20,
                }}
              >
                <FontAwesome5
                  name="truck"
                  size={30}
                  style={{ color: "#16a085" }}
                />
                <View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}
                  >
                    Cash on Delivery
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, marginLeft: 20, marginTop: -10 }}>
                Pay when you recieve
              </Text>
            </View>
          </ScrollView>
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
              placeholder="Enter Voucher Code"
              placeholderTextColor="#16a085"
              style={{
                fontWeight: "bold",
                fontSize: 18,
                width: 310,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Merchandise Subtotal
              </Text>
              <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }}>
                (3 Items)
              </Text>
            </View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              P1600.00
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
              justifyContent: "space-between",
              marginTop: -20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Shipping Fee</Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              P41.50
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
              justifyContent: "space-between",
              marginTop: -20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              Shipping Fee Voucher
            </Text>
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              -P10.00
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              padding: 20,
              marginTop: -20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Order Amount
              </Text>
              <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }}>
                (VAT included)
              </Text>
            </View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              P1631.50
            </Text>
          </View>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                width: 120,
                height: 40,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 255,
                marginTop: 20,
                marginBottom: 30,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Place Order</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
