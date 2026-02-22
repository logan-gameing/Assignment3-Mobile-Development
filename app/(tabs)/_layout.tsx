import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarBackground: "#000000" }}>
      <Tabs.Screen
        name="main-page"
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/instagram/icons/home.png")}
              style={styles.icons}
            ></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="search-page"
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/instagram/icons/search.png")}
              style={styles.icons}
            ></Image>
          ),
        }}
      />
      <Image
        source={require("@/assets/instagram/icons/more.png")}
        style={styles.icons}
      ></Image>
      <Tabs.Screen
        name="reels-page"
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/instagram/icons/video.png")}
              style={styles.icons}
            ></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="profile-page"
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/instagram/icons/search.png")}
              style={styles.icons}
            ></Image>
          ),
        }}
      />
    </Tabs>
  );
}

const Footer() {
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
  },
});
