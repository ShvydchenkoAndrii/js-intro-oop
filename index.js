(function () {
  let state = {
    items: [],
  };

  function setState(state) {
    state = newState;
  }

  function addItem(item) {
    const next = { title: item.title, completed: true };
    state.items.push(next);
    setState(state)
  }

  function deleteItem(num) {
    state.items.splice(num, 1);
    setState(state)
  }

  function toggleCompleted(num) {
    state.items[num].completed = !state.items[num].completed;
    setState(state)
  }
  
  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
  addItem({ title: "foo3" });
  console.log(state)
})();
