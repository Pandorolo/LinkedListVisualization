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
    var nodeTemplate = document.getElementById("btn-template-tail");

  var nodeContent = nodeTemplate.content.cloneNode(true);
  return nodeContent;
}

//add a new empty node element to the head of the list 
function insertHead(){
  
  var node = createNode(0);
  document.getElementById("display").insertBefore(node, document.getElementById("display").children[0]);
}

//add a new empty node element to the tail of the list
function insertTail(){

  const count = document.getElementById("display").children.length;
  var node = createNode(1);

  document.getElementById("display").appendChild(node, document.getElementById("display").children[count]);
}

//handle the input or change of information in a node
function modifyInfo(e){
  const info = e.target.previousElementSibling.value;
  
  //error check
  if(!info)
    return;

  e.target.parentElement.previousElementSibling.children[0].innerHTML = info;
}