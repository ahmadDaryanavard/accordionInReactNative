import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaViewBase,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MyText from "./custom/MyText";

export default function Header() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Entypo name="menu" size={30} color="gray" />
        </TouchableOpacity>
        <View style={styles.arrowIcon}>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
        <View>
          <MyText style={{ color: "white" }}>روی دکمه منو کلیک کنید</MyText>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#3566e7",
    paddingVertical: 10,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  arrowIcon: {
    marginHorizontal: 10,
  },
});
