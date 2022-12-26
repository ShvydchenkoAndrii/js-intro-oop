(function () {
  let state = {
    items: [],
  };
  const app = document.getElementById("app");

  function setState(newState) {
    state = newState;
    render(state);
  }
  function addItem(item) {
    const next = { title: item.title, completed: true };
    state.items.push(next);
    setState(state);
  }
  window.deleteItem = (num) => {
    state.items.splice(num, 1);
    setState(state);
  };
  window.toggleCompleted = (num) => {
    state.items[num].completed = !state.items[num].completed;
    console.log(state);
    setState(state);
  };

  function render(state) {
    app.innerHTML = "";
    for (let elem of state.items) {
      const elemInd = state.items.indexOf(elem);
      app.innerHTML += `<div data-index="${elemInd}">
        <input onchange='toggleCompleted(${elemInd})' type='checkbox' class='checkbox'>
        <h2 class='txt'>${elem.title}</h2>
        <button onclick="deleteItem(${elemInd})" class='butt1' id='butt' ">delete</button>
        </div>`;
    }
    app.innerHTML += `<p>${state.items.length}</p>`;
  }

  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
})();
