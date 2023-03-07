let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

let saveButton = document.getElementById("save-note");
let deleteButton = document.getElementById("delete-note");
let notes = document.getElementById("the-notes");
let mainTextarea = document.getElementById("main-note-textarea");
let slider = document.getElementById("slider");
let utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

saveButton.addEventListener("click", function () {
  if (mainTextarea.value != "") {
    let date = document.createElement("span");

    let complete = document.createElement("div");
    complete.className = "complete-note";
    let content = document.createElement("div");
    content.id = "complete-note-content";
    let deleteNote = document.createElement("button");
    deleteNote.id = "delete-note";
    deleteNote.innerHTML = "<i></i>";

deleteNote.firstChild.className = "fa-regular fa-trash-can"

    notes.appendChild(complete);
    complete.appendChild(content);
    content.innerHTML = mainTextarea.value;
    complete.appendChild(date);

    complete.appendChild(deleteNote);
    date.id = "date";
    date.innerHTML = utc;
    document.getElementsByClassName("complete-note").id = "completeNote";

    mainTextarea.value = "";
  } else {
    alertify.warning("Add Some Text Please !");
  }
});

slider.addEventListener("click", function () {
  slider.classList.toggle("hell");
  document.querySelector("body").classList.toggle("darkmode");
});
