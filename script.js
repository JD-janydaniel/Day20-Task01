function create_header(tagname,attrname1,attrvalue1,content){
    let header = document.createElement(tagname);
    header.setAttribute(attrname1,attrvalue1);
    header.innerText = content;
    return header
}

function create_div(tagname,attrname2,attrvalue2){
    let divtag = document.createElement(tagname);
    divtag.setAttribute(attrname2,attrvalue2);
    return divtag
}

let heading = create_header("h1","class","heading","MOST POPULAR MEME");
document.body.append(heading);

let container = document.createElement("div","class","container");

let row = document.createElement("div","class","row");

async function foo(){
    try{
    let res =  await fetch("https://api.imgflip.com/get_memes") 
    let res1 = await res.json()
    let memes = res1.data.memes
    console.log (memes)
    for(var i=0;i<memes.length;i++){
    var col = document.createElement("div");
    col.className ="col-lg-6"
    col.innerHTML =`<div class="card">
     <img src="${memes[i].url}" class="card-img" >
        <div class="card-body">
            <p class="card-text">${memes[i].name}</p>
        </div>
    </div>`
  row.append(col);
  container.append(row);
  document.body.append(container);
  
    }
  }catch(error){
    console.log("Data not found")
  }
  
  }
  foo()