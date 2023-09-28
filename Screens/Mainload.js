import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.textContainer}>EZY RAIL</Text>
      </View>
      <Text>main Screen</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo2.jpg")} />
      </View>
      <View style={styles.buttoncontainermain}>
        <View style={styles.buttoncontainer}>
          <Button onPress={()=>navigation.navigate('logregisterScreen')} title="Get Started"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  textContainer: {
    fontSize: 50,
    textAlign: "center",
  },
  titlecontainer: {
    borderColor: "Red",
    borderWidth: 2,
    borderStyle: "solid",
    textAlign: "center",
    marginTop: 80,
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  buttoncontainermain:{
    width:"100%",
    borderWidth:2,
    borderColor:"red",
    flexDirection:"column",
    alignItems:"center"
  }
  ,
  buttoncontainer: {
    width: "80%",
    flexDirection: "column",
    // alignItems:"center"
  },
});
