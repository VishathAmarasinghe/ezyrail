import React, { useState,useContext,useLayoutEffect } from "react";
import { Text, View,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ButtomNav from '../ButtomNavigator';
import DrawerNav from '../DrawerNav';




export default function HomeScreen({navigation}){

    useLayoutEffect(() => {
        navigation.setOptions({
          // headerTitle: () => <Image source={require("../assets/mainlogo.png")} />,
          headerShadowVisible: false,
        })
      }, [navigation])


    return(
        <View style={styles.maincontent}>
            <View style={styles.cardcontainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('TicketTypeSelection')} style={styles.card}>
                <View  style={styles.cardinner}>
                    <Image style={styles.cardImage} source={require("../assets/Reservation.png")}></Image>
                    <Text style={styles.cartext}>Reservation</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <View style={styles.cardinner}>
                    <Image style={styles.cardImage} source={require("../assets/timegap.png")}></Image>
                    <Text style={styles.cartext}>Reservation</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.cardcontainer}>
                <TouchableOpacity style={styles.card}>
                <View style={styles.cardinner} >
                    <Image style={styles.cardImage} source={require("../assets/Newspaper.png")}></Image>
                    <Text style={styles.cartext}>Reservation</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <View style={styles.cardinner}>
                    <Image style={styles.cardImage} source={require("../assets/Tracking.png")}></Image>
                    <Text style={styles.cartext}>Reservation</Text>
                </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )

}

const styles=StyleSheet.create({
    maincontent:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    },
    cardcontainer:{
        // borderWidth:2,
        // borderColor:"red",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginBottom:30
    },
    card:{
        flexDirection:"column",
        display:"flex",
        borderWidth:3,
        borderColor:"#53A4BD",
        borderRadius:15,
        width:"40%",
        height:130,
        alignItems:"center",
        justifyContent:"center",
        
    },
    cardinner:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"

    },
    cardImage:{
        // width:"0%",
        marginBottom:10
    },
    cartext:{
        fontSize:20,
        fontFamily:"Poppins-Medium",
        fontWeight:"600"
    }
})