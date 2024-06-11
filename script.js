

// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var user_email = document.getElementById("user_email");
// var login_container = document.getElementById("login_container");
// var home_container = document.getElementById("home_container");
// var list = document.getElementById('list');
// var input = document.getElementById('userinput');
// var emailcol = document.getElementById("emailcol");

// function loginUser() {
//   if (!email.value || !password.value) {
//     return alert("Please add email and password.");
//   }
//   localStorage.setItem("email", email.value);
//   checkIsUserLogin();
// }

// function checkIsUserLogin() {
//   var email = localStorage.getItem("email");
//   if (email) {
//     login_container.style.display = "none";
//     home_container.style.display = "block";
//     emailcol.innerText = email;
//     displayUserNotes();
//   } else {
//     login_container.style.display = "block";
//     home_container.style.display = "none";
//   }
// }

// checkIsUserLogin();

// function logout() {
//   localStorage.removeItem("email");
//   checkIsUserLogin();
// }

// function addRecord() {
//   var email = localStorage.getItem("email");
//   if (!email) {
//     return alert("User not logged in.");
//   }
//   var obj = {
//     email: email,
//     todo: input.value,
//   };
//   saveValueToLocalStorage(obj);
//   input.value = "";
// }

// function saveValueToLocalStorage(obj) {
//   var todos = localStorage.getItem("todos");
//   if (todos) {
//     todos = JSON.parse(todos);
//     todos.push(obj);
//   } else {
//     todos = [obj];
//   }
//   localStorage.setItem("todos", JSON.stringify(todos));
//   displayUserNotes();
// }

// function displayUserNotes() {
//   var todos = localStorage.getItem("todos");
//   var list = document.getElementById("list");
//   var currentUserEmail = localStorage.getItem("email");

//   if (todos) {
//     list.innerHTML = ""; // Clear the existing list before appending new items
//     todos = JSON.parse(todos);
//     todos.forEach(function (data) {
//       if (data.email === currentUserEmail) {
//         var liElement = `<li class="border rounded p-2 my-2">
//           ${data.todo}
//           <button onclick="deleteThis('${data.todo}')" style="background:none;"> <i class="fa-solid fa-xmark"></i></button>
//         </li>`;
//         list.innerHTML += liElement;
//       }
//     });
//     emailcol.innerHTML = currentUserEmail; // Update email column after displaying notes
//   } else {
//     list.innerHTML = ""; // Ensure list is cleared if no todos exist
//   }
// }

// function deleteThis(todoText) {
//   var todos = localStorage.getItem("todos");
//   if (todos) {
//     todos = JSON.parse(todos);
//     todos = todos.filter(function(todo) {
//       return todo.todo !== todoText || todo.email !== localStorage.getItem("email");
//     });
//     localStorage.setItem("todos", JSON.stringify(todos));
//     displayUserNotes();
//   }
// }

// // Initial call to displayUserNotes to display notes on page load
// checkIsUserLogin();
// displayUserNotes();
var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var list = document.getElementById('list');
var input = document.getElementById('userinput');
var emailcol = document.getElementById("emailcol");
var now = new Date().toLocaleTimeString;
console.log(now);

function loginUser() {
  if (!email.value || !password.value) {
    return alert("Please add email and password.");
  }
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    emailcol.innerText = email;
    displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();

function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}

function addRecord() {
  var email = localStorage.getItem("email");
  if (!email) {
    return alert("User not logged in.");
  }
  var taskDate = document.getElementById("taskDate").value;
  var taskTime = document.getElementById("taskTime").value;
  var category = document.getElementById("category").value;
  var obj = {
    email: email,
    todo: input.value,
    category: category,
    date: taskDate,
    time: taskTime
  };
  saveValueToLocalStorage(obj);
  input.value = "";
}

function saveValueToLocalStorage(obj) {
  var todos = localStorage.getItem("todos");
  if (todos) {
    todos = JSON.parse(todos);
    todos.push(obj);
  } else {
    todos = [obj];
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  displayUserNotes();
}


function displayUserNotes() {
  var todos = localStorage.getItem("todos");
  var list = document.getElementById("list");
  var currentUserEmail = localStorage.getItem("email");

  if (todos) {
    list.innerHTML = ""; // Clear the existing list before appending new items
    todos = JSON.parse(todos);
    todos.forEach(function (data) {
      if (currentUserEmail === "admin@gmail.com" || data.email === currentUserEmail) {
        var liElement = `<li class="border rounded p-2 my-2">
          ${data.todo}
          (${data.category})
          ${data.time}
          <button onclick="deleteThis('${data.todo}')" style="background:none;"> <i class="fa-solid fa-xmark"></i></button>
        </li>`;
        list.innerHTML += liElement;
      }
    });
    emailcol.innerHTML = currentUserEmail; // Update email column after displaying notes
  } else {
    list.innerHTML = ""; // Ensure list is cleared if no todos exist
  }
}


function deleteThis(todoText) {
  var todos = localStorage.getItem("todos");
  if (todos) {
    todos = JSON.parse(todos);
    todos = todos.filter(function(todo) {
      return todo.todo !== todoText || todo.email !== localStorage.getItem("email");
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    displayUserNotes();
  }
}

// Initial call to displayUserNotes to display notes on page load
checkIsUserLogin();
displayUserNotes();