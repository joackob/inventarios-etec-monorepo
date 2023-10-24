import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionItemScreen from "../invetory/screens/description-item/DescriptionItemScreen";
import ListItemsScreen from "../invetory/screens/list-items/ListItemsScreen";
import AddItemScreen from "../invetory/screens/add-item/AddItemScreen";
import { ItemInventory } from "../invetory/models";
import Login from "../login/Login";

export type RootStackParamList = {
  DescriptionItemScreen: ItemInventory;
  ListItemsScreen: undefined;
  AddItemScreen: undefined;
  LoginScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: true }}>
      <RootStack.Group>
        <RootStack.Screen name="LoginScreen" component={Login} />
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
