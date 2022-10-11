(function () {
  let stateOfItems = {
    items: [],
  };

  function setStateOfItems() {
    stateOfItems = newState;
  }

  function addItem() {
    const foo = document.getElementById("h2").textContent;
    const input = document.querySelector('input').checked;
    const item = {
      title: foo,
      completed: input,
    };
    stateOfItems.items += JSON.stringify(item);
  }
  addItem();
  console.log(stateOfItems);
})();
