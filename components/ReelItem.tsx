import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Reel } from "../data/reels";

export default function ReelItem({ item }: { item: Reel }) {
  return (
    <View style={styles.container}>
      <View style={styles.videoPlaceholder}>
        <Text style={styles.videoText}>Video</Text>
      </View>

      <View style={styles.rightActions}>
        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionIcon}>♥</Text>
          <Text style={styles.actionText}>{item.likes}</Text>
        </Pressable>

        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>{item.comments}</Text>
        </Pressable>

        <Pressable style={styles.actionBtn}>
          <Text style={styles.actionIcon}>➤</Text>
          <Text style={styles.actionText}>Share</Text>
        </Pressable>
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.username}>@{item.username}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  videoPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  videoText: { color: "white", opacity: 0.6, fontSize: 18 },

  rightActions: {
    position: "absolute",
    right: 14,
    bottom: 120,
    gap: 18,
    alignItems: "center",
  },
  actionBtn: { alignItems: "center" },
  actionIcon: { color: "white", fontSize: 26, marginBottom: 4 },
  actionText: { color: "white", fontSize: 12, opacity: 0.9 },

  bottomInfo: { position: "absolute", left: 14, bottom: 40, right: 90 },
  username: { color: "white", fontWeight: "700", marginBottom: 6 },
  caption: { color: "white", opacity: 0.9 },
});
