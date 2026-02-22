import { Image, StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          style={styles.headerimage}
          source={require("@/assets/instagram/images/instagram.png")}
        ></Image>
        <Image
          style={styles.littletotheleft}
          source={require("@/assets/instagram/icons/heart.png")}
        ></Image>
        <Image
          style={styles.headericons}
          source={require("@/assets/instagram/icons/comment.png")}
        ></Image>
      </View>
      <View style={styles.peoplebox}>
        <View style={styles.people}>
          <Image
            source={require("@/assets/instagram/images/profile1.png")}
          ></Image>
          <Text style={styles.whitetext}>Your story</Text>
        </View>
        <View style={styles.people}>
          <Image
            source={require("@/assets/instagram/images/profile2.png")}
          ></Image>
          <Text style={styles.whitetext}>addisionnyc</Text>
        </View>
        <View style={styles.people}>
          <Image
            source={require("@/assets/instagram/images/profile3.png")}
          ></Image>
          <Text style={styles.whitetext}>natasham11</Text>
        </View>
        <View style={styles.people}>
          <Image
            source={require("@/assets/instagram/images/profile4.png")}
          ></Image>
          <Text style={styles.whitetext}>adrian</Text>
        </View>
      </View>

      <View>
        <View style={styles.topstory}>
          <Image
            style={styles.smallicon}
            source={require("@/assets/instagram/images/profile4.png")}
          ></Image>
          <View style={styles.storydatetext}>
            <Text style={styles.whitetext}>masterphotographer</Text>
            <Text style={styles.whitetext}>January 3rd</Text>
          </View>
          <Image
            style={styles.farrighticon}
            source={require("@/assets/instagram/icons/tripledot.png")}
          ></Image>
        </View>
        <View style={styles.storycontainer}>
          <Image
            style={styles.autofill}
            source={require("@/assets/instagram/images/rock.jpg")}
          ></Image>
        </View>
        <View style={styles.storyboxbottom}>
          <View style={styles.rowcontainer}>
            <Image
              style={styles.smallinvert}
              source={require("@/assets/instagram/icons/heart.png")}
            ></Image>
            <Text style={styles.whitetext}> 99k</Text>
            <Image
              style={styles.descicon}
              source={require("@/assets/instagram/icons/comment.png")}
            ></Image>
            <Image
              style={styles.descicon}
              source={require("@/assets/instagram/icons/send.png")}
            ></Image>
            <Text style={styles.whitetext}> 200</Text>
          </View>
          <Image
            style={styles.farrighticon}
            source={require("@/assets/instagram/icons/bookmark.png")}
          ></Image>
          <Text style={styles.storytext}>
            masterphotographer love the composition on this...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0c1014",
    height: "100%",
  },
  header: {
    padding: 10,
    height: 60,
  },
  headerimage: {
    height: 40,
    width: 100,
    filter: "invert(1)",
  },
  headericons: {
    position: "absolute",
    height: 30,
    width: 30,
    filter: "invert(0.8)",
    top: 7,
    right: 10,
    alignSelf: "flex-end",
  },
  littletotheleft: {
    position: "absolute",
    height: 30,
    width: 30,
    filter: "invert(0.8)",
    alignSelf: "flex-end",
    top: 7,
    right: 60,
  },

  peoplebox: {
    height: 140,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  people: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  topstory: {
    padding: 10,
  },
  storydatetext: {
    position: "absolute",
    top: 10,
    left: 55,
  },
  storycontainer: {
    width: "100%",
    height: 400,
  },
  storyboxbottom: {
    padding: 15,
  },
  descicon: {
    width: 30,
    height: 30,
    filter: "invert(0.8)",
    marginLeft: 20,
  },
  storytext: {
    color: "#FFFFFF",
    top: 10,
  },

  autofill: {
    width: "100%",
    height: "100%",
  },

  rowcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  farrighticon: {
    position: "absolute",
    width: 30,
    height: 30,
    filter: "invert(0.8)",
    top: 15,
    right: 10,
  },
  smallicon: {
    width: 40,
    height: 40,
  },
  smallinvert: {
    width: 30,
    height: 30,
    filter: "invert(0.8)",
  },
  whitetext: {
    color: "#FFFFFF",
  },
});
