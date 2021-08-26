import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";

//install: npm install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";


const Learning = () => {
  const [isLoading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async () => {
    try {
      const data = {
        "email": email,
        "password": password
      }
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@storage_key', jsonValue);
      console.log("ok");
    }catch(error){
      console.log(error);
    }
  }

  const getData = async()=> {
    try{
      const value = await AsyncStorage.getItem('@storage_key');
      if(value !== null){
        setUserData(value);
        console.log("get ok");
        console.log(value);
      }else{
        console.log("kosong");
      }
    }catch(error){
      console.log(error);
    }
  }

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const getLoginUser = async() => {
      fetch('https://mustseeum.com/kampus_merdeka/API/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: formData
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <View>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder={"input email"}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder={"input password"}
      />
      <TouchableOpacity
        onPress={getLoginUser}>
        <Text>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={storeData}>
        <Text>Save JSON</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={getData}>
        <Text>Get JSON</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Learning;
