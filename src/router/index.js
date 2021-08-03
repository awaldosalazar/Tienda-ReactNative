import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Path
import LoginScreen from '../screens/Login/Login';
import PresentacionScreen from '../screens/Login/Pesentacion';
import RegistroScreen from '../screens/Registro/Registro';
import HomeScreen from '../screens/Home/screen/Home';
import RouterHome from '../screens/Home/Router/index';
const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="presentacion"
        component={PresentacionScreen}
        options={{
          header: () => null,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyleInterpolator: forFade,
          title: 'Inicio de sesión',
        }}
      />
      <Stack.Screen
        name="Registro"
        component={RegistroScreen}
        options={{ headerStyleInterpolator: forFade, title: 'Registro',  }}
      />
      <Stack.Screen
        name='Home'
        component={RouterHome}
        options={{
          header:() => null,
          headerLeft: null,
          gesturesEnabled: false,
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      
    </NavigationContainer>
  );
}
