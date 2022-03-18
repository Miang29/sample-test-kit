import * as React from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { Button } from 'react-native-elements';


export default function LoginForm()  {
  const [emailtext, setEmailText] = React.useState<string>("");
  const [password, setPasswordText] = React.useState<string>("");
  const handleLogin = () => {
      const EMAIL_ADD = "mendenilla@gmail.com";
      const PASSWORD = "123456789";

      if (emailtext === EMAIL_ADD && password === PASSWORD) {
        Alert.alert("Login", "Login Successfully");
      } else {
        Alert.alert("Error Login", "Invalid Username and Password");
      }
  }
    return(
        <View style={{
            flex: 0
          }}>
          <View style={{
            flex: 0,
            marginBottom: 10
          }}>
          <Text style={styles.textstyle}>
            Email
          </Text>
          <TextInput 
            style={styles.input}
            onChangeText={setEmailText}
            value={emailtext}
            keyboardType={"email-address"}
            placeholder={"your email"}
          />
         
        </View>
        <View style={{
            flex: 0
          }}>
          <View style={{
            flex: 0,
            marginBottom: 10
          }}>
        <Text style={styles.textstyle}>
            Password
        </Text>
        <TextInput 
            style={styles.input}
            onChangeText={setPasswordText}
            value={password}
            placeholder={"your password"}
            secureTextEntry={true}
          />
        
          </View>
        <View style={{
            flex:0
          }}>
            <View style={{
            flex: 0,
          }}>
          <Button
            title={"Login"}
            titleStyle={{
              fontFamily:'poppins-bold',
              fontSize : 20,
              color: 'black',
             
            }}
            buttonStyle={{
              backgroundColor: '#C4A29C',
              padding: 5
            }}
            type={"solid"}
            onPress= {handleLogin}
          />
        </View>
        </View>
        </View>
        </View>   
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textstyle:{
      fontFamily: 'poppins-bold',
      fontSize: 13
    },
    input: {
      height: 50,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
    }
  })
