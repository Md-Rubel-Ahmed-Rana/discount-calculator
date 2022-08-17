
const discountBtn = document.getElementById("discount-btn");
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", () => {
    const promoElement = document.getElementById("promo-code");
    const promoCode = promoElement.value;
    console.log(promoCode);
    
    if(promoCode === "DOM") {
            discountBtn.addEventListener("click", () => {
            getDiscount();
        })
    } else{
        alert("You have not got discount!")
    }
})


const getDiscount =  () => {
    const getPrice = getPriceElement("mainPrice")
    const discount = (getPrice / 100) * 30;
    const discountPrice = getPrice - discount;
    const discountElement = document.getElementById("discount-price");
    discountElement.innerText = discountPrice;

}

const getPriceElement = (elementId) => {
    const priceElement = document.getElementById(elementId);
    const priceString = priceElement.innerText;
    const getPrice = parseFloat(priceString);

    return getPrice;
}


