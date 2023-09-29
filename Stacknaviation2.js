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
        <stacktwo.Navigator   screenOptions={{headerTitleStyle: { textAlign: 'center' }}} initialRouteName="homescreenlgoin" >
            <stacktwo.Screen   component={HomeScreen} options={{title:"DashBoard",
        headerStyle: {
            backgroundColor: 'white',
            
          },
          headerTitleStyle: { textAlign: 'center' },
          
          
          }} name="homescreenlgoin" />
            <stacktwo.Screen component={TicketTypeSelection} options={{title:"Ticket Selection"}} name="TicketTypeSelection" />
            <stacktwo.Screen component={CalenderScreen} options={{title:"Select Date & Journey"}} name="calenderScreen"/>
            <stacktwo.Screen component={TicketCountGenerator} options={{title:"Ticket Count & Journey Type"}} name="ticketCountScreen"/>
            <stacktwo.Screen component={PaymentSelector} options={{title:""}} name="paymentselectScreen"/>
            <stacktwo.Screen component={QRScreen} options={{title:"QR",headerShown:false}}  name="QRScreen"/>
        </stacktwo.Navigator>
    )
}