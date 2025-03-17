import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Interface definitions
interface FormData {
  title: string;
  author: string;
  description: string;
  genre: string;
  coverUrl: string;
  isbn: string;
}

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
}

export default function AddBook() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    author: "",
    description: "",
    genre: "",
    coverUrl: "https://picsum.photos/200/300",
    isbn: "",
  });

  const [activeField, setActiveField] = useState<string | null>(null);

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Romance",
    "Biography",
  ];

  const handleSubmit = () => {
    if (!formData.title || !formData.author) {
      Alert.alert("Missing Fields", "Please fill in all required fields");
      return;
    }

    Alert.alert("Success!", "Book added to your library", [
      {
        text: "View Library",
        onPress: () => Alert.alert("BookList"),
        style: "default",
      },
      {
        text: "Add Another",
        onPress: () => {
          setFormData({
            title: "",
            author: "",
            description: "",
            genre: "",
            coverUrl: "https://picsum.photos/200/300",
            isbn: "",
          });
        },
      },
    ]);
  };

  const CustomInput: React.FC<CustomInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    required = false,
    multiline = false,
  }) => (
    <SafeAreaView className="mb-4">
      <Text className="text-sm font-medium text-gray-700 mb-1">
        {label} {required && <Text className="text-red-500">*</Text>}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
        onFocus={() => setActiveField(label)}
        onBlur={() => setActiveField(null)}
        className={`bg-white border rounded-xl px-4 py-3 ${
          multiline ? "h-24 text-start" : ""
        } ${activeField === label ? "border-blue-500" : "border-gray-200"}`}
        placeholderTextColor="#9CA3AF"
      />
    </SafeAreaView>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-50"
    >
      <ScrollView className="flex-1">
        {/* Header Section */}
        <View className="bg-blue-500 p-6 rounded-b-3xl">
          <Text className="text-white text-2xl font-bold mb-2">
            Add New Book
          </Text>
          <Text className="text-blue-100">Fill in the details below</Text>
        </View>

        {/* Form Content */}
        <View className="p-6">
          {/* Book Cover Preview */}
          <View className="items-center mb-6">
            <View className="relative">
              <Image
                source={{ uri: formData.coverUrl }}
                className="w-32 h-48 rounded-lg shadow-lg"
              />
              <TouchableOpacity
                className="absolute -right-2 -bottom-2 bg-white p-2 rounded-full shadow-lg"
                onPress={() =>
                  Alert.alert(
                    "Coming Soon",
                    "Image upload feature coming soon!"
                  )
                }
              >
                <Ionicons name="camera" size={20} color="#3B82F6" />
              </TouchableOpacity>
            </View>
            <Text className="text-sm text-gray-500 mt-2">
              Tap to change cover
            </Text>
          </View>

          {/* Form Fields */}
          <CustomInput
            label="Book Title"
            value={formData.title}
            onChangeText={(text: string) =>
              setFormData({ ...formData, title: text })
            }
            placeholder="Enter book title"
            required
          />

          <CustomInput
            label="Author"
            value={formData.author}
            onChangeText={(text: string) =>
              setFormData({ ...formData, author: text })
            }
            placeholder="Enter author name"
            required
          />

          {/* Genre Selector */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-2">
              Genre
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row"
            >
              {genres.map((genre) => (
                <TouchableOpacity
                  key={genre}
                  onPress={() => setFormData({ ...formData, genre })}
                  className={`mr-2 px-4 py-2 rounded-full border ${
                    formData.genre === genre
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Text
                    className={`${
                      formData.genre === genre ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {genre}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <CustomInput
            label="Description"
            value={formData.description}
            onChangeText={(text: string) =>
              setFormData({ ...formData, description: text })
            }
            placeholder="Enter book description"
            multiline
          />

          <CustomInput
            label="ISBN"
            value={formData.isbn}
            onChangeText={(text: string) =>
              setFormData({ ...formData, isbn: text })
            }
            placeholder="Enter ISBN number"
          />

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-blue-500 py-4 rounded-xl mt-6 shadow-sm"
          >
            <Text className="text-white text-center font-semibold">
              Add to Library
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
