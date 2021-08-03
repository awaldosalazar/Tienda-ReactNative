import React, {useState, useEffect} from 'react';
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import { Image, Input, Icon, Button } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const { width: WIDTH } = Dimensions.get('window');

const Botones = ({setStore, store, status, setStatus, upImage }) =>{
  const [statusimage, setStatusimage] = useState({
    boton: false,
    icon: false,
  });
  const [imagestore,setImagestore] = useState(null)
  const [statusubicacion, setStatusubicacion] = useState({
    boton: false,
    icon: false,
  });

const [horas,setHoras] = useState({
  hora1:null,
  hora2:null,
})
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setDatePickerVisibility2(false);
  };

  const handleConfirm = (date) => {
    let local = date.getHours() +':' +date.getMinutes().toString() ;
    setStatus({...status,hrinicioicon:true})
    setHoras({...horas, hora1:local})
    setStore({...store,horain:local})
    hideDatePicker();
  };
  const handleConfirm2 = (date) => {
    let local = date.getHours() +':' +date.getMinutes().toString() ;
    setHoras({...horas, hora2:local})
    setStore({...store,horafn:local})
    hideDatePicker();
  };

  const sacarHora = () =>{
    console.log(horas.hora1);
  }

  return(
    <View>
    
      <Button
          icon={<Icon type="font-awesome-5" name={status.imageicon ? "check-circle": "cloud-upload-alt"} size={15} color="#5DADE2" />}
          iconLeft
          title={status.imageicon ? " Imagen cargada exitosamente": " Subir imagen de la tienda"}
          type="outline"
          containerStyle={styles.buttonimage}
          loading={status.imagebtn}
          onPress={upImage}
        /> 
        <Button
          icon={<Icon type="font-awesome-5" name={status.ubicaicon ? "check-circle" : "map-marked-alt"} size={15} color="#5DADE2" />}
          iconLeft
          title={status.ubicaicon ? " Ubicacion Cargada exitosamente" : " Mandar Ubicación actual"}
          type="outline"
          containerStyle={styles.buttonubicacion}
          loading={status.ubicabtn}
        /> 

        <Button
          icon={<Icon type="font-awesome-5" name={status.hrinicioicon ? "check-circle" : "clock"} size={15} color="#5DADE2" />}
          iconLeft
          title={status.hrinicioicon ? " Hora Almacenada" : " Apertura de negocio"}
          type="outline"
          containerStyle={styles.buttonubicacion}
          onPress={showDatePicker}
        /> 

        <Button
          icon={<Icon type="font-awesome-5" name={status.hrfinalicon ? "check-circle" : "clock"} size={15}      color="#5DADE2" />}
          iconLeft
          title={status.hrfinalicon ? " Hora Almacenada" : " cierre de negocio"}
          type="outline"
          containerStyle={styles.buttonubicacion}
          onPress={showDatePicker2}
        />

        <Text>{`Hora1: ${horas.hora1}, Hora2: ${horas.hora2}`}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible2}
        mode="time"
        onConfirm={handleConfirm2}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

export default Botones;

const styles = StyleSheet.create({  
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
