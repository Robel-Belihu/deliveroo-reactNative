import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow(props) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{props.title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-sm text-gray-500 px-4">{props.description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id={123}
          imgUrl="https://www.bowrivermeatmarket.ca/wp-content/uploads/2019/11/buy-meat-online-1024x683.jpg"
          title="Yo! Stake."
          rating={5.0}
          genre="Texas Cuisine"
          address="Houston Tx"
          short_description="Rich Marinated stake"
          dishes={[]}
          long={
            "It has been marinated for 7 days before it was brought over here"
          }
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://www.bowrivermeatmarket.ca/wp-content/uploads/2019/11/buy-meat-online-1024x683.jpg"
          title="Yo! Stake."
          rating={5.0}
          genre="Texas Cuisine"
          address="Houston Tx"
          short_description="Rich Marinated stake"
          dishes={[]}
          long={
            "It has been marinated for 7 days before it was brought over here"
          }
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://www.bowrivermeatmarket.ca/wp-content/uploads/2019/11/buy-meat-online-1024x683.jpg"
          title="Yo! Stake."
          rating={5.0}
          genre="Texas Cuisine"
          address="Houston Tx"
          short_description="Rich Marinated stake"
          dishes={[]}
          long={
            "It has been marinated for 7 days before it was brought over here"
          }
          lat={20}
        />
      </ScrollView>
    </View>
  );
}
