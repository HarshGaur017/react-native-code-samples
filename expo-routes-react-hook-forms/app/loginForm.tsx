import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native'
import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import FormInputController from './controller/FormInputController'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    username: yup.string().required("Username is required").min(3, "Username must be atleast 3 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be atleast 6 Characters"),
    contact: yup.string().required("Contact no. is required").matches(phoneRegExp, 'Please enter a valid contact no.')
})

export default function loginForm() {

    const {
        control, 
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const submit = (data) => {
        console.log(data)
        Alert.alert(JSON.stringify(data))
    }

  return (
   <View style={styles.container}>
          <Text>React Hook Example in React-Native</Text>
    
          <FormInputController control={control} name={"username"} placeholder={"User Name"} errors={errors}/>

          <FormInputController control={control} name={"email"} placeholder={"Email"} errors={errors}/>

          <FormInputController control={control} name={"contact"} placeholder={"Contact No"} errors={errors} keyboardType='numeric'/>

          <FormInputController control={control} name={"password"} placeholder={"Password"} props={{secureTextEntry: true}} errors={errors}/>

    
    <Button title='submit' onPress={handleSubmit(submit)} />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: '90%',
        marginTop: 18,
        color: 'grey'
    },

    textError: {
        color: 'red',
    },

})