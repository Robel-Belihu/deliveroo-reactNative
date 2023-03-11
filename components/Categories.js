import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-1"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-2"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-3"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-1"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-2"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-3"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-1"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-2"
      />
      <CategoryCard
        imgUrl="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg"
        title="testing-3"
      />
    </ScrollView>
  );
}
