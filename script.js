let tx = document.getElementsByTagName("textarea");
let main = document.querySelector("main");
let add_first= document.querySelector("#add_first");

textareaResize()
add_first.addEventListener("click", ()=>{
    add_first.style.display='none';
add_List();
textareaResize();

   
});
function liDelete(){
    
}

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
bin_btn.setAttribute('class','bin')
bin_btn.setAttribute('onClick',"liDelete()")
li.append(bin_btn)

let nav = document.createElement('nav');
article.append(nav)

let add_btn = document.createElement('button');
add_btn.setAttribute('class','add');
nav.append(add_btn)

let bin_btn2 = document.createElement('button')
bin_btn2.setAttribute('class','bin')
nav.append(bin_btn2);

}

function textareaResize(){
for (let i = 0; i < tx.length; i++) {

  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}}