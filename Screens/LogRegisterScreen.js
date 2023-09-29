import React, { useState,useContext,useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function LogRegisterScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <Image source={require("../assets/mainlogo.png")} />,
      headerShadowVisible: false,
    })
  }, [navigation])


  return (
    <View style={styles.maincontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.textContainer}>WELCOME TO Ezy Rail</Text>
        <Text style={styles.textContainersmall}>
          Your trusted railway solution provider
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/mainlogo.png")} />
      </View>
      <View style={styles.buttoncontainermain}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttoncontainernext}
          onPress={() => navigation.navigate("registerScreen")}
        >
          <Text style={styles.btntext2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textContainer: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontWeight: "800",
  },
  titlecontainer: {
    // borderColor: "Red",
    // borderWidth: 2,
    borderStyle: "solid",
    textAlign: "center",
  },
  textContainersmall: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontWeight:"700"
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    // marginTop: 40,
    // marginBottom: 40,
  },
  buttoncontainermain: {
    width: "100%",
    // borderWidth: 2,
    // borderColor: "red",
    flexDirection: "column",
    alignItems: "center",
    // marginTop:5
  },
  buttoncontainernext: {
    width: "75%",
    height:47,
    flexDirection: "column",
    borderColor: "#53A4BD",
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor:"#53A4BD",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    // backgroundColor:"white"
  },
  buttoncontainer: {
    width: "75%",
    height:47,
    flexDirection: "column",
    borderColor: "#53A4BD",
    borderWidth: 3,
    borderRadius: 12,
    marginBottom: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    // alignItems:"center"
  },
  btntext: {
    fontSize:23,
    fontFamily:"Poppins-Medium",
    fontWeight:"800"
  },
  btntext2: {
    fontSize:23,
    fontFamily:"Poppins-Medium",
    color:"white",
    fontWeight:"800"
  },
});
