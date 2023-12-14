import { ScrollView, View, Text } from "react-native";
import { SearchBar, useTheme } from "@rneui/themed";
import tw from "twrnc";
import { useState } from "react";

const Buscador = () => {
  const { theme } = useTheme();
  const [busqueda, setBusqueda] = useState("");

  return (
    <ScrollView>
      <View style={tw`m-4`}>
        <SearchBar
          placeholder="Buscar"
          containerStyle={{
            backgroundColor: theme.colors.white,
            borderColor: theme.colors.white,
            borderRadius: 30,
          }}
          inputContainerStyle={{ backgroundColor: theme.colors.white }}
          inputStyle={{ color: theme.colors.black }}
          onChangeText={(text: string) => setBusqueda(text)}
          onClear={() => setBusqueda("")}
          value={busqueda}
        />
      </View>
      <View style={tw`m-4`}>
        <Text>{busqueda}</Text>
      </View>
    </ScrollView>
  );
};

export default Buscador;
