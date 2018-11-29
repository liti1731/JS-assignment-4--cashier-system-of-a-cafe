var cashierList=[];
var baristaList=[];
var price=0;
var income=0;
var a=0;
var b=0;
var c=0;
/*******************************************/
var cashierListDiv=document.getElementById("cashierList");
var baristaListDiv=document.getElementById("baristaList");
var highlightDiv=document.getElementById("highlight");
var managerPriceDiv=document.getElementById("managerPrice");
var totalDiv=document.getElementById("total");
var managerListDiv=document.getElementById("managerList");
/***********cashier********************************/

function espresso(){
    cashierList.push("espresso");
    price+=27;
    income+=27;
    cashierListDiv.innerHTML+="<p>espresso</p>";  
	totalDiv.innerHTML="Total: $"+price;
	managerPriceDiv.innerHTML="<h3>Today's total: $"+income+"</h3>";
}
function latte(){
    cashierList.push("latte");
    price+=40;
    income+=40;
    cashierListDiv.innerHTML+="<p>latte</p>";  
	totalDiv.innerHTML="Total: $"+price;
	managerPriceDiv.innerHTML="<h3>Today's total: $"+income+"</h3>";
}
function cappuccino(){
    cashierList.push("cappuccino");
    price+=35;
    income+=35;
    cashierListDiv.innerHTML+="<p>cappuccino</p>";  
	totalDiv.innerHTML="Total: $"+price;
	managerPriceDiv.innerHTML="<h3>Today's total: $"+income+"</h3>";
}


function finishOrder(){
	for (var i = 0; i < cashierList.length; i++) {
     	baristaList.push(cashierList[i]);
	}
	cashierList=[];
    cashierListDiv.innerHTML=[];
    baristaListDiv.innerHTML="";
    for (var i = 0; i < baristaList.length; i++) {
     	baristaListDiv.innerHTML+=baristaList[i]+"<br/>";
	}

	income+= price;
	managerPriceDiv.innerHTML="<h3>Today's total: $"+income+"</h3>";
    price=0;
    totalDiv.innerHTML="Total: $"+price; 
}

/***********barista******************************/
function nextDrink(){
	    highlightDiv.innerHTML=baristaList[0];

	    if (baristaList[0]=="espresso") {
			a+=1;
		}else if (baristaList[0]=="latte") {
			b+=1;
	    }else if (baristaList[0]=="cappuccino") {
			c+=1;
	    }

    baristaList.shift();
    baristaListDiv.innerHTML="";
    for (var i = 0; i < baristaList.length; i++) {
     	baristaListDiv.innerHTML+=baristaList[i]+"<br/>";
	}
    
   
	    
    

    
    


    managerListDiv.innerHTML="Espresso: "+a+"<br/>"+"Latte: "+b+"<br/>"+"Cappuccino: "+c;
}
