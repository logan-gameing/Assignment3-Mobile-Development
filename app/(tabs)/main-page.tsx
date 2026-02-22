import { Image, StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/instagram/images/instagram-logo-words.png")}
        ></Image>
        <Text>HELO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0c1014",
  },
  header: {},
  peoplebox: {},
  peopleicons: {},
  topstory: {},
  storyiconcontainer: {},
  suggestedbox: {},
  suggesticon: {},
});
