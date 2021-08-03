import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

const { width: WIDTH } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [validacion, setValidacion] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const validaCuenta = async () => {
    setValidacion(true);
    if (state.email != '' && state.password != '') {
      let formData = new FormData();
      formData.append('correo', state.email);
      formData.append('contrasena', state.password);

      let response = await fetch(
        'http://glamourapp.atwebpages.com/store/scripts/LoginUser.php',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'content-type': 'multipart/form-data',
          },
        }
      );
      /*.then(response => response.json())
      .then(data => setCuenta(data));*/

      let resultado = await response.json();
      //console.log(resultado);
      if (resultado == '1001') {
        Alert.alert('[*ATENCIÓN*]', 'SU CORREO NO SE ENCUENTRA REGISTRADO');
      } else if (resultado == '1002') {
        Alert.alert('[*ATENCIÓN*]', 'SU CONTRASEÑA NO COINCIDE');
      } else {
        try {
          await AsyncStorage.setItem('@store_key4', resultado[0].id_negocio);
          navigation.navigate('Home');
        } catch (e) {
          // saving error
        }
      }
    } else {
      Alert.alert('[*Campos obligatorios*]', 'ingrese sus credenciales');
    }
    setValidacion(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>
      <TextInput
        isFocused={false}
        mode="outlined"
        style={styles.input}
        label="Email"
        value={state.email}
        onChangeText={(text) => setState({ ...state, email: text })}
        theme={{
          colors: {
            placeholder: '#00ACFF',
            text: 'black',
            primary: '#00EAFF',
            backgroundColor: 'transparent',
          },
        }}
      />
      <TextInput
        isFocused={false}
        mode="outlined"
        style={styles.input}
        label="Contraseña"
        value={state.password}
        onChangeText={(text) => setState({ ...state, password: text })}
        secureTextEntry
        theme={{
          colors: {
            placeholder: '#00ACFF',
            text: 'black',
            primary: '#00EAFF',
            backgroundColor: 'transparent',
          },
        }}
      />
      <Button
        theme={{
          colors: {
            placeholder: 'black',
            text: 'black',
            primary: 'rgba(0, 172, 255,0.7)',
            backgroundColor: 'black',
          },
        }}
        disabled={validacion}
        style={styles.btn}
        icon="account-key"
        mode="Outlined"
        loading={validacion}
        onPress={validaCuenta}>
        Validar
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    margin: 10,
    width: WIDTH - 55,
    fontWeight: 'bold',
    backgroundColor: '#F5FCFF',
  },
  label: {
    textAlign: 'center',
    fontFamily: 'sketchup',
    fontSize: 50,
    color: '#00ACFF',
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#00ACFF',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    fontFamily: 'coolvetica',
    marginTop: 20,
  },
});
