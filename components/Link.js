import { View, Text } from "react-native";
import React from "react";
import MyText from "./custom/MyText";

export default function Link({ url, title }) {
  return (
    <View style={{ padding: 5 }}>
      <MyText>{title}</MyText>
    </View>
  );
}
