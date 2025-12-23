import { useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View,StyleSheet, Button, FlatList } from "react-native";
import useOnlineStatus from "./useOnlineStatus";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import useFetch from "./useFetch";
import useDebounce from "./useDebounce";
const API_URL = "https://dummyjson.com/products"

export default function Index() {
  const isOnline = useOnlineStatus();
  const { data, loading } = useFetch(API_URL);
  const [value,setValue] = useState("")
  
  const debouncedText  = useDebounce(value, 300);
  const products : [any] = data?.products || [];

  const filteredProducts = useMemo(() => {
    if (!debouncedText) return products;
    return products.filter((item: { title: string }) =>
      item.title
        .toLowerCase()
        .includes(debouncedText.toLowerCase())
    );
  }, [products, debouncedText]);


  return (
    <View style={{ padding: 16 }}>
    <TextInput
      placeholder="Search products..."
      value={value}
      onChangeText={setValue}
      style={{ borderWidth: 1, padding: 8 }}
    />

    <FlatList
      data={filteredProducts}
      keyExtractor={(item: { id: number }) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={{ padding: 8 }}>
          {item.title}
        </Text>
      )}
    />
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
