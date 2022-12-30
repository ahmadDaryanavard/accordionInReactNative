import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Accordion from "./Accordion";

export default function DrawerContent() {
  const items = [
    {
      title: "دسته بندی ۱",
      id: 1,
      subItems: [
        {
          title: "زیر گروه دسته بندی ۱",
          id: 1,
          subItems: [
            {
              title: "زیر گروه زیر گروه دسته بندی ۱",
              id: 1,
              subItems: [
                { title: "لینک ۱", id: 1 },
                { title: "لینک ۲", id: 2 },
              ],
            },
            { title: "لینک ۳", id: 2 },
          ],
        },
        {
          title: "زیر گروه دسته بندی ۲",
          id: 1,
          subItems: [
            { title: "لینک ۴", id: 1 },
            { title: "لینک ۵", id: 2 },
            { title: "لینک ۶", id: 3 },
            { title: "لینک ۷", id: 4 },
            { title: "لینک ۸", id: 5 },
          ],
        },
        { title: "لینک ۹", id: 3 },
        { title: "لینک ۱۰", id: 4 },
      ],
    },
    {
      title: "دسته بندی ۲",
      id: 2,
      subItems: [
        {
          title: "زیر گروه دسته بندی ۱",
          id: 1,
          subItems: [
            {
              title: "زیر گروه زیر گروه دسته بندی ۱",
              id: 1,
              subItems: [
                { title: "لینک ۱", id: 1 },
                { title: "لینک ۲", id: 2 },
              ],
            },
            { title: "لینک ۳", id: 2 },
          ],
        },
        {
          title: "زیر گروه دسته بندی ۲",
          id: 1,
          subItems: [
            { title: "لینک ۴", id: 1 },
            { title: "لینک ۵", id: 2 },
            { title: "لینک ۶", id: 3 },
            { title: "لینک ۷", id: 4 },
            { title: "لینک ۸", id: 5 },
          ],
        },
        { title: "لینک ۹", id: 3 },
        { title: "لینک ۱۰", id: 4 },
      ],
    },
    {
      title: "دسته بندی ۳",
      id: 3,
      subItems: [
        {
          title: "زیر گروه دسته بندی ۱",
          id: 1,
          subItems: [
            {
              title: "زیر گروه زیر گروه دسته بندی ۱",
              id: 1,
              subItems: [
                { title: "لینک ۱", id: 1 },
                { title: "لینک ۲", id: 2 },
              ],
            },
            { title: "لینک ۳", id: 2 },
          ],
        },
        {
          title: "زیر گروه دسته بندی ۲",
          id: 1,
          subItems: [
            { title: "لینک ۴", id: 1 },
            { title: "لینک ۵", id: 2 },
            { title: "لینک ۶", id: 3 },
            { title: "لینک ۷", id: 4 },
            { title: "لینک ۸", id: 5 },
          ],
        },
        { title: "لینک ۹", id: 3 },
        { title: "لینک ۱۰", id: 4 },
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ padding: 10 }}>
        <FlatList
          style={styles.container}
          data={items}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Accordion items={item.subItems} title={item.title} />
          )}
        />
      </View>
      <View style={{ height: 20 }}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    paddingVertical: 10,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,

    height: "100%",
  },
});
