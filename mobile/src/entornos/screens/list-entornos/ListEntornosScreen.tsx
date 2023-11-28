import { ScrollView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setup } from "../../thunks";

const ListItemsScreen = () => {
  const { theme } = useTheme();
  const { values: entornos } = useAppSelector((state) => state.entornos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setup());
  }, []);

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView style={tw`h-full`}>
        <View style={tw`mx-4`}>
          {entornos.map((entorno) => {
            return (
              <View key={entorno.id}>
                <View style={tw`flex flex-row`}>
                  <Icon
                    name="rowing"
                    iconProps={{ size: 64, name: "rowing" }}
                  />
                  <View style={tw`flex flex-col`}>
                    <Text>{entorno.nombre}</Text>
                    <Text>{entorno.ubicacion}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListItemsScreen;
