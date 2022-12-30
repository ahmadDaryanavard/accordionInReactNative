import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import MyText from "./custom/MyText";
import Animated, {

  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Link from "./Link";

const Accordion = (props) => {
  const [open, setOpen] = useState(false);
  const height = useSharedValue(0);
  const { items, title } = props;
  const inside = useAnimatedRef();

  const offset = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: offset.value,
  }));

  useEffect(() => {
    if (open) {
      offset.value = withTiming(height.value);
    } else {
      offset.value = withTiming(0);
    }
  }, [open, height]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.header}>
        <MyText>{title}</MyText>
      </TouchableOpacity>
      <Animated.View style={[styles.contentContainer, style]}>
        <View style={{ padding: 10, height: 999999 }}>
          <View
            ref={inside}
            onLayout={(event) =>
              runOnUI(() => {
                open
                  ? (offset.value = withTiming(
                      event.nativeEvent.layout.height + 10
                    ))
                  : null;
                height.value = event.nativeEvent.layout.height + 10;
              })()
            }
          >
            {items.map((item, index) =>
              item.subItems !== undefined && item.subItems.length > 0 ? (
                <Accordion key={index} items={item.subItems} title={item.title} />
              ) : (
                <Link title={item.title} key={index} />
              )
            )}
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    marginVertical: 5,
    backgroundColor: "rgba(100,100,100,0.15)",
    borderRadius: 10,
    overflow: "hidden",
  },
  contentContainer: {},
  header: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(100,100,100,0.4)",
    borderRadius: 10,
    overflow: "hidden",
  },
});
Accordion.defaultProps = {
  items: [],
};
export default Accordion;
