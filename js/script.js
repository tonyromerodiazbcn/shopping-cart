function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("Item", ev.target.id);
    ev.dataTransfer.setData("value", ev.target.getData);
  }

let itemCount = 0;
let value=0;
function drop(event)
{
  itemCount = itemCount + 1;
  value=itemCount*10 + "€";
  event.preventDefault();
  var data=event.dataTransfer.getData("Item","value");
  $targetElement = document.getElementById('target-grid');
  $selectedElement = document.getElementById(data);
  $targetElement.appendChild($selectedElement);
  document.getElementById('itemcount').innerHTML = (itemCount+" Items");
  document.getElementById('itemcount2').innerHTML = (value+" price");
  $selectedElement.innerHTML += "<i class='icon-remove' data-item="+data+"></i>"; 
}