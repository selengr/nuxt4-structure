<template>
  <Head>
    <title>reza jooooni</title>
  </Head>

  <div class="todos-container">
    <h1 class="title">Todos</h1>
    <hr class="divider" />
    <div>

       <form @submit.prevent="createtodo">

  <div>
    <label>Title</label>
    <input v-model="title" type="text" />
  </div>

  <div>
    <label>Description</label>
    <input v-model="description" type="text" />
  </div>

  <button type="submit">
    Add Todo
  </button>

</form>

    </div>

    <table class="todos-table">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>discription</th>
          <th>status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
       <tr v-for="todo in todos" :key="todo.id">
         <td>{{todo.id}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.description}}</td>
            <td>
                    <span v-if="todo.status === TodoStatus.Pending">
                        ⏳ Pending
                    </span>

                    <span v-else>
                        ✅ Completed
                    </span>
                    </td>

              <td>
    <button @click="changeStatus(todo.id)">
      Change Status
    </button>

    <button class="error" @click="removeTodo(todo.id)">
      Delete
    </button>
  </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Todo, TodoStatus } from "../../types/Todo"
import { useTodo } from "../composables/form/useTodo"

const { todos, addTodo, removeTodo, changeStatus } = useTodo()


const title = ref('')
const description = ref('')

function createtodo(){
  addTodo(new Todo(Date.now(), title.value, description.value, TodoStatus.Pending))
  title.value = ""
  description.value = ""
}

</script>


<style scoped>
/* Main Container */
.todos-container {
  background: rgba(30, 41, 59, 0.4);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #334155;
  color: #fff;
  font-family: system-ui, sans-serif;
  animation: fadeIn 0.35s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.divider {
  margin-bottom: 25px;
  border: none;
  border-bottom: 1px solid #475569;
}

/* TABLE */
.todos-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(15, 23, 42, 0.3);
  border-radius: 12px;
  overflow: hidden;
}

.todos-table thead {
  background: rgba(0, 0, 0, 0.4);
}

.todos-table th,
.todos-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #334155;
  font-size: 15px;
}

.todos-table th {
  font-weight: 600;
  color: #cbd5e1;
}

.todos-table tr:hover {
  background: rgba(255, 255, 255, 0.06);
  transition: 0.2s;
}

/* BADGES */
.badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
}

.badge-done {
  background: rgba(34,197,94,0.1);
  color: #22c55e;
  border: 1px solid rgba(34,197,94,0.25);
}

.badge-progress {
  background: rgba(59,130,246,0.1);
  color: #3b82f6;
  border: 1px solid rgba(59,130,246,0.25);
}

.badge-pending {
  background: rgba(245,158,11,0.1);
  color: #f59e0b;
  border: 1px solid rgba(245,158,11,0.25);
}

/* ACTION BUTTONS */
.btn {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  margin-right: 6px;
  transition: 0.2s;
}

.edit {
  background: #3b82f6;
  color: white;
}

.edit:hover {
  background: #60a5fa;
}

.delete {
  background: #ef4444;
  color: white;
}

.delete:hover {
  background: #f87171;
}




.todos-container{
  width: 900px;
  margin: 40px auto;
  font-family: Arial;
}

.title{
  margin-bottom: 10px;
}

.divider{
  margin-bottom: 20px;
}

form{
  display:flex;
  gap:20px;
  align-items:flex-end;
  margin-bottom:25px;
}

form div{
  display:flex;
  flex-direction:column;
}

input{
  padding:8px 10px;
  border:1px solid #ccc;
  border-radius:6px;
  width:200px;
}

button{
  padding:8px 14px;
  border:none;
  background:#4CAF50;
  color:white;
  border-radius:6px;
  cursor:pointer;
}
.error{
  background: red;
  margin-left: 15px
}

button:hover{
  background:#43a047;
}

.todos-table{
  width:100%;
  border-collapse:collapse;
}

.todos-table th,
.todos-table td{
  border:1px solid #ddd;
  padding:10px;
  text-align:left;
}

.todos-table th{
  background:#f5f5f5;
}

</style>
