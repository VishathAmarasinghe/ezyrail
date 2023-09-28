import axios from 'axios';

export default RespondOTP=async(refno,otpcode)=>{
        console.log("final OTP "+refno);
        console.log("final Ref No "+otpcode);
    try {
        
        const response = await axios.post(
            "https://ezyrail.onrender.com/sendsms/OTPres",
            {
                "referenceNo":refno,
                "OTP":otpcode
            }
          );
          console.log(response.data);
          return response.data;
          
    } catch (error) {
        console.log("OTP respond Error new "+error);
        return null;
    }
    
    
}