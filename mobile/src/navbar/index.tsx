import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Icon } from "@rneui/themed";
import ListEntornosScreen from "../entornos/screens/list-entornos/ListEntornosScreen";
const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Entornos"
        component={ListEntornosScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="home" />,
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={BuscadorMock}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="search" />,
        }}
      />
      <Tab.Screen
        name="Historial"
        component={HistorialMock}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="history" />,
        }}
      />
      <Tab.Screen
        name="Agregador"
        component={AgregadorMock}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="add-circle" />,
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={ConfiguracionMock}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="settings" />,
        }}
      />
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
