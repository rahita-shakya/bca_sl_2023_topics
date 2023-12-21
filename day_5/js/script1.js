const item_Price= 30000;
const discountPercentage = 3.5 ;
const redeemCoin = 20;
const deliveryDistance = 120;
const vatPercentage = 13;
function calculatedisAmount(item_Price,discountPercentage){
    return (item_Price + discountPercentage)/100;
}
function getDiscountVoucherAmt(vCode){
    let amt = 0
    switch(vCode){
        case "1KVC":
            amt = 100
            break;
        case "10KVC":
            amt = 500
            break;
        case "20KVC":
            amt = 1500
            break; 
            return amt;  
         }
}
console
