import axios from 'axios';

export default RequestOTP=async(phoneNo)=>{
    try {
        const response = await axios.post(
            "https://ezyrail.onrender.com/sendsms/OTP",
            {
                "phoneNo":phoneNo
            }
          );
          console.log(response.data);
          return response.data;
          
    } catch (error) {
        console.log("OTP request Error "+error);
        return  null;
    }
    
    
}