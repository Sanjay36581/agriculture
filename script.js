let blockchain=[];

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

window.location="dashboard.html";

}else{

document.getElementById("msg").innerText="Invalid Login";

}

}

function addRecord(){

let farmer=document.getElementById("farmer").value;
let product=document.getElementById("product").value;
let stage=document.getElementById("stage").value;

let block={

index:blockchain.length+1,
farmer:farmer,
product:product,
stage:stage

};

blockchain.push(block);

let table=document.getElementById("tableBody");

let row=table.insertRow();

row.insertCell(0).innerText=block.index;
row.insertCell(1).innerText=farmer;
row.insertCell(2).innerText=product;
row.insertCell(3).innerText=stage;

}

function trackProduct(){

let name=document.getElementById("searchProduct").value;

let list=document.getElementById("results");

list.innerHTML="";

blockchain.forEach(b=>{

if(b.product===name){

let li=document.createElement("li");

li.innerText="Block "+b.index+" - "+b.stage;

list.appendChild(li);

}

});

}