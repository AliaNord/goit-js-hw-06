class Storage {
  constructor(initialItems) {
    this._items = initialItems;
  }
  getItems() {
    return this._items;
  }

  addItem(newItem) {
    return this._items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this._items.indexOf(itemToRemove) >= 0) {
      this._items.splice(this._items.indexOf(itemToRemove), 1);
    }
    return this._items;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
