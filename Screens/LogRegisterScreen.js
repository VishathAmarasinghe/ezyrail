import * as React from 'react';
import { Text, View,StyleSheet,Image,Button } from 'react-native';




export default function LogRegisterScreen({navigation}) {
    return (
      <View style={styles.maincontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.textContainer}>WELCOME TO Ezy Rail</Text>
        <Text style={styles.textContainersmall}>Your trusted railway solution provider</Text>
      </View>
      <Text>main Screen</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/mainlogo.png")} />
      </View>
      <View style={styles.buttoncontainermain}>
        <View style={styles.buttoncontainer}>
          <Button color="transparent" onPress={()=>navigation.navigate('login')} title="Login"></Button>
        </View>
        <View style={styles.buttoncontainernext}>
          <Button color="#53A4BD" onPress={()=>navigation.navigate('registerScreen')} title="Sign Up"></Button>
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
    fontSize: 30,
    textAlign: "center",
  },
  titlecontainer: {
    borderColor: "Red",
    borderWidth: 2,
    borderStyle: "solid",
    textAlign: "center",
    marginTop: 80,
  },
  textContainersmall:{
    fontSize: 20,
    textAlign: "center",
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
    alignItems:"center",
    marginTop:5
  },
  buttoncontainernext:{
    width: "80%",
    flexDirection: "column",
    borderRadius:12
    // backgroundColor:"white"
  }
  ,
  buttoncontainer: {
    width: "80%",
    flexDirection: "column",
    borderColor:"#53A4BD",
    borderWidth:2,
    borderRadius:12,
    marginBottom:15
    // alignItems:"center"
  },
});
