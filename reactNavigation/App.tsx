import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Count from "./screens/Count";
import MyDrawer from "./screens/DrawerPage";

function LogoTitle(){
  return(
    <Image style={{width: 50, height: 50}}
    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
        headerTitle: (props) => <LogoTitle {...props} />, 
        headerTitleAlign: 'center',
        headerRight: () => (
          <Button onPress={() => alert('this is a button')}
          title="Info"
          color="#B83227" />
        ),
      
      }}
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        options={ ({navigation, route}) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        }) }
        />
        <Stack.Screen 
        name="Count"
        component={Count}
        options={ ({navigation, route}) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <Button title="Update Count" />,
        }) }
        />
        <Stack.Screen 
        name="Drawer"
        component={MyDrawer}
        options={ ({navigation, route}) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        }) }
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
  
}

export default App;