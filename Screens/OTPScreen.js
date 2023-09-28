import React, { useState,useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { OtpInput } from 'react-native-otp-entry';
import RespondOTP from '../OTP/RespondOTP';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";




const OTPScreen = ({ navigation }) => {
  const [otp, setOTP] = useState('');
  const [isValid, setIsValid] = useState(false);

  const route = useRoute();
  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
  const NIC = route.params.NIC;
  const PhoneNo = route.params.PhoneNo;
  const username = route.params.username;
  const password = route.params.password;
  const OTPReference = route.params.OTPReference;


  const OTPRespondComparing=async()=>{
    try {
      console.log("current OTP "+otp);
      console.log("current OTP ref  "+OTPReference);
      const OTPrespondResult=await RespondOTP(OTPReference,otp);
      if (OTPrespondResult!=null) {
        if (OTPrespondResult.statusCode=="S1000") {
          showMessage({
            message: "OTP Validated Successfully",
            type: "success",
          });
          await handlenewuserRegister();
          navigation.navigate("login");
        }else{
          showMessage({
            message: "OTP response Faild",
            type: "danger",
          });
        }
      }else{
        showMessage({
          message: "OTP response Faild2",
          type: "danger",
        });
      }
    
    } catch (error) {
      showMessage({
        message: "OTP Comparing Error",
        type: "danger",
      });
      console.log("otp comareing Error "+error);
    }
    
  }

 


  const handlenewuserRegister= async ()=>{
    try {
      console.log("firstName "+firstName);
      console.log("lastName "+lastName);
      console.log("NIC "+NIC);
      console.log("PhoneNo "+PhoneNo);
      console.log("username "+username);
      console.log("password "+password);
      const response = await axios.post(
        "https://ezyrail.onrender.com/api/auth/register",
        {
          "firstName":firstName,
          "lastName":lastName,
          "NIC":NIC,
          "PhoneNo":PhoneNo,
          "username":username,
          "password":password,
        },
        {headers: {
          'Content-Type': 'application/json'
        }}
      );
      console.log(response);
      showMessage({
        message: "User Registered Successfully",
        type: "success",
      });
    } catch (error) {
      console.log("Data  Adding Error "+error);
      showMessage({
        message: "User Registration Failed",
        type: "danger",
      });
    }
   
  }

  

    const handleOTPChange = () => {
        console.log("valueeee "+otp);
    };

  return (
    <View style={styles.container}>
      <Text>Enter OTP</Text>
      <OtpInput numberOfDigits={6} onTextChange={(text) => setOTP(text)}/>
      <Button onPress={OTPRespondComparing} title="Submit OTP"  />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  validText: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
