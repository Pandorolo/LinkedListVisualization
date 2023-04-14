/*
Code written by Massi Nicola 
GitHub: https://github.com/NicolaMassi 
*/

//Function to check the number of open dropdowns menù
function CheckOpenDropdown() {
  
  const openDropdown = document.querySelectorAll(".dropdown");

  for(let i = 0; i < openDropdown.length; i++){
    if(!openDropdown[i].classList.contains("hide"))
      return i;
  }

  return -1;
}

//Function to close the open dropdown
function closeDropdown(){

  const Dropdowns = document.querySelectorAll(".dropdown");

  for(let i = 0; i < Dropdowns.length; i++){
    if(!Dropdowns[i].classList.contains("hide"))
      Dropdowns[i].classList.add("hide");
  }
}

//Event Listener for all click interactions in the display element
document.addEventListener('mouseup', function (e){
  
  const Dropdowns = document.querySelectorAll(".dropdown");
  const source = e.target;
  var index;
  
  if(source.classList.contains("node-btn")){   
    //If there are open dropdowns
    if(CheckOpenDropdown() != -1){
      index = CheckOpenDropdown();
      //close the open dropdown
      if(source.nextElementSibling == Dropdowns[index])
        source.nextElementSibling.classList.add("hide");
      //open the dropdown      
      else{
        source.nextElementSibling.classList.remove("hide");
        Dropdowns[index].classList.add("hide");
      }
    }
    
    else if(source.nextElementSibling.classList.contains("hide"))
      source.nextElementSibling.classList.remove("hide");
    else
      source.nextElementSibling.classList.add("hide");
  }

  else if(source == document.getElementById("display"))
    closeDropdown();
});

//handle the creation of a new node
function createNode(type){

  if(type == 0)
    var nodeTemplate = document.getElementById("btn-template");
  else
    var nodeTemplate = document.getElementById("btn-template");

  const nodeContent = nodeTemplate.content.cloneNode(true);
  return nodeContent;
}

function createArrow(){

  const arrowTemplate = document.getElementById("arrow-template");
  const nodeArrow = arrowTemplate.content.cloneNode(true);

  return nodeArrow;
}

//add a new empty node element to the head of the list
function insertHead(){
  
  const node = createNode(0);
  const arrow = createArrow();

  if(document.getElementById("display").children.length != 0){
    document.getElementById("display").insertBefore(node, document.getElementById("display").children[0]);
    document.getElementById("display").insertBefore(arrow, document.getElementById("display").children[1]);
  }
  else
    insertTail(node);
}

//add a new empty node element to the tail of the list
function insertTail(){

  var count = document.getElementById("display").children.length;
  const node = createNode(1);
  const arrow = createArrow();

  document.getElementById("display").appendChild(arrow, document.getElementById("display").children[count]);
  document.getElementById("display").appendChild(node, document.getElementById("display").children[count]);
}

//handle the input or change of information in a node
function modifyInfo(e){

  const info = e.target.previousElementSibling.value;
  if(!info)
    return;

  e.target.parentElement.previousElementSibling.children[0].innerHTML = info;
}

function removeNode(e){
  
  if(e.target.parentElement.parentElement.previousElementSibling != null && e.target.parentElement.parentElement.previousElementSibling.classList.contains("node-arrow"))
    e.target.parentElement.parentElement.previousElementSibling.remove();

  else if(e.target.parentElement.parentElement.nextElementSibling != null && e.target.parentElement.parentElement.nextElementSibling.classList.contains("node-arrow"))
    e.target.parentElement.parentElement.nextElementSibling.remove();

  e.target.parentElement.parentElement.remove();
}

function shiftLeft(e){

  if(!e.target.parentElement.parentElement.previousElementSibling.previousElementSibling)
    return;

  var element = e.target.parentElement.parentElement;
  var element2 = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling;
  var aux = element2;

  document.getElementById("display").insertBefore(element.cloneNode(true), document.getElementById("display").children[getIndex(e.target.parentElement.parentElement.previousElementSibling)]);
  document.getElementById("display").insertBefore(aux.cloneNode(true), document.getElementById("display").children[getIndex(e.target.parentElement.parentElement)]);
  
  closeDropdown();

  element2.remove();
  element.remove();
}

function shiftRight(e){
  if(!e.target.parentElement.parentElement.nextElementSibling.nextElementSibling)
    return;

  var element = e.target.parentElement.parentElement;
  var element2 = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
  var aux = element2;

  document.getElementById("display").insertBefore(element.cloneNode(true), document.getElementById("display").children[getIndex(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling)]);
  document.getElementById("display").insertBefore(aux.cloneNode(true), document.getElementById("display").children[getIndex(e.target.parentElement.parentElement)]);

  closeDropdown();

  element2.remove();
  element.remove();
}

function getIndex(element){
  
  for(var i = 0; i < document.getElementById("display").children.length; i++)  {
    if(document.getElementById("display").children[i] == element)
      return i;
  }
  return -1;
}