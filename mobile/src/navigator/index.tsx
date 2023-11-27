import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionItemScreen from "../inventario/screens/description-item/DescriptionItemScreen";
import ListItemsScreen from "../inventario/screens/list-items/ListItemsScreen";
import AddItemScreen from "../inventario/screens/add-item/AddItemScreen";
import { ItemInventory } from "../inventario/models";
import Login from "../login/Login";
import NavBarScreen from "../navbar";

export type RootStackParamList = {
  DescriptionItemScreen: ItemInventory;
  ListItemsScreen: undefined;
  AddItemScreen: undefined;
  LoginScreen: undefined;
  NavBarScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: true }}>
      <RootStack.Group>
        <RootStack.Screen
          name="LoginScreen"
          component={Login}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name="NavBarScreen"
          component={NavBarScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="ListItemsScreen" component={ListItemsScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="AddItemScreen" component={AddItemScreen} />
        <RootStack.Screen
          name="DescriptionItemScreen"
          component={DescriptionItemScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
