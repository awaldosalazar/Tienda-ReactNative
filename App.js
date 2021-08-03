import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Router from './src/router/index';
import Drawer from './src/screens/Home/Router/index';
import Reg from './src/screens/Home/perfile/PerfilNegocio';
import Boton from './src/components/perfil/Botones';
import * as Font from 'expo-font';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      coolvetica: require('./src/assets/fonts/coolvetica.ttf'),
      sketchup: require('./src/assets/fonts/SKETCHUP.ttf'),
    });
    setFontsLoaded(true);
  };

  return fontsLoaded ? (
    <Router />
  ) : (
    <ActivityIndicator style={{ marginTop: 360 }} color="#00ACFF" />
  );
};
//<ActivityIndicator style={{marginTop:360}} color="#00ACFF" />
export default App;
