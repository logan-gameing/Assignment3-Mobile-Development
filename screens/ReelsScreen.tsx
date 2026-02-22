import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import ReelItem from "../components/ReelItem";
import { REELS } from "../data/reels";

const { height } = Dimensions.get("window");

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={REELS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ height }}>
            <ReelItem item={item} />
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});
