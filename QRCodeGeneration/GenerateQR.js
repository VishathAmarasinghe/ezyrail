import { useContext } from "react"
import { useUserID } from "../context/UserIDContext";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';





export default QRgnerator=(date,price,fromValue,toValue,Counttickets)=>{
    const {userID,userphoneNumber}=useUserID();
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    const month=currentDate.getMonth();
    const day=currentDate.getDay();
    const miliseconds=currentDate.getMilliseconds();

    const uniqueIDGenerator=userID+year+month+day+miliseconds+fromValue+"11154";

    const urlString="https://quickchart.io/qr?text=\"UserID:"+userID+",BookedDate:"+date+",From:"+fromValue+",toValue:"+toValue+",ticketCount:"+Counttickets+",amount:"+price+",UniqueID:"+uniqueIDGenerator+"\"&size=200";


    





    return urlString;
}