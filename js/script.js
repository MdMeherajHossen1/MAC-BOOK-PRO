// getTotalPrice
function getTotalPrice(){
    const basicPrice = parseInt(document.getElementById('basic-cost').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
         totalPrice.innerText = basicPrice + memoryCost + storageCost + deliveryCost;
    
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




// 8GB Memory cost
document.getElementById('memory-btn1').addEventListener('click', function(){
     getMemoryCost(0);
     getTotalPrice();
});

// 16GB Memory cost
document.getElementById('memory-btn2').addEventListener('click', function(){
   getMemoryCost(180);
   getTotalPrice();
});

// 256GB storage cost
document.getElementById('storage-btn1').addEventListener('click', function(){
    getStorageCost(0);
    getTotalPrice();
});

// 512GB storage cost
document.getElementById('storage-btn2').addEventListener('click', function(){
    getStorageCost(100);
    getTotalPrice();
});

// 1TB storage cost
document.getElementById('storage-btn3').addEventListener('click', function(){
   getStorageCost(180);
   getTotalPrice();
});

// free delivery
document.getElementById('delivery-btn1').addEventListener('click', function(){
    getDeliveryCost(0);
    getTotalPrice();
});

// free delivery
document.getElementById('delivery-btn2').addEventListener('click', function(){
    getDeliveryCost(20);
    getTotalPrice();
})

