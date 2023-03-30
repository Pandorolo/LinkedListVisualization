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
    if(CheckOpenDropdown() != -1){
      index = CheckOpenDropdown();
      if(source.nextElementSibling == Dropdowns[index])
        source.nextElementSibling.classList.add("hide");
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

//necessario implementare un sistema di assegnazione id alla generazione dei bottoni