import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  I18nManagerStatic,
  I18nManager,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Updates from "expo-updates";
import MainNavigation from "./navigation/MainNavigation";
import StepSlide from "./components/animation/StepSlide";
import { width } from "./constants";
import Splash from "./screens/Splash";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function App() {
  if (!I18nManager.isRTL) {
    Updates.reloadAsync();
  }

  const [mode, setMode] = useState(1);

  return (
    <NavigationContainer>
      {mode === 1 && <Splash setMode={setMode} />}
      {mode === 2 && <MainNavigation />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
