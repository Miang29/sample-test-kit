import React from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import {Button} from 'react-native-elements';



export default function RegisterForm() {
  const [emailtext, setEmailText] = React.useState<string>("");
    const [fullnametext, setFullnameText] = React.useState<string>("");
    const [Password, setPasswordText] = React.useState<string>("");
    const [ConfirmPassword, setConfirmpasswordText] = React.useState<string>("");
    
    const handleSignUp = () => {
          if (emailtext === "" || fullnametext === "") {
          Alert.alert("Error Sign Up", "Please type all needed fields");
          } else if (Password !== ConfirmPassword) 
            alert("Passwords don't match")
            else {
              Alert.alert("Signed Up", "Signed Up Successfully")
            }
        }
    
  return (
        
  <View style= {styles.regform}>

         <Text  style= {styles.header}>Registration</Text>

         <TextInput style={styles.TextInput} 
         placeholder= "Fullname"
         underlineColorAndroid={'transparent'}
        onChangeText={setFullnameText}
        value={fullnametext}
         />

         
        <TextInput style={styles.TextInput} 
         placeholder= "Email" 
         underlineColorAndroid={'transparent'}
         onChangeText={setEmailText}
        value={emailtext}
        keyboardType={"email-address"}
         />

         
        <TextInput style={styles.TextInput} 
         placeholder= "Password"
         underlineColorAndroid={'transparent'}
         secureTextEntry={true}
         onChangeText={setPasswordText}
        value={Password}
         />

<TextInput style={styles.TextInput} 
         placeholder= "Confirm Password"
         underlineColorAndroid={'transparent'}
         secureTextEntry={true}
         onChangeText={setConfirmpasswordText}
        value={ConfirmPassword}
         />

<Button
        title={"Sign Up"}
        titleStyle={{
          color: '#2E2321',
          fontWeight:'bold',
          fontSize:20
        }}
        buttonStyle={{
          alignSelf: 'stretch',
          alignItems:'center',
          padding:20,
          backgroundColor: '#C4A29C',
          marginTop:30,
          borderRadius: 15
        }}
        type={"solid"}
        onPress= {handleSignUp}
      />
     </View>
  )}
  const styles = StyleSheet.create({
    regform: {
  alignSelf: 'stretch',

    },
    header:{
     fontSize: 28,
     color:'#E7DAD8',
     paddingBottom: 10,
     marginBottom:40,
     borderBottomColor: '#199187',
     borderBottomWidth: 1,
     alignSelf:'stretch'
    },
    TextInput:{
      alignSelf: 'stretch',
      height:40,
      marginBottom:30,
      color: '#E7DAD8',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth: 1,   
     
    }
  })
