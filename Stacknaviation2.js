import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import TicketTypeSelection from "./Screens/TicketTypeSelection";
import CalenderScreen from "./TicketIssuing/CalenderScreen";
import TicketCountGenerator from "./TicketIssuing/TicketCountGenerator";
import PaymentSelector from "./TicketIssuing/PaymentSelector";
import QRScreen from "./QRCodeGeneration/QRcodeShowigScreen";

const stacktwo=createNativeStackNavigator();

export default function StacknavigtorTwo(){
    return(
        <stacktwo.Navigator initialRouteName="homescreenlgoin" >
            <stacktwo.Screen component={HomeScreen} name="homescreenlgoin" />
            <stacktwo.Screen component={TicketTypeSelection} name="TicketTypeSelection" />
            <stacktwo.Screen component={CalenderScreen} name="calenderScreen"/>
            <stacktwo.Screen component={TicketCountGenerator} name="ticketCountScreen"/>
            <stacktwo.Screen component={PaymentSelector} name="paymentselectScreen"/>
            <stacktwo.Screen component={QRScreen} name="QRScreen"/>
        </stacktwo.Navigator>
    )
}