import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Icon} from 'react-native-elements';

const Empresa = ({ empresa, navegacion }) => {

  const LeftContent = (props) => <Icon
  reverse
  iconStyle={{color:'#AED6F1',}}
  name='store-alt'
  size={20}
  type='font-awesome-5'
  color={'#21618C'}
  onPress={() => navegacion('Perfl')} />

  return (
    <View>
      <Card>
        <Card.Title
          title={empresa[0].nombren}
          subtitle={empresa[0].slogan}
          titleStyle={{fontFamily:'sketchup', color:'#44C7FF'}}
          subtitleStyle={{fontFamily:'coolvetica', color:'#A6A6A6'}}
          left={LeftContent}
        />
        <Card.Title
          subtitle={empresa[0].horain+'-'+empresa[0].horafn}
        />
        <Card.Cover source={{ uri: empresa[0].imagestore }} />
        <Card.Actions style={{color:'#44C7FF'}}>
          <Button color='#44C7FF' onPress={() => navegacion('PerfilNegocio',empresa)}>
            Mirar Perfil del negocio
          </Button>
          <Button color='#44C7FF' onPress={() => console.log(empresa[0])}>
            Ir a red social
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Empresa;
