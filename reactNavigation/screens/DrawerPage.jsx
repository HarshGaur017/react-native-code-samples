import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";


function Feed() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name='Feed' component={Feed} />
        <Drawer.Screen name='Article' component={Article} />
        </Drawer.Navigator>
    );
  }


export default MyDrawer;

const styles = StyleSheet.create({})