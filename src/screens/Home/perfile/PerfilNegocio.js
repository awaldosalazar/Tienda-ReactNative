import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Image, Input, Icon, Button } from 'react-native-elements';
import RenderBotones from '../../../components/perfil/Botones';
import {} from 'react-native-paper';

const { width: WIDTH } = Dimensions.get('window');

const PefilNegocio = ({ route, navigation }) => {
  const {item}= route.params;
  //estado
  const [status, setStatus] = useState({
    general:false,
    imagebtn:false,
    imageicon:false,
    hriniciobtn:false,
    hrinicioicon:false,
    hrfinalbtn:false,
    hrfinalicon:false,
    ubicabtn:false,
    buicaicon:false,
  });
  const [statusimage, setStatusimage] = useState({
    boton: false,
    icon: false,
  });
  const [imagestore,setImagestore] = useState(null)
  const [statusubicacion, setStatusubicacion] = useState({
    boton: false,
    icon: false,
  });
  const [edit, setEdit] = useState(true);

  const [store, setStore] = useState();

  const crearcadena = (categoria, imageuri) => {
    let localUri = imageuri;
    let filename = localUri.split('/').pop();
    let extension = filename.split('.');
    return (
      categoria + store.id_negocio +
      store.nombren.replace(/\s+/g, '').toLowerCase() + store.nombrep.replace(/\s+/g, '').toLowerCase() + '.'  + extension[1]
    );
  };

  const update = async() =>{
    
    if(!edit){
      setStatus({...status,general:false})
      let formData = new FormData();
      formData.append('id_negocio', store.id_negocio);
      formData.append('nombren', store.nombren);
      formData.append('telefono', store.telefono);
      formData.append('red_social', store.red_social);
      formData.append('ubicacion', store.ubicacion);
      formData.append('horain', store.horain);
      formData.append('horafn', store.horafn);
      formData.append('slogan', store.slogan);
      if(imagestore != null && imagestore != ''){
        let localUri = imagestore;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let nameimagestore = crearcadena('photo_store_vendedor', imagestore);
        formData.append('photostore', {
              uri: imagestore,
              name: nameimagestore,
              type
            });
          formData.append('updateimage', 'si');
      }else{
        formData.append('updateimage', 'no');
      }

      await fetch('http://glamourapp.atwebpages.com/store/scripts/updateStore.php',{
        method:'POST',
        body:formData,
        headers:{
          Accept: 'application/json',
          'content-type': 'multipart/form-data',
        }
      }) 
      .then(response => response.json())
      .then(data => {
        setStore(data[0])});


      setStatus({...status,general:true})
      setEdit(true) 
    }else{
      setEdit(false) 
      console.log('ando aqui');
    }
  }

  const upImage = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setStatus({...status, imageicon:true });
      setImagestore(result.uri);
    }
  }

  const upUbicacion = async() =>{
    console.log('up ubicacion');
  }

  const getData = () => {
    console.log('getdata'+item);
    setStore(item[0]);
    setStatus({...status,general:true});
  };

  const vacio = () => {
    console.log('escondido');
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();


    getData();
  },[]);

  return status.general ? (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri:
              item[0].imagestore,
          }}
          PlaceholderContent={<ActivityIndicator color="#00ACFF" />}
          style={styles.logoStore}
        />
        <Text style={styles.titulo}>ID NEGOCIO {item[0].id_negocio}</Text>

        {edit ? vacio : <RenderBotones setStore={setStore} store={store} status={status} setStatus={setStatus} upImage={upImage} />}

        <Input
          label="Nombre de la tienda"
          placeholder={store.nombren}
          value={store.nombren}
          onChangeText={text => setStore({...store, nombren:text})}
          disabled={edit}
          disabledInputStyle={styles.editinput}
          labelStyle={styles.labelinput}
          inputStyle={styles.inputstile}
          style={styles.inputs}
          leftIcon={
            <Icon
              type="font-awesome-5"
              name="store"
              size={24}
              color="#5DADE2"
            />
          }
        />

        <Input
          label="Slogan de la marca"
          placeholder={store.slogan}
          value={store.slogan}
          onChangeText={text => setStore({...store, slogan:text})}
          disabled={edit}
          labelStyle={styles.labelinput}
          inputStyle={styles.inputstile}
          style={styles.inputs}
          multiline
          leftIcon={
            <Icon
              type="font-awesome-5"
              name="star-half-alt"
              size={24}
              color="#5DADE2"
            />
          }
        />

        <Input
          label="Telefono"
          placeholder={store.telefono}
          value={store.telefono}
          onChangeText={text => setStore({...store, telefono:text})}
          disabled={edit}
          labelStyle={styles.labelinput}
          inputStyle={styles.inputstile}
          style={styles.inputs}
          multilin
          leftIcon={
            <Icon
              type="font-awesome-5"
              name="star-half-alt"
              size={24}
              color="#5DADE2"
            />
          }
        />

        <Input
          label="Horario"
          placeholder={store.horario}
          value={`${store.horain}-${store.horafn}`}        
          disabled={true}
          labelStyle={styles.labelinput}
          inputStyle={styles.inputstile}
          style={styles.inputs}
          leftIcon={
            <Icon
              type="font-awesome-5"
              name="clock"
              size={24}
              color="#5DADE2"
            />
          }
        />

        <Input
          label="Link red social"
          placeholder={store.red_social}
          value={store.red_social}
          onChangeText={text => setStore({...store, red_social:text})}
          disabled={edit}
          labelStyle={styles.labelinput}
          inputStyle={styles.inputstile}
          style={styles.inputs}
          multiline
          leftIcon={
            <Icon
              type="font-awesome-5"
              name="share-square"
              size={24}
              color="#5DADE2"
            />
          }
        />
        <Button
          onPress={update}
          title={edit ? 'Modificar' : 'Guardar'}
        />
        <Button onPress={() => console.log(store)} title="json" />
        <Button onPress={() => navigation.navigate('Home')} title="Inicio" />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.containerload}>
      <ActivityIndicator color="#00ACFF" size={100} />
    </View>
  );
};

export default PefilNegocio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  containerload: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontFamily: 'sketchup',
    fontSize: 25,
    color: '#00ACFF',
    marginLeft: 40,
    marginTop: -40,
  },
  logoStore: {
    margin: 40,
    width: WIDTH - 100,
    height: 200,
  },
  inputs: {
    color: '#1B4F72',
    fontFamily: 'coolvetica',
    fontSize: 15,
  },
  labelinput: {
    color: '#5499C7',
    fontFamily: 'coolvetica',
  },
  inputstile: {
    color: 'black',
  },
  editinput: {
    color: '#633974',
  },
  buttonimage:{
    marginLeft: WIDTH/8,
    width: WIDTH - 100,
    borderColor:'#5DADE2',
  },
  buttonubicacion:{
    marginTop:10,
    marginLeft: WIDTH/8,
    width: WIDTH - 100,
    borderColor:'#5DADE2',
  },
});
