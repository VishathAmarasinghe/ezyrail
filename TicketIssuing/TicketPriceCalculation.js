export default priceCalculator=(fromvalue,tovalue,membercount,returnType)=>{
    var initialPrice=Math.abs(fromvalue-tovalue)*25;
    var chargeforteam=initialPrice*membercount;
    var totalcharge=chargeforteam*returnType
    return totalcharge;
}