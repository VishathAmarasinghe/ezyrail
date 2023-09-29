import React, { useState,useContext } from "react";
import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import axios from 'axios';
import { saveAuthToken } from "../Tokens/TokenService";
import { useEffect } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useUserID } from "../context/UserIDContext";



export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {SetUserID,SetuserPhoneNo} =useUserID();


  useEffect(()=>{
    setUsername("");
    setPassword("");
    SetUserID("");
  },[])

  const handleLogin = async () => {
    if (username.length!=0 && password.length!=0) {
      try {
        const response = await axios.post('https://ezyrail.onrender.com/api/auth/login', {
          username,
          password,
        });
        const userIDget = response.data.userID;
        const userPhoneNo=response.data.userphone;
        console.log("response login "+userIDget);
        SetUserID(userIDget);
        SetuserPhoneNo(userPhoneNo);
        const token = response.data.token;
        saveAuthToken(token);

        
        showMessage({
          message: "Login Successfull",
          type: "success",
        });
        navigation.navigate("DrawerNav")
      } catch (error) {
        showMessage({
          message: "Please check Your userName and Password",
          type: "warning",
        });
        console.error('Login failed', error);
      }
    }else{
      setUsername("");
      setPassword("");
      showMessage({
        message: "please check the details",
        type: "warning",
      });
    }
    
  };
  return (
    <KeyboardAwareScrollView>
    <View style={styles.mainregisterContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Let's Get You In</Text>
      </View>
      <View style={styles.loginimg}>
        <Image source={require("../assets/loginimg.png")}></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputholder}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="First Name"
        ></TextInput>
        <TextInput
          style={styles.inputholder}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Last Name"
        ></TextInput>
        <View style={styles.registerbtn}>
          <Button
            onPress={handleLogin}
            title="Login"
          />
        </View>
      </View>
    </View>
          
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainregisterContainer: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor:"#53A4BD"
  },
  heading: {
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },
  headingText: {
    fontSize: 22,
  },
  inputContainer: {
    // flex:1,
    // justifyContent:"space-between",
    borderWidth: 2,
    alignItems: "center",
    marginTop: 80,
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
  registerbtn: {
    width: "80%",
    borderColor: "#53A4BD",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  loginimg: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
});
