import { Image, StyleSheet, Text, View } from "react-native";

export default function Search() {
  let images = [
    "@/assets/instagram/images/img1.jpg",
    "@/assets/instagram/images/img2.jpg",
    "@/assets/instagram/images/img3.jpg",
    "@/assets/instagram/images/img4.jpg",
    "@/assets/instagram/images/img5.jpg",
    "@/assets/instagram/images/img6.jpg",
    "@/assets/instagram/images/img7.jpg",
    "@/assets/instagram/images/img8.jpg",
    "@/assets/instagram/images/img9.jpg",
    "@/assets/instagram/images/img10.jpg",
    "@/assets/instagram/images/img11.jpg",
    "@/assets/instagram/images/img12.jpg",
  ];

  return (
    <View style={styles.background}>
      <View style={styles.searchbar}>
        <Image
          style={styles.searchicon}
          source={require("@/assets/instagram/icons/search.png")}
        ></Image>
        <Text style={styles.searchtext}> Search with meta AI</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img1.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img2.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img3.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img4.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img5.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img6.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img7.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img8.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img9.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img10.jpeg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img11.jpeg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img12.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img3.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img4.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img5.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img5.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img6.jpg")}
        ></Image>
        <Image
          style={styles.baseimage}
          source={require("@/assets/instagram/images/img7.jpg")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0c1014",
    height: "100%",
  },
  searchbar: {
    height: 40,
    width: "80%",
    backgroundColor: "#1b2127f1",
    alignSelf: "center",
    top: 25,
    borderRadius: 25,
  },
  searchicon: {
    height: 20,
    width: 20,
    left: 10,
    top: 10,
    filter: "invert(0.5)",
  },
  searchtext: {
    left: 35,
    top: -10,
    color: "#777777",
  },

  imgcontainer: {
    width: "100%",
    top: 40,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  baseimage: {
    width: "32.33%",
    aspectRatio: "1/1",
    margin: 1,
  },
});
