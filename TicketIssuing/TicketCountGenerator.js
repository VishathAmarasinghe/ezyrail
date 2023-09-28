import * as React from "react";
import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import InputSpinner from "react-native-input-spinner";
import TicketClasses from "./TicketClasses";
import { useRoute } from "@react-navigation/native"
import { LogBox } from 'react-native';
import JourneyType from "./ReturnType";
import { useState } from "react";
import { useEffect } from "react";
import TicketPriceCalculation from "./TicketPriceCalculation";

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);


export default function TicketCountGenerator({navigation}) {

  const [journeyType,setjournetType]=useState("single");
  const [totalcharge,setTotalcharge]=useState(0);
  const [changeMemberCount,setMemberCount]=useState(1);

    
  const route = useRoute();

  const date=route.params.targetDate;
  const fromValue=route.params.fromValue;
  const toValue=route.params.ToValue;


const dateObj = new Date(date); 


const year = dateObj.getFullYear(); 
const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
const day = dateObj.getDate().toString().padStart(2, '0'); 


const formattedDate = `${year}-${month}-${day}`;


  const proceedPayment=()=>{
    if (totalcharge!=0) {
      console.log("dteeeee  "+toValue);
      navigation.navigate("paymentselectScreen",{totalcharge:totalcharge,changeMemberCount:changeMemberCount,
        journeyType:journeyType,targetDate:formattedDate,fromValue:fromValue,toValue:toValue})
    }
  }




  useEffect(()=>{
    setTotalcharge(TicketPriceCalculation(fromValue,toValue,changeMemberCount,journeyType));
  },[changeMemberCount,fromValue,toValue,journeyType])



  return (
    <View style={styles.maicontainer}>
      <Text>Tickets</Text>
      <View style={styles.mainsprinnerContainer}>
        <View style={styles.sprinnerContainer}>
          <Text style={styles.sprinertext}>Adult</Text>
          <InputSpinner
            max={5}
            fontSize={25}
            skin="square"
            min={1}
            step={1}
            colorMax={"#f04048"}
            colorMin={"#40c5f4"}
            // value={this.state.number}
            onChange={(num) => {
              console.log(num);
              setMemberCount(num);
            }}
          />
          
        </View>

        {/* <View style={styles.sprinnerContainer}>
          <Text style={styles.sprinertext}>Child</Text>
          <InputSpinner
            max={10}
            fontSize={25}
            skin="square"
            min={2}
            step={1}
            colorMax={"#f04048"}
            colorMin={"#40c5f4"}
            // value={this.state.number}
            onChange={(num) => {
              console.log(num);
            }}
          />
          
        </View> */}
      </View>
      
      {/* <View style={styles.radioContainer}>
        <TicketClasses/>
      </View> */}
      <View>
        <Text style={styles.radioContainerTwo}>Journey Type</Text>
        <JourneyType setjournetType={setjournetType}/>
      </View>
      <View>
      <Text>`Total Value is Rs: {totalcharge}`</Text>
      </View>
      <View>
        <Button onPress={proceedPayment} title="Proceed To Payment"></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  maicontainer: {
    flex: 1,
    borderWidth: 2,
  },
  sprinnerContainer:{
    borderWidth:2,
    flexDirection:"row",
    width:"50%",
    // alignItems:"stretch",

  },
  mainsprinnerContainer:{
    borderWidth:2,
    flexDirection:"row"
  },
  sprinertext:{
    fontSize:20
  },
  radioContainer:{
    borderWidth:2,
    flexDirection:"column",
    alignItems:"center",
    marginTop:50
  },
  radioContainerTwo:{
    
  }
});
