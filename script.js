function handleClick(event) {
  const source = document.getElementById(event.target.id);

  if(event.target.nextElementSibling != closeOpenDropdown())
    source.nextElementSibling.classList.toggle("hide");

  else
    event.target.nextElementSibling.classList.add("hide");
}

function closeOpenDropdown() {
  const openDropdown = document.querySelectorAll(".dropdown");

  for(let i = 0; i < openDropdown.length; i++){
    if(!openDropdown[i].classList.contains("hide")){
      openDropdown[i].classList.add("hide");
      return openDropdown[i];
    }
  }
  return;
}

document.addEventListener('mouseup', function (e) {
  var container = document.querySelector(".node");
  if (!container.contains(e.target) || e.target == document.querySelector(".node-btn")) {
    closeOpenDropdown();
  }
}.bind(this));

//necessario implementare un sistema di assegnazione id alla generazione dei bottoni