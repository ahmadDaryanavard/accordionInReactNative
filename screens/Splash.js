import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef } from "react";
import MyText from "../components/custom/MyText";
import { width } from "../constants";

export default function Splash({ setMode }) {
  const animation = useRef(new Animated.Value(0)).current;
  const DAnimation = animation.interpolate({
    inputRange: [0, 100, 300],
    outputRange: [150, 40, 40],
  });
  const ARYANAVARDMarginAnimation = animation.interpolate({
    inputRange: [0, 100, 200, 300],
    outputRange: ["-75%", "-75%", "0%", "0%"],
  });

  const ARYANAVARDOpacityAnimation = animation.interpolate({
    inputRange: [0, 100, 300],
    outputRange: [0, 0, 1],
  });
  useEffect(() => {
    setTimeout(() => {
      setMode(2);
    }, 5000);
    Animated.sequence([
      Animated.timing(animation, {
        delay: 1000,
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        delay: 500,
        toValue: 200,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.ARYANAVARD,
          {
            marginLeft: ARYANAVARDMarginAnimation,
            opacity: ARYANAVARDOpacityAnimation,
          },
        ]}
      >
        ARYANAVARD
      </Animated.Text>
      <Animated.Text
        style={[
          styles.D,
          {
            fontSize: DAnimation,
          },
        ]}
      >
        D
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#3566e7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ARYANAVARD: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  D: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
