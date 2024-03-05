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
document.body.append(heading);//appende the heading to the body
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
  col.append(card);//appende the card to the col
  row.append(col);//appende the col to the row
  container.append(row);//appended the row to the container
  document.body.append(container);//appended the container to the body
  
    }
  }catch(error)//error handling using catch block
  {
    let span = document.createElement("span");
        span.className = "span"
        span.innerHTML = "Oops!! Data Not Found"
   }
  }
  get_data()//function call