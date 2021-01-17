import { TodoListModel } from "./modle/TodoListModel.js";
import { TodoItemModel } from "./modle/TodoItemModel.js";
import { element, render } from "./view/html-util.js";


export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
    }
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector('#js-todo-count');
        
        this.todoItemModel.onChange(() => {
            const todoListElement = element`<ul />`;
            const todoitems = this.todoListModel.getTodoItems();
            todoitems.forEach(item => {
                const todoItemElement = element`<li>${item.title}</li>`;
                todoListElement.appendChild(todoItemElement);
            });
            render(todoListElement, containerElement);
            todoItemCountElement.textContent = `Todoアイテム数; ${this.todoListModel.getTotalCount()}`;
        });
        formElement.addEventListener("submit", (event) => {
            event.preventDefault;
            this.todoListModel.addTodo(new TodoItemModel({
                title: inputElement.value,
                completed: false
            }));
            inputElement.value = "";
        })
    }
}
