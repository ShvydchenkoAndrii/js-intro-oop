(function () {
  let state = {
    items: [],
  };
  const app = document.getElementById("app");

  function setState(newState) {
    state = newState;
    render(state);
  }
  window.addItem = () => {
    const inputVal = document.getElementById("inputToDo").value;
    const next = { title: inputVal, completed: false };
    inputVal !== "" ? state.items.push(next) : null;
    setState(state);
    console.log(state.items);
  };
  window.deleteItem = (num) => {
    state.items.splice(num, 1);
    setState(state);
    console.log(state.items);
  };
  window.toggleCompleted = (num) => {
    state.items[num].completed = !state.items[num].completed;
    setState(state);
    console.log(state.items);
  };

  window.completedFilter = () => {
    const copy = { ...state };
    const res = copy.items.filter((el) => el.completed === true);
    copy.items = res;
    render(copy);
  };
  window.inProgressFilter = () => {
    const copy = { ...state };
    const res = copy.items.filter((el) => el.completed === false);
    copy.items = res;
    render(copy);
  };
  window.allFilter = () => {
    render(state);
  };
  window.clearState = () => {
    state.items = [];
    setState(state);
  };

  function render(state) {
    app.innerHTML = "";
    app.innerHTML += `<input type='text' id='inputToDo'><button onclick="addItem()">Add</button>`;
    for (let elem of state.items) {
      const elemInd = state.items.indexOf(elem);
      app.innerHTML += `<div data-index="${elemInd}">
        <input  onchange="toggleCompleted(${elemInd})" type='checkbox' id='checkbox'>
        <h2 class='txt'>${elem.title}</h2>
        <button onclick="deleteItem(${elemInd})" class='butt1' id='butt' ">delete</button>
        </div>`;
    }
    app.innerHTML += `<p>${state.items.length}</p>`;
    app.innerHTML += `<button onclick="allFilter()">All</button>
    <button onclick="completedFilter()">Completed</button>
    <button onclick="inProgressFilter()">In Progress</button>
    <button onclick="clearState()">Clear</button>`;
  }
  render(state);
})();
