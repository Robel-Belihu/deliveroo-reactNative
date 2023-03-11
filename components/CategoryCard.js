import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryCard(props) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: props.imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
