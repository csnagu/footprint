import { TodoItemModel } from "./TodoItemModel";
import { TodoListModel } from "./TodoListModel.js";


const todoListModel = new TodoListModel();
console.log(todoListModel.getTotalCount()); // => 0

todoListModel.onChange(() => {
    console.log("TodoListの状態が変わりました");
});

todoListModel.addTodo(new TodoItemModel({
    title: "new Todo Item",
    completed: false
}));
console.log(todoListModel.getTotalCount()); // => 1
