import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import Home from "../screens/Home";
import { width } from "../constants";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Drawer.Navigator
        style={{ flex: 1 }}
        useLegacyImplementation={false}
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          swipeEnabled: true,
          swipeEdgeWidth: 100,

          drawerStyle: {
            width: width(70),
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={Home} />
      </Drawer.Navigator>
    </View>
  );
}
