import React, { useContext, useState,useCallback, useEffect } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigatorone from './Navigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FlashMessage from "react-native-flash-message";
import { UserIDContext } from "./context/UserIDContext";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';




export default function App() {
  const [userID,SetUserID]=useState("");
  const [userphoneNumber,SetuserPhoneNo]=useState("");
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/Fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

  if (!fontsLoaded) {
    return undefined;
     
  }else{
    SplashScreen.hideAsync();
  }
  
  
  return (
    // <UserIDContext>
      <UserIDContext.Provider value={{userID,SetUserID,userphoneNumber,SetuserPhoneNo}}>


<AlertNotificationRoot>
        <NavigationContainer >
        <Navigatorone/>
        
        </NavigationContainer>
        <FlashMessage position="top"/>
        </AlertNotificationRoot>

        
        </UserIDContext.Provider>
        // </UserIDContext>

  );
}

