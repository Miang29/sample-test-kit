import React from "react";
import {StyleSheet,View,Text, TextInput,TouchableOpacity} from  "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Login}> Login to my App</Text>
      <TextInput style={styles.inputText}
        placeholder= "Username"
        />
        <TextInput style={styles.inputText}
        placeholder= "Password"
        secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity 
          style={styles.btnLogin}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.btnSignUp}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
    const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#402F2C',
  justifyContent: 'center',
  alignItems: 'center'
},
Login: {
 fontSize: 30,
  textAlign: 'center',
  margin: 18,
  fontFamily: 'poppins-bold',
  color: 'white'
},
inputText:{
  width: "90%",
  backgroundColor:'white',
  padding: 15,
  marginBottom:10
},
btnContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%'
},
btnLogin: {
  backgroundColor: '#C4A29C',
  padding: 15,
  width: '45%',
},
btnSignUp: {
  backgroundColor: '#C4A29C',
  padding: 15,
  width: '45%',
},
btnText: {
  fontSize: 16,
  textAlign: 'center'
}
});
  
