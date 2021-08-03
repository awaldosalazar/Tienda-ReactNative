import React from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'react-native-elements';

const ButtonHeader = ({boton,navegacion}) =>{
 
  return(
    <View style={{alignItems: 'center',}}>

<Icon
  reverse
  iconStyle={{color:boton.coloricon,}}
  name={boton.icon}
  size={35}
  type='font-awesome'
  color={boton.colors}
  onPress={() => navegacion(boton.page)} />
  <Text style={{margin:3,fontFamily:'coolvetica'}}>{boton.name}</Text>

    </View>
  );
}

export default ButtonHeader;