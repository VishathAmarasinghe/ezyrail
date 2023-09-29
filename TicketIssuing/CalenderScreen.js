import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import DropdownComponent from "./StationSelection";
import { useEffect } from "react";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function CalenderScreen({navigation}) {
  const [selected, setSelected] = useState(null);
  const [fromValue,setFromValue]=useState(null);
  const [ToValue,setToValue]=useState(null);

  const checkValidationOfDate=()=>{
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const targetDate = new Date(String(selected));
    targetDate.setHours(0, 0, 0, 0);
    if (selected!=null) {
      if (currentDate < targetDate) {
        console.log("The target date is in the future.");
        if (fromValue!=null && ToValue!=null && fromValue!=ToValue) {
          navigation.navigate("ticketCountScreen",{targetDate:targetDate,fromValue:fromValue,ToValue:ToValue})
        }
      } else if (currentDate > targetDate) {
        console.log("The target date is in the past.");
      } else {
        console.log("The target date is today.");
        if (fromValue!=null && ToValue!=null && fromValue!=ToValue) {
          navigation.navigate("ticketCountScreen",{targetDate:targetDate,fromValue:fromValue,ToValue:ToValue})
        }
      }
    }

    
  }

  useEffect(()=>{
    console.log("from value "+fromValue);
    console.log("to value "+ToValue);
  },[fromValue,ToValue])

  useEffect(()=>{
    console.log("selected Date "+selected);
  },[selected])
  return (
    <View style={styles.everythingHolder}>
      <View style={styles.dropdownContainer}>
        <DropdownComponent labelName="From" setFromValue={setFromValue}/>
        <DropdownComponent labelName="To" setToValue={setToValue}/>

      </View>

      <View style={styles.mainCalenderContainer}>
        <Calendar
        style={{
          borderWidth: 3,
          borderColor: '#53A4BD',
          borderRadius:10,
          height: 350,
          
        }}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
      </View>
      
        <TouchableOpacity style={styles.nextbuton} onPress={checkValidationOfDate} title="Continue"><Text style={styles.nextbutonText}>Continue</Text></TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainCalenderContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    width: "95%",
    alignItems:"stretch",
    flexDirection:"column",
    marginTop:15
  },
  nextbuton:{
    width: "80%",
    height:45,
    borderWidth:2,
    backgroundColor:"#53A4BD",
    borderColor: "#53A4BD",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  everythingHolder:{
    flexDirection:"column",
    alignItems:"center",
    width:"100%",
    borderWidth:2,
    backgroundColor:"white"
  },
  dropdownContainer:{
    width:"95%"
  },
  nextbutonText:{
    fontSize:23,
    fontFamily:"Poppins-Medium",
    color:"white",
    fontWeight:"800"
  }
});
