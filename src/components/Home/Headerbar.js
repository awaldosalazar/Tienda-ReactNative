import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import {Icon} from 'react-native-elements';
import { Button, Text } from 'react-native';

const HeaderBar = ({ perfil,menu }) => {
  const AvatarBar = () => {
    return (
      <Avatar
        rounded
        title='AW'
        size="medium"
        source={{
          uri: 'https://www.w3schools.com/howto/img_avatar2.png',
        }}
        onPress={() => perfil('Perfil')}
      />
    );
  };

  const IconBar = () => {
    return (
      <Icon
      reverse
  iconStyle={{color:'black',}}
  name='bars'
  size={25}
  type='font-awesome'
  color={'#1484e3'}
  onPress={menu} />
        
    );
  };

  return (
    <Header
      centerComponent={() => {
        return(
        <Text style={{fontFamily:'sketchup', color:'#F5FCFF', fontSize:35}}>Inicio</Text>
        );
      }}
      leftComponent={<IconBar />}
      rightComponent={<AvatarBar />}
    />
  );
};
//rightComponent={{ icon: 'home', color: '#fff' }}
export default HeaderBar;
