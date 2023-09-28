import * as React from 'react';
import { Text, View,StyleSheet,Image,Button,TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screens/HomeScreen';
import StacknavigtorTwo from './Stacknaviation2';
import Notificatons from './BottomTabScreens/Notifications';
import Settings from './BottomTabScreens/Settings';

const Tab = createMaterialBottomTabNavigator();


export default function ButtomNav(){
    return(
        <Tab.Navigator
        initialRouteName={"MainHome"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "MainHome") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Notifications") {
              iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
              

            } else if (rn === "Settings") {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 20 },
            style: { padding: 10, height: 70}
          }}
        >
            <Tab.Screen name='Notifications'component={Notificatons}/>
            <Tab.Screen name='MainHome'component={StacknavigtorTwo}/>
            <Tab.Screen name='Settings'component={Settings}/>
            
          

        </Tab.Navigator>
    )
}