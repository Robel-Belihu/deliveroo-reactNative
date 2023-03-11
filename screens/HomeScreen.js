import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.AndroidSafeArea} className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg",
          }}
          className="h-9 w-9 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-s-400 text-xs">Deliver Now</Text>
          <Text className="text-red font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={20} color="#00CCBB" />
      </View>
      {/* Search bar */}
      <View className="flex-row item-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
          <MagnifyingGlassIcon color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      {/* body */}

      <ScrollView>
        {/* Categories */}

        <Categories />

        {/* featured offers */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="12345"
          title="Tasty discounts"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234567"
          title="Offers near you"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
