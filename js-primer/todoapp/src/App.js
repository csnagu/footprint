import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element, render } from "./view/html-util.js";

export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputelement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        // TodoListModelの状態が更新されたら表示を更新する
        this.todoListModel.onChange(() => {
            const todoListElement = element`<ul />`;
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach(item => {
                // 完了済みなら checked 属性を付け、未完了なら checked 属性を外す
                const todoItemElement = item.completed
                    ? element`<li><input type="checkbox" class="checkbox" checked>
                        <s>${item.title}</s>
                        <button class="delete">x</button>
                        </input></li>`
                    : element`<li><input type="checkbox" class="checkbox">
                        ${item.title}
                        <button class="delete">x</button>
                        </input></li>`;
                // チェックボックスがトグルしたときのイベントリスナー関数を登録
                const inputcheckboxelement = todoItemElement.querySelector(".checkbox");
                inputcheckboxelement.addEventListener("change", () => {
                    // 指定したTodoアイテムの完了状態を反転させる
                    this.todoListModel.updateTodo({
                        id: item.id,
                        completed: !item.completed
                    });
                });
                // 削除ボタンをクリック時にTodoListModelからアイテムを削除する
                const deleteButtonElement = todoItemElement.querySelector(".delete");
                deleteButtonElement.addEventListener("click", () => {
                    this.todoListModel.deleteTodo({
                        id: item.id
                    });
                });
                todoListElement.appendChild(todoItemElement);
            });
            // containerElementの中身をtodoListElementで上書きする
            render(todoListElement, containerElement);
            // アイテム数の表示を更新
            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        })

        formElement.addEventListener("submit", event => {
            event.preventDefault();

            this.todoListModel.addTodo(new TodoItemModel({
                title: inputelement.value,
                completed: false
            }));
            inputelement.value = "";
        });
    }
}
