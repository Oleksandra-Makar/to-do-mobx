import { makeAutoObservable, observable, action, computed, toJS } from "mobx";
import { IToDo } from "../interfaces/Todo";
import { v4 as uuidv4 } from "uuid";

export class Store {
  @observable todos: IToDo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action addTodo(task: string) {
    this.todos.push({
      id: uuidv4(),
      title: task,
      completed: false,
    });
    console.log(toJS(this.todos));
  }

  @action toggleTodoStatus(todoData: Omit<IToDo, "title">) {
    const index = this.todos.findIndex((todo) => todo.id === todoData.id);
    this.todos[index].completed = todoData.completed;
  }

  @action deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  @computed get completedTodoCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }
}

const todoStore = new Store();
export default todoStore;
