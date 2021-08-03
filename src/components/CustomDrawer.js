import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { View, Button, Text, Animated,StyleSheet } from 'react-native';



const CustomDrawer = ({route,navigation}) => {
  const {name,lastname} = route.params
  return(
    <View style={{marginTop:20}}>
     <Text>{`Route Name ${JSON.stringify(name)} Lastname: ${JSON.stringify(lastname)}`}</Text>
     <Button 
      title='Perfil'
      onPress={() => navigation.navigate('Perfil')}
     />
    </View>
  );
}

export default CustomDrawer;