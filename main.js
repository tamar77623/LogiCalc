let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let airline = document.getElementById('airline');
let land = document.getElementById('land')
let sea = document.getElementById('sea')
let a = false;
let b = false;
let c = false;
let result2 = 0;
let a1 =  document.getElementById('a1')
let inputs = document.getElementById('inputs')
let header = document.getElementById("header");
let hero = document.getElementById('hero')
let trk = document.getElementById('trk');
let card = document.getElementById('card')
let contact = document.getElementById('contact')
let rates = document.getElementById('rates')
let end = document.getElementById('end')
function Abbreviation(){
    header.style.display = 'none';
    hero.style.display = 'none';
    card.style.display = 'none';
    trk.style.display = 'none';
    contact.style.display = 'none'
    inputs.style.display = 'block';
    land.style.display = 'none';
    airline.style.display = 'none';
    sea.style.display = 'none'
    end.style.display = 'none'

}
btn1.onclick = function(){
    airline.style.border = '2px solid blue'
    sea.style.display = 'none';
    a = true;
    airline.style.display = 'none';
    btn1.innerText = 'The selection has been made';
    Abbreviation();
}
btn2.onclick = function(){
    land.style.border = '2px solid blue'
    btn2.innerText = 'The selection has been made';
    airline.style.display ='none';
    sea.style.display = 'none'
    b = true;
    land.style.display = 'none';
    Abbreviation();
}
btn3.onclick = function(){
    sea.style.border = '2px solid blue'
    btn3.innerText = 'The selection has been made';
    airline.style.display = 'none';
    sea.style.display = 'none'
    c = true;
    Abbreviation();
}
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4')
let btn4 = document.getElementById('btn4')
let h3 = document.getElementById('h3')
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let main = document.getElementById('main')
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1800);
}
btn4.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = 'Enter Actual Weight';
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = 'enter Length';
        h3text();
        return;
    }
    if(inp3.value === ""){
        h3.innerText = 'enter Width';
        h3text();
        return;
    }
    if(inp4.value === ""){
        h3.innerText = 'enter Height';
        h3text();
        return;
    }
    account();
}
function account(){
    let result1 = (Number(inp2.value)* Number(inp3.value) * Number(inp4.value) / 5000)
    console.log(result1)
    if(a === true){
        result2 = result1 * 12;
    }
    else if(b === true){
        result2 = result1 * 6;
    }
    else if(c === true){
        result2 = result1 * 4;
    }
    console.log(result2)
    span1.innerText = `Chargeable Weight: ${result1}`;
    span2.innerText = `Total Cost: ${result2}`;
    main.style.display = 'block'
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
    inp5.value = '';
}
main.onclick = function(){
    location.reload();
}
let inp5 = document.getElementById('inp5');
let track = document.getElementById('track')
let span3 = document.getElementById('span3')
let span4 = document.getElementById('span4')
const words = ["Order Placed", "In Transit", "Out for Delivery", "Delivered"];
const randomIndex = Math.floor(Math.random() * words.length);
console.log(words[randomIndex]); 
track.onclick = function(){
    if(inp5.value != ''){
    const words = ["Order Placed", "In Transit", "Out for Delivery", "Delivered"];
    const randomIndex = Math.floor(Math.random() * words.length);
    span4.innerText = words[randomIndex];
    span3.style.display = 'none'
    inp5.value = '';
    }else{span4.innerText = 'Please enter the shipment number'; setTimeout(() => {span4.innerText = '';}, 1200);}
}
rates.onclick = function(){
    Abbreviation();
}
a1.onclick = function(){
    Abbreviation();
}