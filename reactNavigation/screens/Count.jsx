import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Count = ({ navigation }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Button onPress={() => setCount((c) => c+1)} title='Update Count' /> 
        ),
        });
    }, [navigation, setCount]);
  return <Text>Count: {count}</Text>;
}

const Stack = createNativeStackNavigator();

export default Count

const styles = StyleSheet.create({})