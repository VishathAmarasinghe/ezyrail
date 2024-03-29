import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View } from 'react-native';
import MainScreen from './Screens/Mainload';
import LogRegisterScreen from './Screens/LogRegisterScreen';
import Firstpage from './Screens/Firstpage';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Home from './Screens/HomeScreen';
import ButtomNav from './ButtomNavigator';
import DrawerNav from './DrawerNav';
import TicketTypeSelection from './Screens/TicketTypeSelection';
import OTPScreen from './Screens/OTPScreen';



const stackNavigator=createNativeStackNavigator();

export default function Navigatorone() {
    return (
      <stackNavigator.Navigator initialRouteName='home'>
        <stackNavigator.Screen name='home' options={{title:"",headerShown:false}} component={MainScreen} />
        <stackNavigator.Screen name='logregisterScreen' options={{title:"",headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
          }}} component={LogRegisterScreen}/>
        <stackNavigator.Screen name='registerScreen' options={{title:""}} component={Register}/>
        <stackNavigator.Screen name='OTPscreen' component={OTPScreen}/>
        <stackNavigator.Screen name='login' options={{title:""}} component={Login}/>
        <stackNavigator.Screen name='DrawerNav' component={DrawerNav}  options={{headerShown:false}}/>
        <stackNavigator.Screen name='TicketTypeSelection' component={TicketTypeSelection}  options={{headerShown:false}}/>
      </stackNavigator.Navigator>
    );
  }