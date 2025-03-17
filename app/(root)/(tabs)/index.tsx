// HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  imageUrl: string;
  progress?: number;
}

export default function HomeScreen() {
  // Sample data
  const currentlyReading: Book[] = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.5,
      imageUrl: "https://picsum.photos/200/300?random=1",
      progress: 65,
    },
    // Add more books
  ];

  const recentlyAdded: Book[] = [
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      rating: 4.8,
      imageUrl: "https://picsum.photos/200/300?random=2",
    },
    // Add more books
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 pt-2 pb-4 bg-white shadow-sm">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-2xl font-bold text-gray-800">My Books</Text>
            <Text className="text-gray-500">Welcome back, Reader!</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
            <Ionicons name="person-outline" size={20} color="#4B5563" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search books..."
            className="flex-1 ml-2 text-gray-700"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Reading Progress Section */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Currently Reading
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {currentlyReading.map((book) => (
              <TouchableOpacity
                key={book.id}
                className="bg-white mr-4 rounded-xl shadow-sm"
                style={{ width: 160 }}
              >
                <Image
                  source={{ uri: book.imageUrl }}
                  className="w-full h-24 rounded-t-xl"
                />
                <View className="p-3">
                  <Text
                    className="text-sm font-semibold text-gray-800 mb-1"
                    numberOfLines={1}
                  >
                    {book.title}
                  </Text>
                  <Text className="text-xs text-gray-500 mb-2">
                    {book.author}
                  </Text>
                  {/* Progress Bar */}
                  <View className="bg-gray-200 h-2 rounded-full">
                    <View
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    />
                  </View>
                  <Text className="text-xs text-gray-500 mt-1">
                    {book.progress}% completed
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between px-4 mt-8">
          <TouchableOpacity className="bg-blue-500 flex-1 mr-2 p-4 rounded-xl">
            <Ionicons name="add-circle-outline" size={24} color="white" />
            <Text className="text-white font-semibold mt-2">Add New Book</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-purple-500 flex-1 ml-2 p-4 rounded-xl">
            <Ionicons name="library-outline" size={24} color="white" />
            <Text className="text-white font-semibold mt-2">My Library</Text>
          </TouchableOpacity>
        </View>

        {/* Recently Added */}
        <View className="mt-8 px-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">
              Recently Added
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">See All</Text>
            </TouchableOpacity>
          </View>
          {recentlyAdded.map((book) => (
            <TouchableOpacity
              key={book.id}
              className="bg-white p-3 rounded-xl mb-3 flex-row items-center"
            >
              <Image
                source={{ uri: book.imageUrl }}
                className="w-16 h-20 rounded-lg"
              />
              <View className="flex-1 ml-3">
                <Text className="font-semibold text-gray-800">
                  {book.title}
                </Text>
                <Text className="text-gray-500 text-sm">{book.author}</Text>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={14} color="#FBC02D" />
                  <Text className="text-gray-500 text-xs ml-1">
                    {book.rating}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Reading Stats */}
        <View className="mt-8 px-4 mb-8">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Reading Stats
          </Text>
          <View className="bg-white p-4 rounded-xl">
            <View className="flex-row justify-between mb-4">
              <View>
                <Text className="text-gray-500">Books Read</Text>
                <Text className="text-2xl font-bold text-gray-800">12</Text>
              </View>
              <View>
                <Text className="text-gray-500">Hours Read</Text>
                <Text className="text-2xl font-bold text-gray-800">48</Text>
              </View>
              <View>
                <Text className="text-gray-500">Pages</Text>
                <Text className="text-2xl font-bold text-gray-800">2.4k</Text>
              </View>
            </View>
            {/* Monthly Progress */}
            <View className="bg-gray-100 h-2 rounded-full">
              <View className="bg-green-500 w-3/4 h-2 rounded-full" />
            </View>
            <Text className="text-xs text-gray-500 mt-2">
              Monthly Goal: 75% Complete
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
