import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Image, Input, Icon } from 'react-native-elements';
import {} from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('window');

const Pefil = ({ route, navigation }) => {
  //const {item}= route.params;
  const [status,setStatus] = useState(false);
  const [edit,setEdit] = useState(true);
  useEffect(() => {
    /*console.log(typeof(item));
    console.log(item[0].nombrep);*/
    setStatus(true);
  });

  return status ? (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/50/c6/62/50c662ef92cfb9b3ae09697c3eacd8f8.jpg',
        }}
        PlaceholderContent={<ActivityIndicator color="#00ACFF" />}
        style={styles.logoStore}
      />
      <Text style={styles.titulo}>ID NEGOCIO</Text>
      <Input
        label="Nombre de la tienda"
        placeholder="Fashion"
        disabled={edit}
        value='hola'
        disabledInputStyle={styles.editinput}
        labelStyle={styles.labelinput}
        inputStyle={styles.inputstile}
        style={styles.inputs}
        leftIcon={<Icon type='font-awesome-5' name="store" size={24} color="#5DADE2" />}
      />

      <Input
        label='Slogan de la marca'
        placeholder="Entre mas debes mas tienes"
        labelStyle={styles.labelinput}
        inputStyle={styles.inputstile}
        style={styles.inputs}
        multiline
        leftIcon={<Icon type='font-awesome-5' name="star-half-alt" size={24} color="#5DADE2" />}
      />

       <Input
        label='Telefono'
        placeholder="3333333333"
        labelStyle={styles.labelinput}
        inputStyle={styles.inputstile}
        style={styles.inputs}
        multiline
        leftIcon={<Icon type='font-awesome-5' name="star-half-alt" size={24} color="#5DADE2" />}
      />

       <Input
        label='Horario'
        placeholder="8:00 - 9:00"
        labelStyle={styles.labelinput}
        inputStyle={styles.inputstile}
        style={styles.inputs}
        multiline
        leftIcon={<Icon type='font-awesome-5' name="star-half-alt" size={24} color="#5DADE2" />}
      />

       <Input
        label='Link red social'
        placeholder="Entre mas debes mas tienes"
        labelStyle={styles.labelinput}
        inputStyle={styles.inputstile}
        style={styles.inputs}
        multiline
        leftIcon={<Icon type='font-awesome-5' name="share-square" size={24} color="#5DADE2" />}
      />
      <Button onPress={() => {
        edit ? setEdit(false) : setEdit(true)
      }} title="Modificar" />
      <Button onPress={() => navigation.navigate('Home')} title="Inicio" />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.containerload}>
    <ActivityIndicator color="#00ACFF" size={100} />
    </View>
  );
};

export default Pefil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  containerload: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  titulo:{
    fontFamily: 'sketchup',
    fontSize: 25,
    color: '#00ACFF',
    marginLeft:40,
    marginTop:-40,
  },
  logoStore: {
    margin: 40,
    width: WIDTH - 100,
    height: 200,
  },
  inputs:{
    color:'#1B4F72',
    fontFamily:'coolvetica',
    fontSize:15,
  },
  labelinput:{
    color:'#5499C7',
    fontFamily:'coolvetica',
  },
  inputstile:{
    color:'black'
  },
  editinput:{
    color:'#633974',
  },
});
