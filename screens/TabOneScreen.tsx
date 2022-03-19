import React from "react";
import { View, StyleSheet,  } from "react-native";
import RegisterForm from "../components/REGISTER/RegisterForm";


export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
        <RegisterForm/>
      </View>
   
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#402F2C',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60
  }
})