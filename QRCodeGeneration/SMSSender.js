import { useContext } from "react"
import { useUserID } from "../context/UserIDContext";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';




export default function SMSSender(userphoneNumber,urlString){
    console.log("phone eee "+userphoneNumber);
    console.log("url string  "+urlString);
    const minifunction=async(userphoneNumber,urlString)=>{
    console.log("user phone "+userphoneNumber);
    console.log("url tring "+urlString);
    try {
        const response = await axios.post('https://ezyrail.onrender.com/sendsms/SMS', {
            "phoneNo":userphoneNumber,
            "URLlink":urlString
        });
        if (response.statusCode=="S1000") {
            showMessage({
                message: "SMS Successfully Send To your Mobile",
                type: "success",
              });
        }else{
            showMessage({
                message: "SMS Successfully Send To your Mobile",
                type: "success",
              });
        }
        
      } catch (error) {
        showMessage({
          message: "SMS Sending Failed",
          type: "warning",
        });
        console.error('SMS Sending failed', error);
      }
    }
    minifunction(userphoneNumber,urlString);
}