let saveButton = document.getElementById("save-note");
let mainTextarea = document.getElementById("main-note-textarea");
let notes = document.getElementById("the-notes");
let deleteButton = document.getElementById("delete-note");

//preload

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

let slider = document.getElementById("slider");
let utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

saveButton.addEventListener("click", function () {
  if (
    mainTextarea.value === "" ||
    mainTextarea.value === undefined ||
    mainTextarea.value === null ||
    mainTextarea.childNodes.length === 0
  ) {
    alert("Add Some Text Please !");
  } else {
    createNote();
  }
});

//dark mode
slider.addEventListener("click", function () {
  slider.classList.toggle("hell");
  document.querySelector("body").classList.toggle("darkmode");
});

function createNote() {
  let date = document.createElement("span");
  let complete = document.createElement("div");
  complete.className = "complete-note";
  let content = document.createElement("div");
  content.id = "complete-note-content";
  let deleteNote = document.createElement("button");
  deleteNote.id = "delete-note";
  deleteNote.innerHTML = "<i></i>";
  deleteNote.firstChild.className = "fa-regular fa-trash-can";
  notes.appendChild(complete);
  complete.appendChild(content);
  content.innerText = mainTextarea.value;
  complete.appendChild(date);
  complete.appendChild(deleteNote);
  date.id = "date";
  date.innerHTML = utc;
  document.getElementsByClassName("complete-note").id = "completeNote";
  mainTextarea.value = "";
}

document.getElementById("delete-note").addEventListener("click", function () {
  console.log("delete");
});
