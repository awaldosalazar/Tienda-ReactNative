import React, { useEffect, useState } from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  View,
  Button,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBar from '../../../components/Home/Headerbar';

//data
import { menuIcons } from '../../../data/ButtonsMenu';
import ButtonsHeader from '../../../components/Home/ButtonsHeader';
import LastMensajes from '../../../components/Home/LastMensajes';
import EmpresaRender from '../../../components/Home/Empresa';
//Pruebas JSON
import { clientes } from '../../../data/Empresa';

const Home = ({ route, navigation }) => {
  const [statusStore, setStatusStore] = useState(false);

  const [empresa, setEmpresa] = useState([]);
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@store_key4');
      if (value !== null) {
        let formData = new FormData();
        formData.append('id_negocio', value);
        let response = await fetch(
          'http://glamourapp.atwebpages.com/store/scripts/viewStore.php',
          {
            method: 'Post',
            body: formData,
            headers: {
              Accept: 'application/json',
              'content-type': 'multipart/form-data',
            },
          }
        )
        .then(response => response.json())
        .then(data => {
          setEmpresa(data)});
        setStatusStore(true);
      }
    } catch (e) {
      setStatusStore(true);
      console.log(`Error en Storage ${e}`);
    }
    
  };

  useEffect(() => {
    getData();
  }, []);

  const muestrajson = () => {
    console.log(typeof(empresa));
    console.log(empresa);
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const navegacion = (page) => {
    navigation.navigate(page);
  };

  const navegacionNegocio = (page,parametro) => {
    navigation.navigate(page,{item:parametro,});
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar perfil={navegacion} menu={openDrawer} />

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={menuIcons}
            renderItem={({ item }) => (
              <ButtonsHeader boton={item} navegacion={navegacion} />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>

        <View>
          {statusStore ? <EmpresaRender empresa={empresa} navegacion={navegacionNegocio} /> : <Text>Cargando....</Text>}
        </View>

        <View>
          <Card style={styles.lastmensajes}>
            <Card.Title
              title="Ultimos mensajes"
              style={{ alingText: 'center' }}
            />
            <FlatList
              data={clientes}
              renderItem={({ item }) => <LastMensajes mensaje={item} />}
              keyExtractor={(item) => item.id}
            />
          </Card>
        </View>

        <View style={{ marginTop: 5 }}>
          <Button
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            title="Json"
          />
          <Button
            onPress={muestrajson}
            title="Mostrar Json"
          />
          <Button
            onPress={() => navigation.navigate('Login')}
            title="salir 1"
          />
          <Button
            onPress={() => navigation.navigate('Presentacion')}
            title="salir"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  lastmensajes: {
    borderRadius: 20,
    margin: 5,
  },
});
