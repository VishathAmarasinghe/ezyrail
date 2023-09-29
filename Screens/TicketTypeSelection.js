import * as React from "react";
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function TicketTypeSelection({navigation}) {

  const furute=()=>{
    return(
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Be Patient',
        textBody: 'Available On Ezy Rail 2.0',
        autoClose:2000
      })
    )
  }
  
  return (
    
    <View style={styles.mainholder}>
      <Text style={styles.mainholdertext}>Select Type</Text>
      <View style={styles.mainButtonContaier}>

      
      
        <TouchableOpacity
          
          style={styles.buttoncontainernext}
          onPress={() => navigation.navigate("calenderScreen")}
          title="Normal Ticket"
        >
          <Text style={styles.buttoncontainernextText}>Normal Tickets</Text>
        </TouchableOpacity>
    

        <TouchableOpacity
          
          style={styles.buttoncontainernext}
          onPress={() => furute()}
          title="Normal Ticket"
        >
          <Text style={styles.buttoncontainernextText}>Seat Reservation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          style={styles.buttoncontainernext}
          onPress={() => furute()}
            
      
        >
          <Text style={styles.buttoncontainernextText}>Season</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  mainholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttoncontainernext:{
    width: "75%",
    height:57,
    flexDirection: "column",
    borderColor: "#53A4BD",
    borderWidth: 3,
    borderRadius: 12,
    marginBottom: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    // backgroundColor:"white"
  },
  mainButtonContaier:{
    // borderWidth:2,
    // borderColor:"red",
    width:"100%",
    flexDirection:"column",
    alignItems:"center"
  },
  buttoncontainernextText:{
    fontSize: 18,
    fontFamily:"Poppins-Medium",
    fontWeight:"800"
  },
  mainholdertext:{
    fontSize: 32,
    color:"#53A4BD",
    fontFamily:"Poppins-Medium",
    fontWeight:"800",
    marginBottom:60
  }
});
