//Checks how many dropdowns are opend
function CheckOpenDropdown() {
  
  const openDropdown = document.querySelectorAll(".dropdown");
  let cont = 0;

  for(let i = 0; i < openDropdown.length; i++){
    if(!openDropdown[i].classList.contains("hide"))
      return i;
  }

  return -1;
}

//Closes the open dropdown
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

function createNode(info, type){

  if(type == 0)
    var nodeTemplate = document.getElementById("btn-template");
  else
    var nodeTemplate = document.getElementById("btn-template-tail");

  var nodeContent = nodeTemplate.content.cloneNode(true);
  //da fixare l'inserimento del testo nel nuovo nodo
  nodeContent.getElementById("info").innerHTML(info);
  return nodeContent;
}

function insertHead(info){
  
  var node = createNode(1 /*info*/, 0);
  document.getElementById("display").insertBefore(node, document.getElementById("display").children[0]);
}

function insertTail(info){

  var node = createNode(1 /*info*/, 1);

  document.getElementById("display").appendChild(node, document.getElementById("display").children[0]);
}