import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Count from './Count';



const Stack = createNativeStackNavigator();

const Details = ({route, navigation}) => {
    const [postText, setPostText] = React.useState('');
  return (
    <>
    <TextInput 
    multiline 
    placeholder="What's on your mind?" 
    style={styles.textInput} 
    value={postText} 
    onChangeText={setPostText} />

    <Button title='Done' 
    onPress={() => {
        navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
        });
    }}
    />

    <Button title='Next' 
    onPress={() => {
        navigation.navigate({
            name: 'Count',
        });
    }}
    />
    </>
  )
}

export default Details

const styles = StyleSheet.create({
    textInput: {
        height: 200,
        padding: 10,
        backgroundColor: 'white',
    }
})