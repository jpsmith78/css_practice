const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
}

const allowDrop = (event) => {
  event.preventDefault();
}

const drop = (event) => {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
