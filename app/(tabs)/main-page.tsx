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

      <View style={styles.topstory}>
        <Image
          style={styles.smallicon}
          source={require("@/assets/instagram/images/profile4.png")}
        ></Image>
        <View style={styles.storydatetext}></View>
        <Text style={styles.whitetext}>rockenthuseist</Text>
        <Text style={styles.whitetext}>January 3rd</Text>
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
    filter: "invert(0.5) brightness(2)",
  },
  headericons: {
    height: 30,
    width: 30,
    filter: "invert(0.5) brightness(2)",
    position: "fixed",
    alignSelf: "flex-end",
  },
  littletotheleft: {
    position: "fixed",
    height: 30,
    width: 30,
    filter: "invert(0.5) brightness(2)",
    alignSelf: "flex-end",
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
  smallicon: {
    width: 40,
    height: 40,
  },
  xsmallicon: {
    width: 30,
    height: 30,
  },
  whitetext: {
    color: "#FFFFFF",
  },
  topstory: {
    padding: 10,
  },
  storydatetext: {},
  storyzcontainer: {},
  suggestedbox: {},
  suggesticon: {},
});
