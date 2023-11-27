import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { TouchableOpacity, View } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator";
import { Input } from "@rneui/base";
import { Text, useTheme } from "@rneui/themed";

type AddItemNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  "NavBarScreen"
>;

const Login = () => {
  const navigation = useNavigation<AddItemNavigatorProps>();
  const { theme } = useTheme();
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`mx-10 h-full flex flex-col justify-center`}>
        <Input placeholder="Usuario" editable />
        <Input placeholder="Contraseña" editable style={tw`w-64`} />
        <Button
          onPress={() => {
            navigation.navigate("NavBarScreen");
          }}
          buttonStyle={{ backgroundColor: theme.colors.primary }}
        >
          Iniciar sesión
        </Button>
        <Button type="clear" titleStyle={{ color: theme.colors.primary }}>
          Crear cuenta
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
