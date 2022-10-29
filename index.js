(function () {
  let state = {
    items: [],
  };
  const app = document.getElementById("app");
  const count = document.getElementById("count");

  function setState(newState) {
    state = newState;

    render(state);
  }
  function deleteItem(num) {
    state.items.splice(num, 1);
    setState(state);
  }
  function render(state) {
    app.innerHTML = "";
    for (let elem of state.items) {
      const elemInd = state.items.indexOf(elem);
      app.innerHTML += `<div data-index="${elemInd}">
        <input type='checkbox' class='checkbox'>
        <h2 class='txt'>${elem.title}</h2>
        <button class='butt1' id='butt' onclick="deleteItem(${elemInd})">delete</button>
        </div>`;
    }
    app.innerHTML += `<p>${state.items.length}</p>`;
  }
  console.log(app);
  // const delButt = app.querySelectorAll("button");
  // for (let but of delButt) {
  //   but.addEventListener("click", () => {
  //     const delButIdx = but.closest("div").getAttribute("data-index");
  //     deleteItem(delButIdx);
  //   });
  // }
  function addItem(item) {
    const next = { title: item.title, completed: true };
    state.items.push(next);
    setState(state);
  }

  function toggleCompleted(num) {
    state.items[num].completed = !state.items[num].completed;
    setState(state);
  }

  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
})();
