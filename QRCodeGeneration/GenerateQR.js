import { useContext } from "react"
import { useUserID } from "../context/UserIDContext";





export default QRgnerator=(date,price,fromValue,toValue,Counttickets)=>{
    const {userID}=useUserID();
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    const month=currentDate.getMonth();
    const day=currentDate.getDay();
    const miliseconds=currentDate.getMilliseconds();

    const uniqueIDGenerator=userID+year+month+day+miliseconds+fromValue+"11154";

    const stringQR={
        "UserID":userID,
        "BookedDate":date,
        "From":fromValue,
        "toValue":toValue,
        "ticketCount":Counttickets,
        "amount":price,
        "UniqueID":uniqueIDGenerator
    }
    const urlString=`https://quickchart.io/qr?text="UserID:${userID},
    BookedDate:${date},From:$${fromValue},toValue:${toValue},ticketCount:${Counttickets}
    ,amount:${price},UniqueID:${uniqueIDGenerator}"&size=200`;
    return urlString;
}