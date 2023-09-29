import * as React from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useUserID } from "../context/UserIDContext";
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function PaymentSelector({ navigation }) {
  const route = useRoute();
  const {userID,userphoneNumber}=useUserID();


  const date = route.params.targetDate;
  const fromValue = route.params.fromValue;
  const toValue = route.params.toValue;
  const totalcharge = route.params.totalcharge;
  const changeMemberCount = route.params.changeMemberCount;
  const journeyType = route.params.journeyType;

  const moveQRscreen = () => {
    // Handle card payment logic here
    console.log("Current Date "+toValue);
    navigation.navigate("QRScreen",{totalcharge:totalcharge,changeMemberCount:changeMemberCount,
        journeyType:journeyType,targetDate:date,fromValue:fromValue,toValue:toValue});
  };

  const handleCardPaymentPress = () => {

  };

  const EzyCashPayment=async()=>{
    try {
      const response = await axios.post('https://ezyrail.onrender.com/sendsms/cashtrans', {
        "PhoneNo":userphoneNumber,
        "DeductAmount":"5"
      });
      if (response.data.statusCode=="S1000") {
          successmsg();
      }else if (response.data.statusCode=="E1326") {
        insuffecientMoney();
    } else{
      console.log(response);
          transcationEror();
      }
      
    } catch (error) {
      transcationEror();
      console.error('SMS Sending failed', error);
    }
  }



  const insuffecientMoney=()=>{
    return(
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Insufficient balance.',
        button: 'close',
        autoClose:1,
      })
    )
  }

  const transcationEror=()=>{
    return(
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: 'Transaction Error Please Try Again.',
        button: 'close',
        autoClose:1,
      })
    )
  }


  const successmsg=()=>{
    return(
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Payment Successfull',
        button: 'close',
        autoClose:1,
        onHide:moveQRscreen
      })
     )
  }


  const handleEzyCashPress=()=>{
    showMessage({
      message: "Payment in Progress",
      description: "This Will take few Seconds",
      type: "info",
      hideStatusBar:true
    });
    successmsg();
    // EzyCashPayment();
  }


  return (
    <AlertNotificationRoot>
    <View style={styles.container}>
      <Text style={styles.title}>Payment Options</Text>
      <TouchableOpacity style={styles.button} onPress={handleCardPaymentPress}>
        <Text style={styles.buttonText}>Card Payment</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.button} onPress={handleEzyCashPress}>
        <Text style={styles.buttonText}>Ezy Cash</Text>
      </TouchableOpacity>
    </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontFamily:"Poppins-Medium",
    fontWeight:"600",
    textAlign:"center",
    marginTop:20,
    fontWeight:"800"
  },
  button: {
    width: "80%",
    height:51,
    borderWidth:2,
    backgroundColor:"#53A4BD",
    borderColor: "#53A4BD",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"},

  buttonText: {
    fontSize:23,
    fontFamily:"Poppins-Medium",
    color:"white",
    fontWeight:"800"
  },
});
