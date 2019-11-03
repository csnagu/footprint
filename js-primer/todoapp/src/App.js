import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

export class App {
    constructor() {
        this.todoListView = new TodoListView();
        this.todoListModel = new TodoListModel();
    }

    /**
     * Todoを追加時に呼ばれるリスナー関数
     * @param {string} title
     */
    handleAdd(title) {
        this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
    }

    /**
     * Todoの状態を更新時に呼ばれるリスナー関数
     * @param {{ id:number, completed:boolean }}
     */
    handleUpdate({ id, completed }) {
        this.todoListModel.updateTodo({ id, completed });
    }

    /**
     * Todoを削除時に呼ばれるリスナー関数
     * @param {{ id:number }}
     */
    handleDelete({ id }) {
        this.todoListModel.deleteTodo({ id });
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputelement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");
        this.todoListModel.onChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            const todoListView = new TodoListView();
            // todoItemsに対応するTodoListViewを作成する
            const todoListElement = todoListView.createElement(todoItems, {
                onUpdateTodo: ({ id, completed }) => {
                    this.handleUpdate({ id, completed });
                },
                onDeleteTodo: ({ id }) => {
                    this.handleDelete({ id });
                }
            });
            render(todoListElement, containerElement);
            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });
        formElement.addEventListener("submit", event => {
            event.preventDefault();
            this.handleAdd(inputelement.value);
            inputelement.value = "";
        });
    }
}
