<script setup lang="ts">
import { computed, onMounted, ref, Ref } from 'vue';
import { useStore } from 'vuex'; 
import { Todo } from './model/Todo';

const store = useStore(); 

// Dispatch the action to fetch todos when the component is mounted
onMounted(() => {
  store.dispatch('fetchTodos');
});

// Use a computed property to get the todos from the store
const todos:Ref<Todo[]> = computed(() => store.getters.allTodos);

</script>
<template>
    <div class="todoContainer">
        <div class="todos-grid">
    <div v-for="(todo) in todos" :key="todo.id" class="todo-item" :class="{ 'completed': todo.completed }">
        <div >
        <input
          type="checkbox"
          :id="'todo-' + todo.id"
          v-model="todo.completed"
          @change="store.dispatch('updateTodo', todo)"
        >
        <label :for="'todo-' + todo.id">
          {{ todo.title }}
        </label>
      </div>
      <div>
        <button @click="store.dispatch('deleteTodo', todo.id)"> delete</button>
      </div>
    </div>
  </div>
    </div>

</template>
<style scoped>
.todoContainer{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.25rem;
}
.todos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 1rem; 
  padding: 1rem; 
}

.todo-item {
  background-color: #f0f0f0; 
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: left;
  display: flex; 
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  align-items: flex-start;
}

.todo-item.completed {
  background-color: #e0f7fa;
  text-decoration: line-through;
  color: #777;
}
</style>
