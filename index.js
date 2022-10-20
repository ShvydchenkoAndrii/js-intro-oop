(function () {
  let state = {
    items: [],
  };

  function setState(newState) {
    state = newState;
  }

  function render(state) {
    const app = document.getElementById("app");
    for (let i = 1; i <= state.items.length; i++) {
      if (i > 0) {
        app.innerHTML += `<div>
      <input type='checkbox' class='checkbox'>
      <h2 class='txt'>Txt</h2>
      <button class='butt1' id='butt'>delete</button>
      </div>`;
      }
    }
    app.innerHTML += `<p>${JSON.stringify(state.items.length)}</p>`;
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
  addItem({ title: "foo2" });
  
  render(state);
  console.log(state);
})();
