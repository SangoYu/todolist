<template>
  <div id="app">
    <h1>To Do List</h1>
    <todo-list />
  </div>
</template>

<script>
import ToDoList from './components/todo-list.vue'

export default {
  name: 'app',
  components: {
    'todo-list' : ToDoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-list{
  width: 300px;
  margin: 0 auto;
}

.todo-item{
  cursor: pointer;
  word-break: break-all;
  margin: 10px 0;
}
.todo-item.done{
  opacity: 0.5;
}
</style>
