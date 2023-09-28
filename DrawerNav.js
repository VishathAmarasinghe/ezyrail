import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import MyAccount from './DrawerScreens/MyAccount';
import ContactUs from './DrawerScreens/ContactUs';
import HomeScreen from './Screens/HomeScreen';
import ButtomNav from './ButtomNavigator';
import Logout from './Screens/Logout';

const Drawer = createDrawerNavigator();


export default function DrawerNav(){
    const DrawerHeaderContent = props => {
        return (
          <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
            <View
              style={{
                backgroundColor: '#4f4f4f',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                top: -5,
              }}>
              <Text style={{color: '#fff'}}>Home BBS</Text>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      };
    
      return (
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
            },
          }}
          drawerContent={DrawerHeaderContent}>
          <Drawer.Screen
            name={'DashBoard'}
            
            component={ButtomNav}
            options={{
              drawerLabel: 'Home Screen',
              drawerIcon: ({focused, size, color}) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name={'Myaccount'}
            component={MyAccount}
            options={{
              drawerLabel: 'My Account Screen',
              drawerIcon: ({focused, size, color}) => (
                <MaterialIcons name="account-circle" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name={'ContactUs'}
            component={ContactUs}
            options={{
              drawerLabel: 'Contact Us',
              drawerIcon: ({focused, size, color}) => (
                <Feather
                  name="help-circle"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={'LogOut'}
            component={Logout}
            options={{
              drawerLabel: 'Log Out',
              drawerIcon: ({focused, size, color}) => (
                <MaterialIcons
                  name="logout"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      );
    };

