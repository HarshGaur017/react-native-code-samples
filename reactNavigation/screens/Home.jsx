import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();




const Home = ({navigation, route}) => {
    React.useEffect(() => {
        if (route.params?.post) {
            
        }
    }, [route.params?.post]);

    const handleOpenDrawer = () => {
      navigation.navigate('Drawer'); 
    };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title='Create Post' 
      onPress={() => 
        navigation.navigate('Details')}/>
        <Text style={{margin: 10}}>Post: {route.params?.post}</Text>

        <Button title='Drawer' onPress={handleOpenDrawer} />
    </View>

    
    
  );
}

export default Home

const styles = StyleSheet.create({})