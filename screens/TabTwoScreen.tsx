import React from "react";
import { View, Dimensions, StyleSheet} from "react-native";
import Header from "../components/LOGIN/Header";
import LoginForm from "../components/LOGIN/LoginForm";
import Footer from "../components/LOGIN/Footer";

export default function TabTwoScreen() {
  
  return (
    <View style={styles.container}>
      <View style={{
        flex : 0,
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
      }}>
        <Header />
        <LoginForm />
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#402F2C',
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