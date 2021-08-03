import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button, TextInput, TextInputMask } from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('window');

const Registro = ({ navigation }) => {
  const [validacion, setValidacion] = useState(false);
  const [registro, setRegistro] = useState({
    nameperson: '',
    apellidop: '',
    apellidom: '',
    correo: '',
    contrasena: '',
    telefono: '',
    namestore: '',
  });

  const mandarRegistro = async () => {
    setValidacion(true);

    //Expresion para validar correo
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      registro.nameperson != '' &&
      registro.namestore != '' &&
      registro.apellidom != '' &&
      registro.apellidop != '' &&
      registro.correo != '' &&
      registro.telefono != '' &&
      registro.contrasena != ''
    ) {
      if (reg.test(registro.correo) === true) {
        let formData = new FormData();
        formData.append('nombrep', registro.nameperson);
        formData.append('apellidop', registro.apellidop);
        formData.append('apellidom', registro.apellidom);
        formData.append('correo', registro.correo);
        formData.append('telefono', registro.telefono);
        formData.append('nombren', registro.namestore);
        formData.append('contrasena', registro.contrasena);
        let response = await fetch(
          'http://glamourapp.atwebpages.com/store/scripts/LoadUser.php',
          {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'content-type': 'multipart/form-data',
            },
          }
        );

        if (response.ok) {
          let resultado = await response.text();
          let resultadofinal = resultado.split(',');
          //console.log(resultado);
          if(resultadofinal[0] === '1'){
            Alert.alert('[*GRACIAS*]', 'Su cuenta se ha registrado exitosamente, gracias por su preferencia');
            setValidacion(false);
            navigation.navigate('Login');
          }else{
            Alert.alert('[*Problemas con el registro*]', 'Vuelve a intentarlo mas tarde');
          }
        } else {
          Alert.alert('[*Problemas con el servidor*]', 'Contacta a soporte');
        }
      } else {
        Alert.alert(
          '[*Campo incorrecto*]',
          'Verifica que el correo no tenga espacios al final o este bien escrito'
        );
      }
    } else {
      Alert.alert(
        '[*Campos incompleto*]',
        'Verifica que todos los campos, recuerda que son obligatorios'
      );
    }

    setValidacion(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Registro</Text>
        <TextInput
          label="Nombre Personal"
          placeholder="Luis"
          maxLength={15}
          value={registro.nameperson}
          onChangeText={(text) =>
            setRegistro({ ...registro, nameperson: text })
          }
          mode="outlined"
          style={styles.input}
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
          label="Apellido paterno"
          placeholder="Lopez"
          maxLength={15}
          value={registro.apellidop}
          onChangeText={(text) => setRegistro({ ...registro, apellidop: text })}
          mode="outlined"
          style={styles.input}
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
          label="Apellido materno"
          placeholder="Gimenez"
          maxLength={15}
          value={registro.apellidom}
          onChangeText={(text) => setRegistro({ ...registro, apellidom: text })}
          style={styles.input}
          mode="outlined"
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
          label="Numero de telefono"
          placeholder="3333333333"
          keyboardType="phone-pad"
          maxLength={10}
          value={registro.telefono}
          onChangeText={(text) => setRegistro({ ...registro, telefono: text })}
          mode="outlined"
          style={styles.input}
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
          label="Correo"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          maxLength={40}
          value={registro.correo}
          onChangeText={(text) => setRegistro({ ...registro, correo: text })}
          mode="outlined"
          style={styles.input}
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
          label="Contraseña"
          placeholder="Campo secreto"
          maxLength={30}
          secureTextEntry
          value={registro.contrasena}
          onChangeText={(text) =>
            setRegistro({ ...registro, contrasena: text })
          }
          mode="outlined"
          style={styles.input}
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
          label="Nombre de la tienda"
          placeholder="Fashion Store"
          maxLength={40}
          value={registro.namestore}
          onChangeText={(text) => setRegistro({ ...registro, namestore: text })}
          mode="outlined"
          style={styles.input}
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
          icon="account-plus"
          mode="Outlined"
          loading={validacion}
          onPress={mandarRegistro}>
          Registrarme
        </Button>
      </ScrollView>
    </View>
  );
};

export default Registro;

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
    fontFamily: 'sketchup',
    fontSize: 50,
    color: '#00ACFF',
  },
  input: {
    margin: 5,
    width: WIDTH - 55,
    fontWeight: 'bold',
    backgroundColor: '#F5FCFF',
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
