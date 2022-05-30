// On clicking remove button the item should be removed from DOM as well as localstorage.

let data = JSON.parse(localStorage.getItem('coffee'));
let sum = 0;
for(let i=0; i<data.length; i++){
    sum += data[i].price;
}
document.getElementById('total_amount').innerText = sum;

window.onload = () => {
    displayData(data);
}

function displayData(data) {
    document.getElementById('bucket').innerHTML = null;

    data.forEach(function(ele,index){

        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.image;

        let p1 = document.createElement('p');
        p1.innerText = `${ele.title} Coffee`;

        let p2 = document.createElement('p');
        p2.innerText = `${ele.price} Rs`;

        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.setAttribute('id','remove_coffee');
        btn.addEventListener('click',function(){
            removeProduct(ele,index);
        })

        box.append(img,p1,p2,btn);
        document.getElementById('bucket').append(box);

    })

    
}

function removeProduct(ele,index){

    data.splice(index,1);
    localStorage.setItem('coffee',JSON.stringify(data));
    displayData(data);

}