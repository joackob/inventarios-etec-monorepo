import React from "react";
import { SafeAreaView,  } from "react-native-safe-area-context";
import tw from "twrnc";
import { ScrollView, View } from "react-native";
import { Text } from "@rneui/base";
import {Button} from "@rneui/base"
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex h-full items-center`}>
      <ScrollView>
        <View style={tw`  m-10`}>
          <TextInput
              placeholder="Usuario" 
              editable
              multiline
              style={styles.input}/>
          <TextInput
              placeholder="Contraseña" 
              editable
              multiline
              style={styles.input}/>
     
            <TouchableOpacity>
          
                  <Text>Enviar</Text>
          
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
