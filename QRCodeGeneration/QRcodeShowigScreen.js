import React, { useState,useEffect} from "react";
import { Text, View,StyleSheet,Image,Button,TextInput } from 'react-native';
import { useRoute } from "@react-navigation/native"
import GenerateQR from './GenerateQR';
import { useUserID } from "../context/UserIDContext";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
import SMSSender from "./SMSSender";
import QrStoringMethod from './QRCodeAdding';


export default  function QRScreen({navigation}){

      
    const route = useRoute();

  const date = route.params.targetDate;
  const fromValue = route.params.fromValue;
  const toValue = route.params.toValue;
  const totalcharge = route.params.totalcharge;
  const changeMemberCount = route.params.changeMemberCount;
  const journeyType = route.params.journeyType;

  const [visibility,setvisibility]=useState(true);


  const {userID,userphoneNumber}=useUserID();
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    const month=currentDate.getMonth();
    const day=currentDate.getDay();
    const miliseconds=currentDate.getMilliseconds();

    const uniqueIDGenerator=userID+year+month+day+miliseconds+fromValue+"11154";

    const QRKey="https://quickchart.io/qr?text=\"UserID:"+userID+",BookedDate:"+date+",From:"+fromValue+",toValue:"+toValue+",ticketCount:"+changeMemberCount+",amount:"+totalcharge+",UniqueID:"+uniqueIDGenerator+"\"&size=200";


    //SMSSender(userphoneNumber,QRKey);
    
    QrStoringMethod(QRKey,uniqueIDGenerator,userID,date,totalcharge,changeMemberCount);







    return(
        <View style={styles.allDetailsContainer} >
             <SMSSender userphoneNumber={userphoneNumber} QRKey={QRKey}/>
            <Text style={styles.maintitle}>Ticket Confirmed</Text>
            <View style={styles.biggerContainer}>
            <View style={styles.QrImage}>
        {visibility?<Image style={styles.QrImageOriginal} source={{uri:QRKey}}></Image>:<></>}
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.textsettings}>{date}</Text>
        <View style={styles.locationsContainer}>
            <Text style={styles.textsettings}>{fromValue}</Text>
            <Text style={styles.textsettings}>{toValue}</Text>
        </View>
        <Text style={styles.textsettings}>Train NO</Text>
        <Text style={styles.textsettings}>Amount Rs:{totalcharge}</Text>
        <Text style={styles.textsettings}>{changeMemberCount} Tickets</Text>
      </View>
      
      </View>
      <View style={styles.buttonContainer} >
      <Button title='Download'></Button>
      </View>
        </View>
    )
}

const styles=StyleSheet.create({
    allDetailsContainer:{
        flex:1,
        borderWidth:2,
        alignItems:"center",
        // justifyContent:"space-around"
    },
    maintitle:{
        fontSize:30,
        textAlign:"center"
    },
    QrImage:{
        width:"65%",
        borderWidth:3,
        borderColor:"red",
        height:"45%",
        marginBottom:10
    },
    detailContainer:{
        flex:1,
        borderWidth:2,
        width:"80%"
    },textsettings:{
        fontSize:25,
        textAlign:"center",
        marginBottom:10,
        color:"white"
    },
    locationsContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    buttonContainer:{
        width:"60%",
        borderWidth:2,
        marginTop:20,
        marginBottom:20
    },QrImageOriginal:{
        width:"100%",
        height:"100%"
    },biggerContainer:{
        width:"85%",
        flex:1,
        borderWidth:2,
        borderColor:"green",
        alignItems:"center",
        backgroundColor:"#53A4BD",
        borderRadius:20,
        marginTop:10,
        paddingTop:15
    }


})