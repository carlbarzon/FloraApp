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
export default class Tips3Screen extends Component {
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
            Fact or Fiction: Plant Myths Debunked
          </Text>

          <Image
            style={styles.imageArticle}
            source={require("../assets/c1.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Adding Peroxide to the Soil
            </Text>
            <Text style={{ marginBottom: 30 }}>
              This one is a double-edged sword. Adding hydrogen peroxide to the
              soil is a common thing to hear in the plant community. If you use
              the wrong strength, or it is not properly diluted, it is actually
              harmful and can be corrosive. So, if you’ve ever heard that
              dumping some straight peroxide into your soil is a good idea,
              think again. Also, peroxide will kill off the beneficial bacteria
              that lives in your soil and provides your plants with nutrients.
              However, adding a certain mix of peroxide and water does have
              benefits, so you will have to stick around for the next
              installment that features facts to read about those!
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/c2.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Plants Grow Bigger in Bigger Pots
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Nope. No. Just, no. This is such a bad myth! In fact, if you put a
              plant in a pot that is much larger than the root ball, you are
              massively raising the chance of those roots rotting. The soil will
              take much longer to dry out, which means that those delicate roots
              are exposed to wet soil for a lot longer. Also, the plant will
              expend more energy on growing the roots to fill the pot than it
              will be on growing new leaves and flowers.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/c3.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              All Houseplants Need to Be in a South Facing Window
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Most houseplants actually will get sunburned leaves if they are
              stuck in front of a southern facing window. The best thing to do
              is to know what kind of plant you have and then look up the light
              requirements for it. You might find yourself surprised how many
              plants don’t need that high of a light level.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/c4.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Yellow Leaves Mean That Plant is Over Watered
            </Text>
            <Text style={{ marginBottom: 30 }}>
              One of the first diagnoses people like to trot out when they see
              yellowing leaves is that the plant is over-watered, but yellow
              leaves can mean a lot of things. Under-watering can cause yellowed
              leaves as well as over-watering, but water may not be the issue.
              Temperature (cold draft on a tropical plant?), light (is the plant
              in a dark corner?), and fertilizer (too much can burn, too little
              and the plant may lack nutrients), and even pests are also common
              causes of leaf yellowing.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/c5.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              There Are Plants That Can Live in An Enclosed Space Without
              Windows or Grow Lights
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Yes, and they’re called fake plants! All plants need light to
              photosynthesize, so a room with no natural light or supplemental
              grow lights isn’t a good place for your plants. One way around
              this problem is to have several hardy plants that can tolerate low
              light levels for a little while, and swap them out weekly so that
              they all get their time in the sun when not decorating your
              low-light or no-light space.
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  imageArticle: {
    width: "100%",
    height: 200,
  },
});
