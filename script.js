let tx=[];
let main = document.querySelector("main");
let add_first= document.querySelector("#add_first");
let liDeleteBtn=[];
let articleDeleteBtn=[];
let liAddBtn = [];
let AddArticleDivCreated;
let articles;
let textAreas=[];
let TextAreasValues = [];
let inputs =[];
let inputsValues= [];
let textareasAmountVariable=[];


if(localStorage.getItem('textareasAmount') != null){
  
  add_first.style.display='none';

  let TextAreasValuesInitial = JSON.parse(localStorage.getItem('TextAreasValues'));
  let inputsValuesInitial = JSON.parse(localStorage.getItem('inputsValues'));
  let textareasAmountVariableInitial =JSON.parse(localStorage.getItem('textareasAmount'))
  
  textareasAmountVariableInitial.forEach((element, index)=>{

    add_List();
    articles[index].querySelector('input').value = inputsValuesInitial[index];
    inputValues()
    
    for(let i = 0; i<element; i++){
   
      let li = document.createElement('li');
      articles[index].querySelector('ul').append(li)
     
     let textarea = document.createElement('textarea');
     textarea.setAttribute('placeholder','wpisz zadanie')
     li.append(textarea);
     textareaResize();
     TextareaValues()
     textAreas = Array.from(document.getElementsByTagName('textarea'));
     tx = Array.from(document.getElementsByTagName("textarea"));
     textareasAmount()
     
     let bin_btn = document.createElement('button')
     bin_btn.setAttribute('class','bin liDel')
     li.append(bin_btn);
   
     LiDelete();
     liDeleteBtn = document.querySelectorAll('.liDel')
     liDeleteBtn = Array.from(liDeleteBtn)

    }
    
  })
  textAreas.forEach((element , index)=>{

textAreas[index].value = TextAreasValuesInitial[index];
TextareaValues()

  })
  addNewArticleBtn()
}

add_first.addEventListener("click", ()=>{
    add_first.style.display='none';
    add_List();
addNewArticleBtn()
firstLi(articles[0].querySelector('ul'))

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
inputValues()
inputs = Array.from(document.getElementsByTagName('input'));

let ul = document.createElement('ul')
article.append(ul);






let nav = document.createElement('nav');
article.append(nav)

let add_btn = document.createElement('button');
add_btn.setAttribute('class','add liAdd');
nav.append(add_btn)
liAdd()
liAddBtn = document.querySelectorAll('.liAdd')

liAddBtn = Array.from(liAddBtn)




let bin_btn2 = document.createElement('button')
bin_btn2.setAttribute('class','bin articleDelete')
nav.append(bin_btn2);
ArticleDelete();
articleDeleteBtn = document.querySelectorAll('.articleDelete');
articleDeleteBtn = Array.from(articleDeleteBtn);







articles = document.getElementsByTagName('article');


textareasAmount()

}
function firstLi(ul){
  let li = document.createElement('li');
ul.append(li)

let textarea = document.createElement('textarea');
textarea.setAttribute('placeholder','wpisz zadanie')
li.append(textarea);
textareaResize();
TextareaValues()
textAreas = Array.from(document.getElementsByTagName('textarea'));
tx = Array.from(document.getElementsByTagName("textarea"));

let bin_btn = document.createElement('button')
bin_btn.setAttribute('class','bin liDel')
li.append(bin_btn)
LiDelete();
liDeleteBtn = document.querySelectorAll('.liDel')
liDeleteBtn = Array.from(liDeleteBtn)

textareasAmount()
}

function textareaResize(){
  
 let  latest = Array.from(document.getElementsByTagName("textarea")).filter(x => !tx.includes(x));

for (let i = 0; i < latest.length; i++) {

  latest[i].setAttribute("style", "overflow-y:hidden;");
  latest[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

}
function LiDelete(){
  
  let latest = Array.from(document.querySelectorAll('.liDel')).filter(x => !liDeleteBtn.includes(x));
  
  latest[0].addEventListener('click', ()=>{

   latest[0].parentElement.remove();
   textAreas = Array.from(document.getElementsByTagName('textarea'));
   TextareaValues()
   textareasAmount()
  })
  
}
function ArticleDelete(){
  let latest = Array.from(document.querySelectorAll('.articleDelete')).filter(x => !articleDeleteBtn.includes(x));
  
    latest[0].addEventListener('click', ()=>{
     
  
      latest[0].parentElement.parentElement.remove();
      articles = document.getElementsByTagName('article');
      textAreas = Array.from(document.getElementsByTagName('textarea'));
      TextareaValues()
      inputValues()
      inputs = Array.from(document.getElementsByTagName('input'));
      textareasAmount()
    })
    
}
  
function liAdd(){
 
  let latest = Array.from(document.querySelectorAll('.liAdd')).filter(x => !liAddBtn.includes(x));

   
  latest[0].addEventListener('click', ()=>{
      
     
      let li = document.createElement('li');
      latest[0].parentElement.previousElementSibling.append(li)
     
     let textarea = document.createElement('textarea');
     textarea.setAttribute('placeholder','wpisz zadanie')
     li.append(textarea);
     textareaResize();
     TextareaValues()
     textAreas = Array.from(document.getElementsByTagName('textarea'));
     tx = Array.from(document.getElementsByTagName("textarea"));
     textareasAmount()
     
     let bin_btn = document.createElement('button')
     bin_btn.setAttribute('class','bin liDel')
     li.append(bin_btn);
   
     LiDelete();
     liDeleteBtn = document.querySelectorAll('.liDel')
     liDeleteBtn = Array.from(liDeleteBtn)
    
     
    
  
  })
    
    }


function addNewArticleBtn(){

  let AddArticleDiv = document.createElement('div');
AddArticleDiv.setAttribute('class', 'AddArticleDiv');
main.append(AddArticleDiv);
AddArticleDivCreated = document.querySelector('.AddArticleDiv');
AddArticleDivCreated.addEventListener('click', ()=>{
  add_List();
  firstLi(articles.at(-1).querySelector('ul'))
  main.append(AddArticleDivCreated)

})

let AddArticlePlusOne = document.createElement('div');
AddArticlePlusOne.setAttribute('class','cross one AddArticle');
AddArticleDiv.append(AddArticlePlusOne);

let AddArticlePlusTwo = document.createElement('div');
AddArticlePlusTwo.setAttribute('class','cross two AddArticle');
AddArticleDiv.append(AddArticlePlusTwo);

}



function TextareaValues(){
  textAreas = Array.from(document.getElementsByTagName('textarea'));
  textAreas.forEach((element)=>{
    element.replaceWith(element.cloneNode(true));
   
  })
  textAreas = Array.from(document.getElementsByTagName('textarea'));
  textAreas.forEach((element, index)=>{ 
    textareaResize()
    
    TextAreasValues[index] = element.value;
    element.addEventListener('input', OnInputValue);
    TextAreasValues = TextAreasValues.slice(0, textAreas.length);
   
    function OnInputValue(){
      TextAreasValues[index] = element.value;
          
          TextAreasValues = TextAreasValues.slice(0, textAreas.length);
          localStorage.setItem('TextAreasValues', JSON.stringify(TextAreasValues))
        
    }})
 
    localStorage.setItem('TextAreasValues', JSON.stringify(TextAreasValues))    

  }
  function inputValues(){
    inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach((element)=>{
      element.replaceWith(element.cloneNode(true));
     
    })
    inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach((element, index)=>{ 
      
      
      inputsValues[index] = element.value;
      element.addEventListener('input', OnInputValue);
      inputsValues = inputsValues.slice(0, inputs.length);
      
      function OnInputValue(){
        inputsValues[index] = element.value;
            
            inputsValues = inputsValues.slice(0, inputs.length);
            localStorage.setItem('inputsValues', JSON.stringify(inputsValues))
          
      }})
   
      localStorage.setItem('inputsValues', JSON.stringify(inputsValues))
          
    }
    
  function textareasAmount(){
articles = Array.from(articles);
console.log(articles);
    articles.forEach((element, index)=>{
textareasAmountVariable[index]= element.getElementsByTagName('li').length;

    }) 
   
    textareasAmountVariable = textareasAmountVariable.slice(0, articles.length)
console.log(textareasAmountVariable);
    localStorage.setItem('textareasAmount', JSON.stringify(textareasAmountVariable))

  }

