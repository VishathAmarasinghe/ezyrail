import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet,Image,Button,TextInput,TouchableOpacity } from 'react-native';
import { useUserID } from '../context/UserIDContext';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";

 export default TicketCard=({from,to,date,ticketCount,amount})=>{
    return(
        
                <TouchableOpacity style={styles.card}>
                    
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardDetailstext}>From - To</Text>
                        <Text style={styles.cardDetailstext}>Booked Date {date}</Text>
                        <Text style={styles.cardDetailstext}>Ticket Count {ticketCount}</Text>
                        <Text style={styles.cardDetailstext}>Amount {amount}</Text>

                    </View>
                    <View style={styles.cardimg}>
                    <Image style={styles.QrImageOriginal} source={{uri:"https://quickchart.io/qr?text=Hello world"}}></Image>
                    </View>
                </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    
    card:{
        width:"100%",
        height:100,
        // borderWidth:2,
        display:"flex",
        flexDirection:"row",
        marginBottom:15,
        backgroundColor:"#53A4BD",
        borderRadius:10,
        paddingLeft:10,
        padding:5
    },
    cardimg:{
        width:"30%",
        borderWidth:2,
        borderRadius:10
    },
    cardDetails:{
        width:"70%",
        // borderWidth:2
    },QrImageOriginal:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    cardDetailstext:{
        fontSize:16,
    fontFamily:"Poppins-Medium",
    color:"white",
    fontWeight:"800"
    }
})