// Create Close button and append it in each list items
let myTasklist = document.getElementsByTagName("LI");
for (let i = 0; i < myTasklist.length; i++) {
  const span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTasklist[i].appendChild(span);
}

// Click on close button to hide element
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
// Add checked symbol when click on the list item
// var elem = document.getElementById("elemId");
// elem.removeEventListener("click", ???? , false);

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("check");
    }
  },
  false
);

// Create new task when click on add btn

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#myInput").value;
  let add = document.createTextNode(inputValue);
  li.appendChild(add);
  if (inputValue === "") {
    alert("Add New Task...");
  } else {
    document.querySelector(".myUl").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
