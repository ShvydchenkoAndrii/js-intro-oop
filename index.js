(function () {
  let state = {
    items: [],
  };
  const app = document.getElementById("app");

  function setState(newState) {
    state = newState;
    render(state);
  }

  function render(state) {
    app.innerHTML = "";
    for (let elem of state.items) {
      const elemInd = state.items.indexOf(elem);
      app.innerHTML += `<div data-index="${elemInd}">
        <input type='checkbox' class='checkbox'>
        <h2 class='txt'>${elem.title}</h2>
        <button class='butt1' id='butt'>delete</button>
        </div>`;

      const delButt = app.querySelector(".butt1");
      delButt.addEventListener("click", () => {
        const delButIdx = app.querySelector("div").getAttribute("data-index");
        app.remove();
        deleteItem(delButIdx);
      });
    }
    app.innerHTML += `<p>${state.items.length}</p>`;
  }

  function addItem(item) {
    const next = { title: item.title, completed: true };
    state.items.push(next);
    setState(state);
  }

  function deleteItem(num) {
    state.items.splice(num, 1);
    setState(state);
  }

  function toggleCompleted(num) {
    state.items[num].completed = !state.items[num].completed;
    setState(state);
  }

  addItem({ title: "foo1" });

  console.log(app);
})();

const upperCase = (arg) => arg.toUpperCase();
const tripleExclaim = (arg) => arg + "!!!";
const split = (arg) => arg.split("_");
const join = (arg) => arg.join(" ");
const copy = (arg) => arg + " " + arg;
const arg = (arg) => arg;
const createComposition = (g, f) => (x) => g(f(x));
const allFunc = [copy, join, split, tripleExclaim, upperCase];
const prevRes = (...) => allFunc.reduce(createComposition, arg);
const result = (arg) => prevRes(arg);
console.log(result("by_ticket_now"));
