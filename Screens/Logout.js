import * as React from 'react';
import { Text, View,StyleSheet,Image,Button,TextInput } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";



export default function Logout({ navigation }){
    showMessage({
        message: "LogOut Successfully",
        type: "success",
      });
    navigation.navigate("login")
}