import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
} from "react-native";
import React, { useRef } from "react";

export default function StepSlide(props) {
  const { nextStep } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: -1 * Dimensions.get("window").width,

      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.spring(fadeAnim, {
      toValue: 0,

      useNativeDriver: false,
    }).start();
  };
  if (nextStep === true) {
    fadeIn();
  } else {
    fadeOut();
  }

  return (
    <Animated.View style={[styles.container, { left: fadeAnim }]}>
      {props.children}
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "row",
  },
});
