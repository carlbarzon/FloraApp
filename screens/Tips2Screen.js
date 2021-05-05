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
export default class Tips2Screen extends Component {
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
          <Text style={styles.title}>
            5 Ideas to display Houseplants | Indoor Plants Decoration
          </Text>

          <Image
            style={styles.imageArticle}
            source={require("../assets/b1.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text>
              You don’t need a large room to have indoor plants. Be creative and
              grow plants vertically.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.imageArticle}
              source={require("../assets/b2.jpg")}
            />
            <Text style={{ marginTop: 20 }}>
              Consider the houseplants as an important part of your interior
              decoration. Cascading houseplants like the string of pearls looks
              chic.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.imageArticle}
              source={require("../assets/b3.jpg")}
            />
            <Text style={{ marginTop: 20 }}>
              Plant stands are the great decorative feature. They elevate the
              plants to a higher label. Metal, plastic or wooden, choose plant
              stands according to your interior.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.imageArticle}
              source={require("../assets/b4.jpg")}
            />
            <Text style={{ marginTop: 20 }}>
              Use shelves in your home to keep the plants on it. There you can
              do a small indoor garden like set up.
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Image
              style={styles.imageArticle}
              source={require("../assets/b5.jpg")}
            />
            <Text style={{ marginTop: 20 }}>
              Use cool pots and planters to grow your plants. Must remember that
              pots accentuate the beauty of plants and should be chosen
              correctly.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
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
    height: 200,
  },
});
