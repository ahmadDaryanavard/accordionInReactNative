import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";

import { AntDesign } from "@expo/vector-icons";
import MyText from "../components/custom/MyText";

export default function Home() {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -60,
          duration: 2000,
          useNativeDriver: false,
          easing: Easing.bounce,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Header />

      <View style={styles.container}>
        <View style={styles.arrowIcon}>
          <Animated.View style={{ transform: [{ translateX: animation }] }}>
            <AntDesign name="arrowleft" size={24} color="gray" />
          </Animated.View>
        </View>

        <MyText style={{ fontSize: 15, fontWeight: "bold" }}>
          میتوانید منو را از سمت راست بکشید
        </MyText>
        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {
    width: 100,
    flexDirection: "row",
  },
});
