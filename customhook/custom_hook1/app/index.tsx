import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View,StyleSheet, Button } from "react-native";
import useOnlineStatus from "./useOnlineStatus";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import useFetch from "./useFetch";
const API_URL = "https://dummyjson.com/products"

export default function Index() {
  const isOnline = useOnlineStatus();
  const { data, loading } = useFetch(API_URL);
  const [value,setValue] = useState("")
  
  const Search =(text:string) =>{
    setValue(text)
      console.log(value)
     
     
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput 
      style ={styles.textInput} 
      placeholder="Search "
      value= {value}
      onChangeText={(text) => Search(text)}></TextInput>
      <Button title="Debounce Search" color={"blue"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput :{
    borderWidth: 1, 
    paddingHorizontal: 30 ,
    paddingVertical:10,
    borderRadius :10,
  },
  text :{
    marginTop :20
  },
  button :{
    marginTop :20,
  }
});
