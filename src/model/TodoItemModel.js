// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {

  construntor({ title, completed }) {
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}