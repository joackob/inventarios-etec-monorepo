import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionItemScreen from "../itemsinventory/descriptionitem/DescriptionItemScreen";
import ListItemsScreen from "../itemsinventory/listitems/ListItemsScreen";
import AddItemScreen from "../itemsinventory/additem/AddItemScreen";
import { ItemInventory } from "../../src/iteminventory/interface";
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
