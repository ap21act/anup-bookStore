import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { BookOpen, Circle, CirclePlus, House } from "lucide-react-native";

interface TabProps {
  focused?: boolean;
  title?: string;
  children: React.ReactNode;
}

const Tabicon = ({ focused, title, children }: TabProps) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    {children}
    <Text
      className={`${
        focused
          ? "text-primary-300 font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const tabData = [
  {
    name: "addBook",
    title: "Add Book",
    icon: CirclePlus,
  },
  {
    name: "index",
    title: "Home",
    icon: House,
  },
  {
    name: "bookList",
    title: "Explore",
    icon: BookOpen,
  },
];

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {tabData.map((tab, index) => {
        const IconComponent = tab.icon; // Extract component reference

        return (
          <Tabs.Screen
            key={index}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Tabicon focused={focused} title={tab.title}>
                  <IconComponent
                    size={24}
                    color={focused ? "#0061FF" : "#666876"}
                  />
                </Tabicon>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
