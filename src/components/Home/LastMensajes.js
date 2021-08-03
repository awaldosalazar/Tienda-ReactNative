import React from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';
import {Card,Button,Avatar,Divider,ListItem } from 'react-native-elements';

const LastMensaje = ({mensaje}) =>{
  return(
 <ListItem bottomDivider 
 onPress={() => Alert.alert('Abre chat',`Manda al chat con ${mensaje.nombre}`)}
 >
    <Avatar title={mensaje.nombre[0]} color={'#F5FCFF'} source={mensaje.image && { uri: mensaje.image }}/>
    <ListItem.Content>
      <ListItem.Title>{mensaje.nombre}</ListItem.Title>
      <ListItem.Subtitle>{mensaje.mensaje}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  );
}

export default LastMensaje;

