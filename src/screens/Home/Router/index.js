import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from '../../../components/CustomDrawer';

import HomeScreen from '../screen/Home';
import BandejaScreen from '../bandejaEntrada/bandeja';
import PerfilScreen from '../perfile/Perfil';
import PerfilNegocioScreen from '../perfile/PerfilNegocio';

const Drawer = createDrawerNavigator();

const  Index = ({ route,navigation }) => {
  return (
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen}   options={{title:'Inicio'}} />
        <Drawer.Screen name="Bandeja" component={BandejaScreen} options={{title:'Bandeja de entrada'}} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} options={{title:'Perfil'}} />
        <Drawer.Screen name="PerfilNegocio" component={PerfilNegocioScreen} options={{title:'Negocio'}} />
      </Drawer.Navigator>
  );
}

export default Index;
