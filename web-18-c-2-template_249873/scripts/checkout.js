// checkout page
let array = JSON.parse(localStorage.getItem('user')) || [];
let obj = {};
let id;

function confirmCoffee(event){
    event.preventDefault();

    

   let names = document.querySelector('#name').value;
   let number1 = document.querySelector('#number').value;
   let address = document.querySelector('#address').value;

   if(names === '' || number1 === '' || address === ''){
       alert('Please fill the form carefully');
   }else{
        setTimeout(function(){
            alert('Your Order is accepted')
        },0000);
        setTimeout(function(){
            alert('Your order is being prepared')
        },3000)
        setTimeout(function(){
            alert('Your order is being packed')
        },8000)
        setTimeout(function(){
            alert('Your order is out for delievery')
        },10000)
        setTimeout(function(){
            alert('Order delivered')
        },12000)

        document.querySelector('#name').value = null;
        document.querySelector('#number').value = null;
        document.querySelector('#address').value = null;
   }

    let obj = new getData(name, number1, address);
    array.push(obj);
    localStorage.setItem('user',JSON.stringify(array));
}

function getData(a,b,c){
    this.name = a,
    this.number = b,
    this.address = c;
}