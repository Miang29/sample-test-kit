import * as React from "react";
import { Fragment, useState } from "react";
import { View, StyleSheet, Text, ScrollView,Alert} from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { Formik } from 'formik';
import * as yup from "yup";
import ViewWithLoading from "../REGISTER/ViewWithLoading";


  export default function RegisterForm(): JSX.Element {

    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const loginSchema = yup.object({
      Firstname: yup.string().required('First name is required'),
      Lastname: yup.string().required('Last name is required'),
        email: yup.string().required('Email address is required')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
                'Invalid email address'),
        password: yup.string().required('Password is required'),
        confirmpassword: yup.string().required('Confirm password is required')
        
    });
      
  const [emailtext, setEmailText] = React.useState<string>("");
  const [firstnametext, setFirstnameText] = React.useState<string>("");
  const [Lastnametext, setLastnameText] = React.useState<string>("");
  const [Password, setPasswordText] = React.useState<string>("");
  const [ConfirmPassword, setConfirmpasswordText] = React.useState<string>("");
  
  const handleSignUp = () => {
        if (emailtext === "" || firstnametext === ""|| Lastnametext === "") {
        Alert.alert("Error Sign Up", "Please type all needed fields");
        } else if (Password !== ConfirmPassword) 
          alert("Passwords don't match")
          else {
            Alert.alert("Signed Up", "Signed Up Successfully")
          }
      }


    
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, [])


    return (
        <ViewWithLoading loading={loading} >
        
        <View style={{
            flex: 1,
        }}>

            <Formik
                initialValues={{
                    Firstname: '',
                    Lastname: '',
                    email: '',
                    password: '',
                    confirmpassword:''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
                validationSchema={loginSchema}
            >
                {({  errors, }) => {
              return (
                <Fragment>

                  <ScrollView>
                    <View style={{
                      paddingTop: 30,
                      paddingHorizontal: 20,
                      paddingBottom: 1
                    }}>
                      <TextInput
                        label="First Name"
                        onChangeText={setFirstnameText}
                        value={firstnametext}                
                        autoComplete={false}
                        mode={"outlined"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        autoFocus={true}
                        error={errors.Firstname ? true : false} />
                      {errors.Firstname &&
                        <Text>
                          {errors.Firstname}
                        </Text>}
                    </View>
                    <View style={{
                      paddingTop: 10,
                      paddingHorizontal: 15,
                      paddingBottom: 0
                    }}>

                      <TextInput
                        label="Last Name"
                        onChangeText={setLastnameText}
                        value={Lastnametext}                
                        autoComplete={false}
                        mode={"outlined"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        autoFocus={true}
                        error={errors.Lastname ? true : false} />
                      {errors.Lastname &&
                        <Text>
                          {errors.Lastname}
                        </Text>}
                    </View>
                    <View style={{
                      paddingTop: 10,
                      paddingHorizontal: 15,
                      paddingBottom: 0
                    }}>
                      <TextInput
                        label="Email"
                        onChangeText={setEmailText}
                        value={emailtext}
                        autoComplete={false}
                        keyboardType={"email-address"}
                        mode={"outlined"}
                        right={<TextInput.Icon
                          name={"email"}
                          color={"gray"} />}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        autoFocus={true}
                        error={errors.email ? true : false} />
                      {errors.email &&
                        <Text>
                          {errors.email}
                        </Text>}
                    </View>

                    <View style={{
                      paddingTop: 10,
                      paddingHorizontal: 15,
                      paddingBottom: 0
                    }}>
                      <TextInput
                        label="Create Password"
                        onChangeText={setPasswordText}
                        value={Password}
                        autoComplete={false}
                        mode={"outlined"}
                        right={<TextInput.Icon
                          name={visible ? "eye" : "eye-off"}
                          onPress={() => {
                            setVisible(!visible);
                          } }
                          color={"gray"} />}
                        secureTextEntry={!visible}
                        error={errors.password ? true : false} />
                      {errors.password &&
                        <Text>
                          {errors.password}
                        </Text>}
                    </View>

                    <View style={{
                      paddingTop: 10,
                      paddingHorizontal: 15,
                      paddingBottom: 0
                    }}>
                      <TextInput
                        label="Confirm Password"
                        onChangeText={setConfirmpasswordText}
                        value={ConfirmPassword}
                        autoComplete={false}
                        mode={"outlined"}
                        right={<TextInput.Icon
                          name={visible ? "eye" : "eye-off"}
                          onPress={() => {
                            setVisible(!visible);
                          } }
                          color={"gray"} />}
                        secureTextEntry={!visible}
                        error={errors.confirmpassword ? true : false} />
                      {errors.confirmpassword &&
                        <Text>
                          {errors.confirmpassword}
                        </Text>}
                    </View>

                    <View style={{
                      flex: 0,
                    }}>

                      <View style={{
                        paddingTop: 10,
                        paddingHorizontal: 15,
                        paddingBottom: 0
                      }}>
                        <Button
                          title="Sign Up"
                          buttonStyle={{
                            backgroundColor: '#2E9CBB',
                            paddingTop: 3,
                          }}
                          containerStyle={{
                            marginVertical: 10,
                          }}
                          onPress={handleSignUp}        
                          titleStyle={styles.textStyle} />

                        <Text style={{
                          color: 'black',
                          textAlign: 'center',
                          paddingHorizontal: 10,
                          paddingTop: 1
                        }}
                        >Already Signed Up? Login here</Text>


                      </View>
                    </View>
                  </ScrollView>

                </Fragment>

              );
            }}
                
            </Formik>

        </View>
        
        </ViewWithLoading>
    )
}
const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingTop: 10

  },
  input: {
    height:32,
    width: '90%',
    margin: 4,
    borderWidth: 1,
    padding: 3,
    backgroundColor: '#2E9CBB',
    borderRadius: 10,
   color: '#062C30'
  },
 
});

function setRegister(arg0: string): React.ReactNode {
  throw new Error("Function not implemented.");
}