import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {
  return (

   <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
     <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.titleText}>Learn more about our app!</Text>
        <Text style={styles.contentText}>Our app is designed to make your life easier. Learn more about our features and how we can help you.</Text>
      </View>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
  },
  header: {
    height: 50,
    backgroundColor: '#487EB0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  contentText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
});
