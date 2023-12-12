import 
{ SafeAreaView }
 from "react-native-safe-area-context";
import { Input } from "@rneui/base";
import { View, ScrollView } from "react-native";
import { SearchBar } from "react-native-screens";
import { ItemCard } from "../inventario/screens/list-items/components";

const Login = () =>{
return(
   <SafeAreaView>
      <SearchBar
      placeholder="Buscar"
      />
  
   </SafeAreaView>
 )
}

export default Login;