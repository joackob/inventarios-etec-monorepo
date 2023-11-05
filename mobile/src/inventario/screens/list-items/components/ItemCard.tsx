import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, useTheme, Badge, Divider } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../navigator/";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ItemInventory } from "../../../models";

type ItemCardNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "DescriptionItemScreen"
>;

const ItemCard = ({ item }: { item: ItemInventory }) => {
  const { theme } = useTheme();
  const nav = useNavigation<ItemCardNavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("DescriptionItemScreen", item)}
    >
      <View style={tw`mt-4`}>
        <View style={tw`bg-[${theme.colors.white}] rounded-xl `}>
          <View style={tw`flex flex-col p-4`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <View>
                <Text
                  style={tw`font-bold mt-2 text-[${theme.colors.black}] text-2xl`}
                >
                  {item.nombre}
                </Text>
                <Text
                  style={tw`font-bold mt-2 text-[${theme.colors.grey0}] text-sm`}
                >
                  ID: {item.id}
                </Text>
              </View>
            </View>
            <Divider style={tw`my-2`} />
            <View>
              <Text
                numberOfLines={1}
                style={tw`font-bold text-[${theme.colors.black}]  `}
              >
                Marca: {item.marca}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
