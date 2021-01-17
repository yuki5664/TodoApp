import { EventEmitter } from "../EventEmitter.js" 

export class TodoListModel extends EventEmitter {

  constructor(items = []) {
    super();
    this.items = items;
  }
  
  getTotalCount()  {
    return this.items.length;
  }

  getTodoItems() {
    return this.items;
  }

  onChange(listener) {
    this.addEventListener("checge", listener);
  }

  emitChange() {
    this.emit("chenge");
  }
  
  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }
}

