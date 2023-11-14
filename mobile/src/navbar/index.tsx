import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Espacios" component={EspaciosMock} />
      <Tab.Screen name="Buscador" component={BuscadorMock} />
      <Tab.Screen name="Historial" component={HistorialMock} />
      <Tab.Screen name="Agregador" component={AgregadorMock} />
      <Tab.Screen name="Configuracion" component={ConfiguracionMock} />
    </Tab.Navigator>
  );
};

const EspaciosMock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Espacios!</Text>
    </View>
  );
};

const BuscadorMock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Buscador!</Text>
    </View>
  );
};

const HistorialMock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Historial!</Text>
    </View>
  );
};

const AgregadorMock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Agregar!</Text>
    </View>
  );
};

const ConfiguracionMock = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Configuracion!</Text>
    </View>
  );
};

export default NavBar;
