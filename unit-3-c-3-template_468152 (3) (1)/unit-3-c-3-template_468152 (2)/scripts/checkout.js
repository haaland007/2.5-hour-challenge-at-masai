// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var amounts=localStorage.getItem("amount");
document.getElementById("wallet").innerText=amounts;
var el=JSON.parse(localStorage.getItem("movie"));
// console.log(data);

function mappingData(el){
        let row=document.createElement("div");
        row.setAttribute("class","row");
        let img=document.createElement("img");
        img.setAttribute("id","img");
        let p1=document.createElement("h1");
        img.src=el.Poster;
        p1.innerText=el.Title;       
        row.append(img,p1);
        document.getElementById("movie").append(row);
    };   

    mappingData(el)

    
function checkout(e){
    e.preventDefault();
    var num=document.getElementById("number_of_seats").value;
    if(amounts<num*100){
        alert("Insufficient Balance !")
    }
    else{
        amounts=amounts-num*100;
        document.getElementById("wallet").innerText=amounts;
        localStorage.setItem("amount",JSON.stringify(amounts));
        alert("Booking Successful!");
    }
    
}


//  box.append(title,image);
//  document.getElementById("movie").append(box);
