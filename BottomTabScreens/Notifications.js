import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet,Image,Button,TextInput,TouchableOpacity,FlatList } from 'react-native';
import { useUserID } from '../context/UserIDContext';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import TicketCard from './TicketCard';



export default function Notificatons(){
    const [viewsettings,setviewsettings]=useState(false);
    const [ticets,settickets]=useState([]);
    const {userID}=useUserID();

    useEffect(()=>{
        getData();
        setviewsettings(true);
        console.log(ticets);

    },[])

    const getData=async()=>{
        try {
            const response = await axios.get('https://ezyrail.onrender.com/QR/find/vishath');
            showMessage({
              message: "Tickets loaded Successfull",
              type: "success",
            });
            console.log(response.data);
            settickets(response.data);
          } catch (error) {
            showMessage({
              message: "Error loading Tickets",
              type: "warning",
            });
            console.error('Notifications failed', error);
          }
    }
    
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Your Tickets</Text>
            <View style={styles.ticketContainer}>
            {
                viewsettings?<FlatList data={ticets} renderItem={({item})=><TicketCard  date={item.BookedDate} ticketCount={item.TicketCount} amount={item.Amount} />} />:<></>
            }
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:"center",
        borderWidth:2,
        width:"100%"
    },
    heading:{
        fontSize:25,
        marginTop:15
    },
    ticketContainer:{
        flex:1,
        borderWidth:2,
        width:"85%",
        
    },
    card:{
        width:"100%",
        height:100,
        borderWidth:2,
        display:"flex",
        flexDirection:"row"
    },
    cardimg:{
        width:"30%",
        borderWidth:2
    },
    cardDetails:{
        width:"70%",
        borderWidth:2
    },QrImageOriginal:{
        width:"100%",
        height:"100%"
    }
})