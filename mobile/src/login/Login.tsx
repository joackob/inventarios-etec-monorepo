import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { ScrollView, Touchable, TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator";
import { Input } from "@rneui/base";
import { Text, useTheme } from "@rneui/themed";

type AddItemNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  "ListItemsScreen"
>;

const Login = () => {
  const navigation = useNavigation<AddItemNavigatorProps>();
  const { theme } = useTheme();
  return (
    <SafeAreaView style={tw`flex h-full`}>
      <ScrollView>
        <View style={tw`  m-10`}>
          <Input placeholder="Usuario" editable multiline />
          <Input placeholder="Contraseña" editable multiline style={tw`w-64`} />
          <Button
            onPress={() => {
              navigation.navigate("ListItemsScreen");
            }}
            buttonStyle={{ backgroundColor: theme.colors.primary }}
          >
            Enviar
          </Button>

          <TouchableOpacity style={tw`mt-10  text-center `}>
            <Text style={tw`text-center text-blue-500 text-lg`}>
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
