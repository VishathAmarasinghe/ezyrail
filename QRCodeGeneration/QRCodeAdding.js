export default QrStoringMethod = (QRURL,QRUniqueID,QRUserID,BookedDate,Amount,TicketCount) => {
    console.log("loggger");
  const StoreQR = async (sendData) => {
    try {
      const response = await axios.post(
        "https://ezyrail.onrender.com/QR/store",
        {
          QRURL: "Ath6ewew",
          QRUniqueID: "Ssd2th23eeeeeeee2",
          QRUserID: "vishath",
          BookedDate: "23hdd323ddfff",
          Amount: "23e244767000",
          TicketCount: "10",
        }
      );
      console.log("successed");
    } catch (error) {
      console.log("QR storing44 Error"+ error);
    }
  };
  StoreQR(QRURL,QRUniqueID,QRUserID,BookedDate,Amount,TicketCount);
};
