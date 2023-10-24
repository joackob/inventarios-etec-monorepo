import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { ScrollView, View } from "react-native";
import { Text } from "@rneui/base";
import { Button } from "@rneui/base";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator";
import { Input } from "@rneui/base";

type AddItemNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  "ListItemsScreen"
>;

const Login = () => {
  const navigation = useNavigation<AddItemNavigatorProps>();
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
          >
            Enviar
          </Button>
          <Button style={tw`mt-5`}>crear cuenta</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
