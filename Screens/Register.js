import React, { useState,useRef,useLayoutEffect } from "react";
import axios from 'axios';
import PhoneInput from "react-native-phone-number-input";
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RequestOTP from "../OTP/RequestOTP";

export default function Register({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <Image source={require("../assets/mainlogo.png")} />,
      headerShadowVisible: false,
    })
  }, [navigation])



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [NIC, setNIC] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  const handleRegister = async () => {
    try {
      if (formattedValue.length==12) {
        const phoneNumberWithoutPlus = formattedValue.replace(/\+/g, '');
        setPhoneNo(phoneNumberWithoutPlus);
        console.log("final phone  number "+phoneNumberWithoutPlus);
        const otprequestResult= await RequestOTP(phoneNumberWithoutPlus);
        if (otprequestResult!=null) {
          if (otprequestResult.statusCode=="S1000") {
            showMessage({
              message: "OTP Send to your mobile",
              type: "success",
            });
            navigation.navigate("OTPscreen",{
              firstName:firstName,
                lastName:lastName,
                NIC:NIC,
                PhoneNo:phoneNumberWithoutPlus,
                username:username,
                password:password,
                OTPReference:otprequestResult.referenceNo
            });
          }else{
            showMessage({
              message: "OTP request Faild",
              type: "danger",
            });
          }
        }else{
          showMessage({
            message: "OTP request Faild2",
            type: "danger",
          });
        }
        
        
      }else{
        console.log(formattedValue);
        showMessage({
          message: "invalid Phone No",
          type: "warning",
        });
        
      }

      
    } catch (error) {
      console.error("Register failed", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:"white"}}>
      <View style={styles.mainregisterContainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Create Your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={firstName}
            onChangeText={(text) => setfirstName(text)}
            style={styles.inputholder}
            placeholder="First Name"
          ></TextInput>
          <TextInput
            value={lastName}
            onChangeText={(text) => setlastName(text)}
            style={styles.inputholder}
            placeholder="Last Name"
          ></TextInput>
          <TextInput
            value={NIC}
            onChangeText={(text) => setNIC(text)}
            style={styles.inputholder}
            placeholder="NIC"
          ></TextInput>


          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="LK"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={styles.inputholderphone}
            textContainerStyle={styles.phonecontaier}
          />


          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.inputholder}
            placeholder="Username"
          ></TextInput>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.inputholder}
            placeholder="Password"
          ></TextInput>
          
            <TouchableOpacity style={styles.registerbtn} onPress={handleRegister} title="Register" >
              <Text style={styles.registerbtntext}>Register</Text>
            </TouchableOpacity>
         
        </View>
      </View>
    </KeyboardAwareScrollView >
  );
}

const styles = StyleSheet.create({
  mainregisterContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-around"
  },
  heading: {
    // borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 55,
  },
  headingText: {
    fontSize: 28,
    fontFamily:"Poppins-Medium",
    fontWeight:"800"
  },
  inputContainer: {
    flex: 1,
    // justifyContent:"space-between",
    // borderWidth: 2,
    alignItems: "center",
    width:"100%",
    marginTop: 50,
  },
  inputholderphone:{
    borderWidth: 2,
    height: 55,
    width: "80%",
    borderColor: "#53A4BD",
    borderRadius: 10,
  },
  inputholder: {
    borderWidth: 2,
    height: 55,
    width: "80%",
    borderColor: "#53A4BD",
    borderRadius: 10,
    fontSize: 15,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  phonecontaier:{
    fontSize: 15,
    paddingLeft: 20,
    // borderWidth:2,
    borderRadius:10
  },
  registerbtn: {
    width: "80%",
    height:51,
    borderWidth:2,
    backgroundColor:"#53A4BD",
    borderColor: "#53A4BD",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 25,
    marginBottom: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  registerbtntext:{
    fontSize:23,
    fontFamily:"Poppins-Medium",
    color:"white",
    fontWeight:"800"
  }
});
