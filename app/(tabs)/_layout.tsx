import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarBackground: Footer }}>
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
      <Tabs.Screen
        name="more"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("@/assets/instagram/icons/more.png")}
              style={styles.icons}
            ></Image>
          ),
        }}
      />

      <Tabs.Screen
        name="reels"
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
              source={require("@/assets/instagram/images/profile1.png")}
              style={styles.profile}
            ></Image>
          ),
        }}
      />
    </Tabs>
  );
}

const Footer = () => {
  return <View style={styles.footerbox}></View>;
};

const styles = StyleSheet.create({
  footerbox: {
    height: 60,
    width: "100%",
    backgroundColor: "#0c1014",
  },
  icons: {
    height: 30,
    width: 30,
    filter: "invert(1)",
  },
  profile: {
    height: 30,
    width: 30,
  },
});
