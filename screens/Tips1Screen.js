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
export default class Tips1Screen extends Component {
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
          <Text style={styles.title}>10 Top Gardening Tips for Beginners</Text>

          <Image
            style={styles.imageArticle}
            source={require("../assets/a1.jpg")}
          />

          <View style={{ marginTop: 20 }}>
            <Text>
              Never gardened before? No problem. Make your grow-you-own dreams a
              reality with these 10 easy-to-follow tips.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              1. Site it right.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Starting a garden is just like real estate it's all about
              location. Place your garden in a part of your yard where you'll
              see it regularly (out of sight, out of mind definitely applies to
              gardening). That way, you'll be much more likely to spend time in
              it.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/a2.jpg")}
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
              2. Follow the Sun.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Misjudging sunlight is a common pitfall when you're first learning
              to garden. Pay attention to how sunlight plays through your yard
              before choosing a spot for your garden. Most edible plants,
              including many vegetables, herbs, and fruits, need at least 6
              hours of sun in order to thrive.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              3. Stay Close to Water.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              One of the best gardening tips you'll ever get is to plan your new
              garden near a water source. Make sure you can run a hose to your
              garden site, so you don't have to lug water to it each time your
              plants get thirsty. The best way to tell if plants need watering
              is to push a finger an inch down into the soil (that's about one
              knuckle deep). If it's dry, it's time to water.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/a3.jpg")}
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
              4. Start with great soil.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              When starting a garden, one of the top pieces of advice is to
              invest in soil that is nutrient-rich and well-drained. Achieve
              this just-right blend by mixing 3 inches of Garden Soil into the
              top 6 to 8 inches of existing soil if you're planning to plant in
              the ground. If you're planting in a raised bed, use Raised Bed
              Soil, which is the perfect weight and texture for raised bed
              growing.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              5. Consider containers.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              When space is at a premium, look to containers. You can grow many
              plants in pots, including vegetables, herbs, flowers, fruit trees,
              berries, and shrubs. When gardening in containers, use a pot
              that's large enough for the plant it's hosting, and fill it with
              Potting Mix. Not only is it specially formulated to help plants in
              pots thrive, but it also helps protect against over- and
              under-watering.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/a5.jpg")}
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
              6. Choose the right plants.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              It's important to select plants that match your growing
              conditions. This means putting sun-loving plants into a sunny
              spot, choosing heat-tolerant plants in warm climates, and giving
              ground-gobbling vines like pumpkins and melons ample elbow room
              (or a trellis to climb). Do your homework and pick varieties that
              will grow well where you live and in the space you have. And to
              get a step up on success when growing veggies and herbs, start
              with vigorous young plants from Bonnie Plants® instead of trying
              to grow from seed.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              7. Discover your zone.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Knowing your "hardiness zone" can help you choose the best plants.
              Simply put, it describes the coldest place a plant can grow. The
              higher the zone number, the warmer the climate. So if a plant is
              "hardy to zone 4" and you garden in zone 5, that plant will
              survive in your yard. If, however, you're in zone 3, it's too cold
              to grow that particular plant. Find out your hardiness zone.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              8. Learn your frost dates.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Planting too early (or late) in the season can spell disaster for
              your garden. You need to know the last average spring frost date
              for your area so you don't accidentally kill plants by putting
              them out prematurely. It's also good to know your first average
              fall frost date so that you get your plants harvested or moved
              indoors before late-season cold damages them. Discover the average
              first and last frost dates for your area.
            </Text>
          </View>

          <Image
            style={styles.imageArticle}
            source={require("../assets/a6.jpg")}
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
              9. Add some mulch.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              Apply a layer of mulch that's 2 to 3 inches deep around each
              plant. This will help reduce weeds by blocking out the sun, and
              reduce moisture loss through evaporation, so you have to water
              less. For a polished look, put down a layer of Scotts® bagged
              mulch. Or, you can put down straw, shredded leaves, pine straw, or
              some other locally available material.
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#16a085",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              10. Feed plants regularly.
            </Text>
            <Text style={{ marginBottom: 30 }}>
              We've already talked about the importance of starting with great
              soil, but that soil works best in concert with regular boosts of
              high-quality nutrition for your plants. In other words, amazing
              soil + top-notch plant food = super garden success! So, a month
              after planting, begin feeding your garden with plant food like
              Water Soluble All Purpose Plant Food. Be sure to follow label
              directions.
            </Text>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text>
              One last word of advice: Stock up on the basic tools you need to
              make it easier to grow. Get all the details in our Tools for
              Gardening article. Happy growing!
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
