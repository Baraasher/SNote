let body = document.querySelector('body');
let saveButton = document.getElementById("save-note");
let noteInput = document.getElementById("noteInput");
let notes = document.getElementById("the-notes");
let deleteButton = document.getElementById("delete-note");
let slider = document.getElementById("slider");
let utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

//preload
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//dark mode
slider.addEventListener("click", function () {
  slider.classList.toggle("hell");
  document.querySelector("body").classList.toggle("darkmode");
});

saveButton.onclick = function () {
  if (noteInput.value !== "") {
    createNote();
  } else {
    AddNoteAlert();
    return;
  }
};

function createNote() {
  let date = document.createElement("span");
  let complete = document.createElement("div");
  let content = document.createElement("textarea");
  let deleteNote = document.createElement("button");

  complete.className = "complete-note";
  complete.id = "complete-note";
  content.id = "complete-note-content";
  deleteNote.id = "delete-note";
  deleteNote.innerHTML = "<i></i>";
  deleteNote.firstChild.className = "fa-regular fa-trash-can";
  notes.appendChild(complete);
  complete.appendChild(content);
  content.value = noteInput.value;
  complete.appendChild(date);
  complete.appendChild(deleteNote);
  date.id = "date";
  date.innerHTML = utc;
  document.getElementsByClassName("complete-note").id = "completeNote";
  noteInput.value = "";
}


function AddNoteAlert (){
document.querySelector("#alertElement").style.display = "flex";



setTimeout(function() {


  document.querySelector("#alertElement").className = "animate__animated animate__fadeOutLeft"



  setTimeout(function(){
  document.querySelector("#alertElement").style.visibility = "hidden";
    
  },1000)


},3000)



}