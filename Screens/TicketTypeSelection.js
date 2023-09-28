import * as React from "react";
import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";

export default function TicketTypeSelection({navigation}) {
  return (
    <View style={styles.mainholder}>
      <Text>Select Type</Text>
      <View style={styles.mainButtonContaier}>

      
      <View style={styles.buttoncontainernext}>
        <Button
          color="#53A4BD"
          onPress={() => navigation.navigate("calenderScreen")}
          title="Normal Ticket"
        ></Button>
      </View>

      <View style={styles.buttoncontainernext}>
        <Button
          color="#53A4BD"
          onPress={() => navigation.navigate("registerScreen")}
          title="Seat Reservation"
        ></Button>
      </View>

      <View style={styles.buttoncontainernext}>
        <Button
          color="#53A4BD"
          onPress={() => navigation.navigate("registerScreen")}
          title="Season"
        ></Button>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green",
  },
  buttoncontainernext:{
    width: "80%",
    flexDirection: "column",
    borderRadius:12,
    height:55,
    marginBottom:20
    // backgroundColor:"white"
  },
  mainButtonContaier:{
    borderWidth:2,
    borderColor:"red",
    width:"100%",
    flexDirection:"column",
    alignItems:"center"
  }
});
