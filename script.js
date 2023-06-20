let tx;
let main = document.querySelector("main");
let add_first= document.querySelector("#add_first");
let liDeleteBtn;
let articleDeleteBtn;
let liAddBtn;
let AddArticleDivCreated;


add_first.addEventListener("click", ()=>{
    add_first.style.display='none';
add_List();
addNewArticle()

});




function add_List(){
let article = document.createElement("article");
main.append(article);

let h2 =document.createElement("h2");
article.prepend(h2);

let title_input =document.createElement("input");
title_input.setAttribute('type','text');
title_input.setAttribute('placeholder', 'Nowa Lista');
h2.append(title_input);

let ul = document.createElement('ul')
article.append(ul);

let li = document.createElement('li');
ul.append(li)

let textarea = document.createElement('textarea');
textarea.setAttribute('placeholder','wpisz zadanie')
li.append(textarea);
tx = document.getElementsByTagName("textarea");

let bin_btn = document.createElement('button')
bin_btn.setAttribute('class','bin liDel')
li.append(bin_btn)
liDeleteBtn = document.querySelectorAll('.liDel')
liDeleteBtn = Array.from(liDeleteBtn)




let nav = document.createElement('nav');
article.append(nav)

let add_btn = document.createElement('button');
add_btn.setAttribute('class','add liAdd');
nav.append(add_btn)
liAddBtn = document.querySelectorAll('.liAdd')
liAddBtn = Array.from(liAddBtn)




let bin_btn2 = document.createElement('button')
bin_btn2.setAttribute('class','bin articleDelete')
nav.append(bin_btn2);
articleDeleteBtn = document.querySelectorAll('.articleDelete');
articleDeleteBtn = Array.from(articleDeleteBtn);



ArticleDelete();
liAdd()
textareaResize();
LiDelete();

}

function textareaResize(){
  tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {

  tx[i].setAttribute("style", "overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}}
function LiDelete(){
  
let latest = liDeleteBtn.slice(-1)[0];
  latest.addEventListener('click', ()=>{

   latest.parentElement.remove();
    
    
  })
}
function ArticleDelete(){
  let latest = articleDeleteBtn.slice(-1)[0];
    latest.addEventListener('click', ()=>{
     
  
      latest.parentElement.parentElement.remove();
      
    })
}
  
function liAdd(){
  
  
  let latest = liAddBtn.slice(-1)[0];
   
  latest.addEventListener('click', ()=>{
      
     
    
      let li = document.createElement('li');
      latest.parentElement.previousElementSibling.append(li)
     
     let textarea = document.createElement('textarea');
     textarea.setAttribute('placeholder','wpisz zadanie')
     li.append(textarea);
     tx = document.getElementsByTagName("textarea");
     textareaResize();
     
     let bin_btn = document.createElement('button')
     bin_btn.setAttribute('class','bin liDel')
     li.append(bin_btn)
     liDeleteBtn = document.querySelectorAll('.liDel')
     liDeleteBtn = Array.from(liDeleteBtn)
     LiDelete();
  
  })
    
    }


function addNewArticle(){

  let AddArticleDiv = document.createElement('div');
AddArticleDiv.setAttribute('class', 'AddArticleDiv');
main.append(AddArticleDiv);
AddArticleDivCreated = document.querySelector('.AddArticleDiv');
AddArticleDivCreated.addEventListener('click', ()=>{
  add_List();
  main.append(AddArticleDivCreated)

})

let AddArticlePlusOne = document.createElement('div');
AddArticlePlusOne.setAttribute('class','cross one AddArticle');
AddArticleDiv.append(AddArticlePlusOne);

let AddArticlePlusTwo = document.createElement('div');
AddArticlePlusTwo.setAttribute('class','cross two AddArticle');
AddArticleDiv.append(AddArticlePlusTwo);

}
