import * as React from "react";
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

export default function PaymentSelector({ navigation }) {
  const route = useRoute();

  const date = route.params.targetDate;
  const fromValue = route.params.fromValue;
  const toValue = route.params.toValue;
  const totalcharge = route.params.totalcharge;
  const changeMemberCount = route.params.changeMemberCount;
  const journeyType = route.params.journeyType;

  const handleCardPaymentPress = () => {
    // Handle card payment logic here
    console.log("Current Date "+toValue);
    navigation.navigate("QRScreen",{totalcharge:totalcharge,changeMemberCount:changeMemberCount,
        journeyType:journeyType,targetDate:date,fromValue:fromValue,toValue:toValue});
  };

  const handleEzyCashPress = () => {
    // Handle Ezy Cash payment logic here
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Options</Text>
      <TouchableOpacity style={styles.button} onPress={handleCardPaymentPress}>
        <Text style={styles.buttonText}>Card Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEzyCashPress}>
        <Text style={styles.buttonText}>Ezy Cash</Text>
      </TouchableOpacity>
    </View>
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
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
