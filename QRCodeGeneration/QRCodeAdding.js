import axios from 'axios';

export default StoreQR = async (sendData) => {
  try {
    const response = await axios.post("https://ezyrail.onrender.com/QR/store", {
      QRURL: sendData.QRURL,
      QRUniqueID: sendData.QRUniqueID,
      QRUserID: sendData.QRUserID,
      BookedDate: sendData.BookedDate,
      Amount: sendData.Amount,
      TicketCount: sendData.TicketCount,
    });
    console.log("successed");
  } catch (error) {
    console.log("QR storing44 Error" + error);
  }
};
