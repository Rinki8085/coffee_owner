// Add the coffee to local storage with key "coffee"
let arr = JSON.parse(localStorage.getItem('coffee')) || [];

async function getCoffees(){
    let total = arr.length;
    document.getElementById('coffee_count').innerText = `${total}`;
    try{
        let url = 'https://masai-mock-api.herokuapp.com/coffee/menu';

        let res = await fetch(url);

        let data = await res.json();

        return data;
    }catch(e){
        console.log(e);
    }
}

function append(data){
    data.forEach(function(ele){
        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.image;

        let p1 = document.createElement('p');
        p1.innerText = `${ele.title} coffee`;

        let p2 = document.createElement('p');
        p2.innerText = `${ele.price} Rs.`;

        let btn = document.createElement('button');
        btn.innerText = 'Add to Bucket';
        btn.setAttribute('id','add_to_bucket');
        btn.addEventListener('click', function(){
            add_to_bucket(ele);
        })

        box.append(img,p1,p2,btn);
        document.getElementById('menu').append(box);
    })
}

async function main(){

    let datas = await getCoffees();
//  console.log(datas.menu.data)
    append(datas.menu.data)

}

main();

function add_to_bucket(ele){  
    let total = arr.length;  
    arr.push(ele);
    localStorage.setItem('coffee',JSON.stringify(arr));

}

