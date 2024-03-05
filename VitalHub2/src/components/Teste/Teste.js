import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Container } from '../Container/Style';
import { Input } from '../Input/Style';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Container>
      <Input/>
    </Container>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '50%',
  },
});