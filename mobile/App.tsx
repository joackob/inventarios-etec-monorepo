import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Theme from "./src/theme";
import { store } from "./src/store";
import { Provider } from "react-redux";
import Alert from "./src/inventario/contexts/alert/Alert";
import RootStackNavigator from "./src/navigator";

export default function App() {
  return (
    <Theme>
      <Provider store={store}>
        <NavigationContainer>
          <Alert>
            <RootStackNavigator />
          </Alert>
        </NavigationContainer>
      </Provider>
    </Theme>
  );
}
