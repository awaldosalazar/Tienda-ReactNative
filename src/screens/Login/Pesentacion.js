import React from 'react';
import { View, Button, Text, Animated, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width: WIDTH } = Dimensions.get('window');

const Presentacion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`Bienvenido al Dashboard de GLAMUR`}</Text>
      <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Login')}>
          <Icon
            name="user-check"
            size={30}
            color="rgba(255,255,255,0.7)"
            style={styles.inputicon}
          />
          <Text style={styles.text}>Entrear</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.textregistro}>Registrarse</Text>
          <Icon
            name="user-plus"
            size={30}
            color="rgba(0, 172, 255,0.7)"
            style={styles.inputicon}
          />
        </TouchableOpacity>
    </View>
  );
};

export default Presentacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    textAlign: 'center',
    fontFamily: 'coolvetica',
    fontSize: 50,
    color:'#00ACFF',
  },
  btn:{
  width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    borderWidth:2,
    borderColor:'#00ACFF',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginTop: 20,
  },
  textregistro: {
    color: 'rgba(0, 172, 255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  btn2:{
  width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#00ACFF',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputicon: {
    position: 'absolute',
    top: 9,
    left: 37,
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});
