//! THIS IS A TEST ONE (INCORRECT)

// const originalPrice = 120;
// const discount = 18;

const easierCoupons = [
    {
        name: "secret_coupon",
        discount: 15,
    },
    {
        name: "AlanSeyfir",
        discount: 30,
    },
    {
        name: "absol",
        discount: 25,
    },
]

const coupons = [
    "secret_coupon",
    "AlanSeyfir",
    "absol",
];

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

function calculatePriceWithDiscount(price, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

calculatePriceWithDiscount(100,12)

//Good way to show variables
// console.log({
//     originalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// });

function buttonDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    let discount;

    switch(couponValue){
        case coupons[0]:// "secret_coupon",
            discount = 15;
            break;
        case coupons[1]:// "AlanSeyfir",
            discount = 30;
            break;
        case coupons[2]:// "absol",
            discount = 25;
            break;
    }

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `Price with discount is: $${priceWithDiscount}`;
}

//2 solution, reads errors
function validateCoupon(){
    if (!coupons.includes(couponValue)) {
        alert(`Coupon ${couponValue} is not valid`)
    }else if(couponValue === "secret_coupon"){
        discount = 15;
    }else if(couponValue === "AlanSeyfir"){
        discount = 30;
    }else if(couponValue === "absol"){
        discount = 25;
    }
}

const isCouponValid = (coupon) => {return coupon.name === couponValue;}

const userCoupon = coupons.find(isCouponValid);
function validateCoupon3Solution() {
    if (!userCoupon) {
        alert(`Coupon ${userCoupon} is not valid`)
    }else{
        const discount = easierCoupons.discount;
        const priceDiscount = calculatePriceWithDiscount(priceValue, discount);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = `Price with discount is: $${priceDiscount}`;
    }
}
