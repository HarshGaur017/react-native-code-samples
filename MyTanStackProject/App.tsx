import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CustumQueryClientProvider from './src/QueryClientProvider';
import Home from './src/Home';

export default function App() {
  return (
   <CustumQueryClientProvider>
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
   </CustumQueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
