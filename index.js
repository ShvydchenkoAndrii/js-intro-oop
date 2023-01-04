(function () {
  let state = {
    items: [],
    filter: "all",
  };
  const app = document.getElementById("app");

  function setState(newState) {
    state = newState;
    render(state);
    localStorage.setItem("ToDo", JSON.stringify(state));
  }
  window.addItem = () => {
    const inputVal = document.getElementById("inputToDo").value;
    const next = { title: inputVal, completed: false };
    inputVal !== "" ? state.items.push(next) : null;
    setState(state);
  };
  window.deleteItem = (num) => {
    state.items.splice(num, 1);
    setState(state);
  };
  window.toggleCompleted = (num) => {
    state.items[num].completed = !state.items[num].completed;
    setState(state);
  };

  window.completedFilter = () => {
    setState({ ...state, filter: "completed" });
  };
  window.inProgressFilter = () => {
    setState({ ...state, filter: "inProgress" });
  };
  window.allFilter = () => {
    setState({ ...state, filter: "all" });
  };
  window.clearState = () => {
    state.items = [];
    setState(state);
    localStorage.clear();
  };

  window.addEventListener("load", () => {
    const localState = JSON.parse(localStorage.getItem("ToDo"));
    if (localState) {
      setState(localState);
    }
  });

  function render(state) {
    app.innerHTML = "";
    app.innerHTML += `<input type='text' id='inputToDo'><button onclick="addItem()">Add</button>`;

    const filterResult = state.items.filter((item) => {
      if (state.filter === "all") {
        return item;
      }
      if (state.filter === "completed") {
        return item.completed === true;
      }
      if (state.filter === "inProgress") {
        return item.completed === false;
      }
    });

    for (let elem of filterResult) {
      const elemInd = state.items.indexOf(elem);
      app.innerHTML += `<div data-index="${elemInd}">
      <input  onchange="toggleCompleted(${elemInd})" ${
        elem.completed ? "checked" : null
      } type='checkbox'>
      <h2 class='txt'>${elem.title}</h2>
      <button onclick="deleteItem(${elemInd})" class='butt1' id='butt' ">delete</button>
      </div>`;
    }
    app.innerHTML += `<p>${state.items.length}</p>`;
    app.innerHTML += `<button onclick="allFilter()">All</button>
    <button onclick="completedFilter()" id="completed">Completed</button>
    <button onclick="inProgressFilter()" id="inProgress">In Progress</button>
    <button onclick="clearState()">Clear</button>`;
    
  }

  render(state);
})();
