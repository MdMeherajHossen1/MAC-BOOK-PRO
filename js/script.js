// getTotalPrice
function getTotalPrice(){
    const basicPrice = parseInt(document.getElementById('basic-cost').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const finalPrice = document.getElementById('final-price');
    const totalPrice = document.getElementById('total-price');
         totalPrice.innerText = basicPrice + memoryCost + storageCost + deliveryCost;
         finalPrice.innerText = totalPrice.innerText;
}

// memory cost function
function getMemoryCost(cost){
    document.getElementById('memory-cost').innerText =parseInt(cost);
}

// storage cost function
function getStorageCost(cost){
    document.getElementById('storage-cost').innerText =parseInt(cost);
}

// deliveryCost function
function getDeliveryCost(cost){
    document.getElementById('delivery-cost').innerText = parseInt(cost);
}




// 8GB Memory cost and final price
document.getElementById('memory-btn1').addEventListener('click', function(){
     getMemoryCost(0);
     getTotalPrice();
});

// 16GB Memory cost and final price
document.getElementById('memory-btn2').addEventListener('click', function(){
   getMemoryCost(180);
   getTotalPrice();
});

// 256GB storage cost and final price
document.getElementById('storage-btn1').addEventListener('click', function(){
    getStorageCost(0);
    getTotalPrice();
});

// 512GB storage cost and final price
document.getElementById('storage-btn2').addEventListener('click', function(){
    getStorageCost(100);
    getTotalPrice();
});

// 1TB storage cost and final price
document.getElementById('storage-btn3').addEventListener('click', function(){
   getStorageCost(180);
   getTotalPrice();
});

// free delivery
document.getElementById('delivery-btn1').addEventListener('click', function(){
    getDeliveryCost(0);
    getTotalPrice();
});

//  delivery
document.getElementById('delivery-btn2').addEventListener('click', function(){
    getDeliveryCost(20);
    getTotalPrice();
})

// apply promo and get discount
document.getElementById('apply-btn').addEventListener('click', function(){
     const promoInput = document.getElementById('promo-code').value;
     document.getElementById('promo-code').value = '';
     if(promoInput == 'stevekaku'){
         const totalPrice = document.getElementById('total-price');
         const discount = parseInt(totalPrice.innerText) /(100/20) ;
         document.getElementById('final-price').innerText = totalPrice.innerText -discount;
     }
})

