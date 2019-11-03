import { element } from "./html-util.js";

export class TodoItemView {
    /**
     * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
     * @param {TodoItemModel} todoItem
     * @param {function({id:string, completed:boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @return {Element}
     */
    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
        const todoItemElement = todoItem.completed
        ? element`<li><input type="checkbox" class="checkbox" checked>
            <s>${todoItem.title}</s>
            <button class="delete">x</button>
            </input></li>`
        : element`<li><input type="checkbox" class="checkbox">
            ${todoItem.title}
            <button class="delete">x</button>
            </input></li>`;
        const inputcheckboxelement = todoItemElement.querySelector(".checkbox");
        inputcheckboxelement.addEventListener("change", () => {
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed
            });
        });
        const deleteButtonelement = todoItemElement.querySelector(".delete");
        deleteButtonelement.addEventListener("click", () => {
            onDeleteTodo({
                id: todoItem.id
            });
        });
        // 作成したTodoアイテムのHTML要素を返す
        return todoItemElement;
    }
}
