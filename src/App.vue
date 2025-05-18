<script setup>
import TodosVue from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";
</script>

<template>
  <div class="app">
    <h1>Todos</h1>
    <AddTodo/>
    <FilterTodo/>
    <TodosVue/>
  </div>

</template>

<style scoped>
.app {
  min-width: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 4px;
}
</style>