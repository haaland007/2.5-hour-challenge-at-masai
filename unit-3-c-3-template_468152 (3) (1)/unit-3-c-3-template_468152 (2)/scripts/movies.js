// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page 
let id;
var amounts=localStorage.getItem("amount");
document.getElementById("wallet").innerText=amounts;
async function movieData(){
    try{
        let query=document.getElementById("search").value;
        let url=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=20a65694&s=${query}`)
       let data= await url.json();
        mappingData(data.Search);
    }catch(err){
        console.log("err");
    }
   

}

let mappingData=(data)=>{
    // console.log('data:', data)
    document.getElementById("movies").innerHTML=null;
    data.forEach(el => {
        console.log('element:', el)
        let row=document.createElement("div");
        row.setAttribute("class","row");
        let img=document.createElement("img");
        img.setAttribute("id","img");
        let p1=document.createElement("h1");
        let book=document.createElement("button")
        img.src=el.Poster;
        p1.innerText=el.Title;
        book.setAttribute("class","book_now");
        book.innerText="Book Now";
        book.addEventListener("click",function(){
            bookingConfirm(el)
        })
        row.append(img,p1,book);
        document.getElementById("movies").append(row);
    });   
}
// var araray=[]
function bookingConfirm(el){
    // araray.push(el)
localStorage.setItem("movie",JSON.stringify(el));
window.location.href="checkout.html";
}

async function main(){
    let data= await movieData();
    if(data==undefined){
        return false;
    }
    movieData();
}

function debounce(main,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(() => {
        main();
    }, delay);
}