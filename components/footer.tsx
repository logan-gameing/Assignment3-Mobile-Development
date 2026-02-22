import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Footer() {
  const router = useRouter();
  return (
    <View style={styles.footerbox}>
      <Image
        source={require("../assets/instagram/icons/home.png")}
        style={styles.icons}
      ></Image>
      <Image
        source={require("../assets/instagram/icons/search.png")}
        style={styles.icons}
      ></Image>
      <Image
        source={require("../assets/instagram/icons/more.png")}
        style={styles.icons}
      ></Image>
      <Image
        source={require("../assets/instagram/icons/video.png")}
        style={styles.icons}
      ></Image>
      <Image
        source={require("../assets/instagram/icons/search.png")}
        style={styles.icons}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  footerbox: {
    height: 60,
    width: "100%",
    backgroundColor: "#000000",
    position: "fixed",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icons: {
    height: 30,
    width: 30,
    filter: "invert(1)",
  },
});
