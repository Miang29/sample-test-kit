import React from "react";
import { View, StyleSheet,  } from "react-native";
import RegisterForm from "../components/REGISTER/RegisterForm";
import Header from "../components/REGISTER/Header";

export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
        <Header/>
         <RegisterForm/>
      </View>
   
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3BC4EC',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
})

