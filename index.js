(function () {
  let stateOfItems = {
    items: [],
  };

  function setStateOfItems() {
    stateOfItems = newState;
  }

  function addItem(item) {
    const next = { title: item.title, completed: true };
    stateOfItems.items.push(next);
  }

  function deleteItem(num) {
    stateOfItems.items.splice(num, 1);
  }

  function toggleCompleted(num) {
    stateOfItems.items[num].completed = !stateOfItems.items[num].completed;
  }

  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
  addItem({ title: "foo3" });
  toggleCompleted(1);
  console.log(stateOfItems);
})();
const a = 12;
const b = !a;
console.log(b);
