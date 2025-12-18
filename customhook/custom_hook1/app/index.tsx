import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useOnlineStatus from "./useOnlineStatus";

export default function Index() {
  const isOnline = useOnlineStatus();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> {isOnline ? '🟢 You are Online' : '🔴 You are Offline'}</Text>
    </View>
  );
}
