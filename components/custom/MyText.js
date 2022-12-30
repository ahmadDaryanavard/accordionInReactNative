import { View, Text } from "react-native";
import React from "react";

export default function MyText({ children, style }) {
  return (
    <Text style={{ writingDirection: "rtl", textAlign: "left", ...style }}>
      {children}
    </Text>
  );
}
