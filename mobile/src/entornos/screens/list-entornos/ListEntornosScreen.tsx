import { ScrollView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@rneui/themed";
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
    <SafeAreaView style={tw`h-full bg-[${theme.colors.white}]`}>
      <ScrollView style={tw`h-full bg-[${theme.colors.white}]`}>
        <View style={tw`mx-4`}>
          {entornos.map((entorno) => {
            return (
              <View
                key={entorno.id}
                style={tw`mt-4 pb-4 border-b-[.5px] border-[${theme.colors.primary}]`}
              >
                <View style={tw`flex flex-row`}>
                  <View
                    style={tw`rounded-full w-16 h-16 bg-[${theme.colors.primary}] flex justify-center items-center mr-4`}
                  >
                    <Text
                      style={tw`text-[${theme.colors.white}] font-bold text-lg`}
                    >
                      {entorno.nombre.slice(-3)}
                    </Text>
                  </View>
                  <View style={tw`flex flex-col justify-center`}>
                    <Text style={tw`font-bold text-lg`}>{entorno.nombre}</Text>
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
