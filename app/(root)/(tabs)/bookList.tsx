import { ForwardIcon, Plus, Search, Star } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";

export default function BookList() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-white px-4 py-3 shadow-sm">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold text-gray-800">My Library</Text>
            <Text className="text-gray-500">Welcome back, Reader!</Text>
          </View>
          <TouchableOpacity
            className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center"
            onPress={() => Alert.alert("Profile", "Profile coming soon!")}
          >
            <Text className="text-xl">👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-3">
        <TouchableOpacity
          className="flex-row bg-white rounded-full px-4 py-2 items-center shadow-sm"
          onPress={() => Alert.alert("Search", "Search feature coming soon!")}
        >
          <Search size={20} color="#6B7280" />
          <Text className="ml-2 text-gray-400">Search your books...</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Reading Now Section */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Reading Now
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((item) => (
              <View key={item} className="mr-4 w-32">
                <View className="bg-blue-500 w-32 h-48 rounded-lg shadow-md overflow-hidden">
                  <Image
                    source={{
                      uri: `https://picsum.photos/200/300?random=${item}`,
                    }}
                    className="w-full h-full"
                  />
                </View>
                <Text className="mt-2 font-semibold text-gray-800 text-sm">
                  Book Title {item}
                </Text>
                <Text className="text-gray-500 text-xs">Author Name</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* My Collection Section */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-800">
              My Collection
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">See All</Text>
            </TouchableOpacity>
          </View>

          {[1, 2, 3].map((item) => (
            <TouchableOpacity
              key={item}
              className="bg-white p-3 rounded-xl mb-3 flex-row items-center shadow-sm"
              onPress={() => Alert.alert("Book Details", "Coming soon!")}
            >
              <View className="bg-blue-100 w-16 h-20 rounded-lg overflow-hidden">
                <Image
                  source={{
                    uri: `https://picsum.photos/200/300?random=${item + 3}`,
                  }}
                  className="w-full h-full"
                />
              </View>
              <View className="flex-1 ml-3">
                <Text className="font-semibold text-gray-800">
                  Book Title {item}
                </Text>
                <Text className="text-gray-500 text-sm">Author Name</Text>
                <View className="flex-row items-center mt-1">
                  <Star size={14} color="#FBC02D" />
                  <Text className="text-gray-500 text-xs ml-1">4.5</Text>
                </View>
              </View>

              <ForwardIcon size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories Section */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Categories
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {["Fiction", "Non-Fiction", "Mystery", "Science"].map(
              (category) => (
                <TouchableOpacity
                  key={category}
                  className="bg-white w-[48%] p-4 rounded-xl mb-3 shadow-sm"
                >
                  <Text className="font-semibold text-gray-800">
                    {category}
                  </Text>
                  <Text className="text-gray-500 text-xs mt-1">12 Books</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-500 w-14 h-14 rounded-full items-center justify-center shadow-lg"
        onPress={() => Alert.alert("Profile", "Profile coming soon!")}
      >
        <Plus size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
