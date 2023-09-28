import React, { useContext, useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigatorone from './Navigator';
import FlashMessage from "react-native-flash-message";
import { UserIDContext } from "./context/UserIDContext";


export default function App() {
  const [userID,SetUserID]=useState("");

  
  
  return (
    // <UserIDContext>
      <UserIDContext.Provider value={{userID,SetUserID}}>

        <NavigationContainer>
        <Navigatorone/>
        <FlashMessage position="top"/>
        </NavigationContainer>
        
        </UserIDContext.Provider>
        // </UserIDContext>

  );
}

