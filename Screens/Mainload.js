import * as React from "react";
import { Text, View, StyleSheet, Button, Image,TouchableOpacity } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.textContainer}>Ezy Rail</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo2.jpg")} />
      </View>
      <View style={styles.buttoncontainermain}>
        
          <TouchableOpacity style={styles.buttoncontainer} onPress={()=>navigation.navigate('logregisterScreen')} ><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems:"center",
    justifyContent:"space-around"
  },
  textContainer: {
    fontSize: 50,
    textAlign: "center",
    fontFamily:"Poppins-Bold",
    
  },
  titlecontainer: {
    // borderColor: "Red",
    // borderWidth: 2,
    borderStyle: "solid",
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    // marginTop: 40,
    // marginBottom: 40,
    // borderWidth:2
  },
  buttoncontainermain:{
    width:"100%",
    // borderWidth:2,
    // borderColor:"red",
    flexDirection:"column",
    alignItems:"center",
    // marginBottom:50
  }
  ,
  buttoncontainer: {
    width: "70%",
    flexDirection: "column",
    height:45,
    backgroundColor:"#53A4BD",
    borderRadius:8,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // borderRadius:25
    // alignItems:"center"
  },
  buttonText:{
    fontSize:25,
    color:"white",
    fontFamily:"Poppins-Medium"
  }
});
