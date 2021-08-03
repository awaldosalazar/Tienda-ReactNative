import React from 'react';
import { View, Button, Text, Animated,StyleSheet } from 'react-native';

const Registro = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={{marginTop:50}}>Bandeja de entrada</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Regrsar al inicio"
      />
    </View>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor: '#F5FCFF',
  },
});