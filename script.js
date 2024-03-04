//function to create a heading tag

function create_header(tagname,attrname1,attrvalue1,content){
    let header = document.createElement(tagname);
    header.setAttribute(attrname1,attrvalue1);
    header.innerText = content;
    return header
}
//function to create div tag

function create_div(tagname,attrname2,attrvalue2){
    let divtag = document.createElement(tagname);
    divtag.setAttribute(attrname2,attrvalue2);
    return divtag
}
//created a heading tag using the create_header function

let heading = create_header("h1","class","heading","MOST POPULAR MEME");
document.body.append(heading);
//created a div tag using the create_div function

let container = create_div("div","class","container");
let row = create_div("div","class","row");
//async ,await function to fetch data from the API

async function get_data(){
    try{
    let res =  await fetch("https://api.imgflip.com/get_memes") 
    let res1 = await res.json()
    let memes = res1.data.memes//created a variabel and stored  the data fetched in it
    //console.log (memes)
    for(var i=0;i<memes.length;i++){
    var col = document.createElement("div");
    col.className ="col-md-4"
    var card = document.createElement("div")
    card.className = "main"
    card.innerHTML =`<div class="main1">
     <img src="${memes[i].url}" class="main2" >
        <div class="main3">
            <p class="main4">${memes[i].name}</p>
        </div>
    </div>`
  col.append(card);
  row.append(col);
  container.append(row);
  document.body.append(container);
  
    }
  }catch(error){
    console.log("Data not found")//error handling
  }
  
  }
  get_data()//function call