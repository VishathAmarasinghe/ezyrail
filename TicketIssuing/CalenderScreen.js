import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import DropdownComponent from "./StationSelection";
import { useEffect } from "react";
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
      <View style={styles.nextbuton}>
        <Button onPress={checkValidationOfDate} title="Continue"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCalenderContainer: {
    borderWidth: 2,
    borderColor: "red",
    width: "95%",
    alignItems:"stretch",
    flexDirection:"column"
  },
  nextbuton:{
    marginTop:10,
    width:"80%",
    borderWidth:2
  },
  everythingHolder:{
    flexDirection:"column",
    alignItems:"center",
    width:"100%",
    borderWidth:2
  },
  dropdownContainer:{
    width:"95%"
  }
});
