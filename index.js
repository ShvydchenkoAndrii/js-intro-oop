(function () {
  let stateOfItems = {
    items: [],
  };

  function setStateOfItems() {
    stateOfItems = newState;
  }

  function addItem(item) {
    const next = { title: item.title, completed: false };
    stateOfItems.items.push(next);
  }

  function deleteItem(num) {
    stateOfItems.items.splice(num, 1);
  }

  function toggleCompleted(num) {
        if (stateOfItems.items[num].completed === true){
          stateOfItems.items[num].completed = false 
        }else if (stateOfItems.items[num].completed === false){
          stateOfItems.items[num].completed = true 
      }
  }
    
  

  addItem({ title: "foo1" });
  addItem({ title: "foo2" });
  addItem({ title: "foo3" });
  toggleCompleted(1);
  console.log(stateOfItems)
})();
