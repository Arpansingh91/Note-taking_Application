// // const noteForm = document.getElementById('note-form');
// // const noteList = document.getElementById('note-list');

// // let notes = [];

// // function renderNotes() {
// //   noteList.innerHTML = '';
// //   notes.forEach((note, index) => {
// //     const noteEl = document.createElement('div');
// //     noteEl.classList.add('note');
// //     const titleEl = document.createElement('h2');
// //     titleEl.innerText = note.title;
// //     const contentEl = document.createElement('p');
// //     contentEl.innerText = note.content;
// //     const deleteButtonEl = document.createElement('button');
// //     deleteButtonEl.innerText = 'Delete';
// //     deleteButtonEl.addEventListener('click', () => {
// //       deleteNote(index);
// //     });
// //     noteEl.appendChild(titleEl);
// //     noteEl.appendChild(contentEl);
// //     noteEl.appendChild(deleteButtonEl);
// //     noteList.appendChild(noteEl);
// //   });
// // }

// // function addNote() {
// //   const title = document.getElementById('note-title').value;
// //   const content = document.getElementById('note-content').value;
// //   if (title === '' || content=== '') {
// //     alert('Please enter a title and content for your note.');
// //     return;
// //   }
// //   const note = {
// //     title: title,
// //     content: content
// //   };
// //   notes.push(note);
// //   renderNotes();
// //   noteForm.reset();
// // }

// // function deleteNote(index) {
// //   notes.splice(index, 1);
// //   renderNotes();
// // }

// // noteForm.addEventListener('submit', (event) => {
// //   event.preventDefault();
// //   addNote();
// // });

// // JavaScript
// document.addEventListener("DOMContentLoaded", function () {
//   const noteForm = document.getElementById("note-form");
//   const noteList = document.getElementById("note-list");

//   noteForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const titleInput = document.getElementById("note-title");
//     const contentInput = document.getElementById("note-content");

//     const title = titleInput.value;
//     const content = contentInput.value;

//     if (title.trim() === "" || content.trim() === "") {
//       alert("Please enter a title and note content.");
//       return;
//     }

//     const existingNote = document.querySelector(`.note[data-title="${title}"]`);

//     if (existingNote) {
//       const noteContent = existingNote.querySelector(".note-content");
//       const newLine = document.createElement("br");
//       noteContent.appendChild(newLine);
//       noteContent.appendChild(document.createTextNode(content));
//     } else {
//       const noteElement = createNoteElement(title, content);
//       noteList.appendChild(noteElement);
//     }

//     titleInput.value = "";
//     contentInput.value = "";
//   });

//   noteList.addEventListener("click", function (event) {
//     if (event.target.classList.contains("delete-button")) {
//       const note = event.target.closest(".note");
//       noteList.removeChild(note);
//     }
//   });

//   function createNoteElement(title, content) {
//     const noteElement = document.createElement("div");
//     noteElement.classList.add("note");
//     noteElement.setAttribute("data-title", title);

//     const titleElement = document.createElement("h2");
//     titleElement.textContent = title;

//     const contentElement = document.createElement("p");
//     contentElement.classList.add("note-content");
//     contentElement.textContent = content;

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-button");
//     deleteButton.textContent = "Delete";

//     noteElement.appendChild(titleElement);
//     noteElement.appendChild(contentElement);
//     noteElement.appendChild(deleteButton);

//     return noteElement;
//   }
// });

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const noteForm = document.getElementById("note-form");
  const noteList = document.getElementById("note-list");

  noteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = document.getElementById("note-title");
    const contentInput = document.getElementById("note-content");

    const title = titleInput.value;
    const content = contentInput.value;

    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter a title and note content.");
      return;
    }

    const existingNote = document.querySelector(`.note[data-title="${title}"]`);

    if (existingNote) {
      const noteContent = existingNote.querySelector(".note-content");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-content-button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        const contentElement = this.previousSibling;
        noteContent.removeChild(contentElement);
        noteContent.removeChild(this);
      });

      const contentElement = document.createElement("p");
      contentElement.textContent = content;

      noteContent.appendChild(contentElement);
      noteContent.appendChild(deleteButton);
    } else {
      const noteElement = createNoteElement(title, content);
      noteList.appendChild(noteElement);
    }

    titleInput.value = "";
    contentInput.value = "";
  });

  noteList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const deleteButton = event.target;
      const contentElement = deleteButton.previousSibling;
      const noteContent = deleteButton.parentNode;
      noteContent.removeChild(contentElement);
      noteContent.removeChild(deleteButton);
    }
  });

  function createNoteElement(title, content) {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.setAttribute("data-title", title);

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const noteContent = document.createElement("div");
    noteContent.classList.add("note-content");

    const contentElement = document.createElement("p");
    contentElement.textContent = content;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    noteContent.appendChild(contentElement);
    noteContent.appendChild(deleteButton);

    noteElement.appendChild(titleElement);
    noteElement.appendChild(noteContent);

    return noteElement;
  }
});
