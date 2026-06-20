import { ref, type Ref } from 'vue'
import { Todo, TodoStatus } from '../../../types/Todo'
import type { CreateTodo } from '../../../types/CreateTodos'

export const useTodo = () => {
  const todos: Ref<Todo[]> = ref([])


  const addTodo = (todo: CreateTodo) => {
    const id = Math.floor(Math.random() * 10000)
    todos.value.push(new Todo(id, todo.title, todo.description, TodoStatus.Pending))
  }


  const removeTodo = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id)
  }


  const changeStatus = (id: number) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.status = 
        todo.status === TodoStatus.Completed
          ? TodoStatus.Pending
          : TodoStatus.Completed
    }
  }

  return { todos, addTodo, removeTodo, changeStatus }
}
