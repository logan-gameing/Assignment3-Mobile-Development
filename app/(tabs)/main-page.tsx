import { Image, StyleSheet, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          style={styles.headerimage}
          source={require("@/assets/instagram/images/instagram.png")}
        ></Image>
        <Image
          style={styles.headericons}
          source={require("@/assets/instagram/icons/heart.png")}
        ></Image>
        <Image
          style={styles.headericons}
          source={require("@/assets/instagram/icons/comment.png")}
        ></Image>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0c1014",
    height: "100%",
  },
  header: {
    padding: 5,
    height: 65,
    width: "100%",
    flex: 1,
    backgroundColor: "#000000",
  },
  headerimage: {
    maxHeight: 70,
    maxWidth: 140,
    filter: "invert(0.5) brightness(2)",
  },
  headericons: {
    height: 30,
    width: 30,
    filter: "invert(0.5) brightness(2)",
  },
  peoplebox: {},
  peopleicons: {},
  topstory: {},
  storyiconcontainer: {},
  suggestedbox: {},
  suggesticon: {},
});
