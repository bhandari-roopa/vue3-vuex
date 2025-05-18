<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title:Ref<string> = ref('');

const addTodo = (e:Event) => {
  e.preventDefault();
  if (title.value.trim() !== '') { 
    store.dispatch('addTodo', { title: title.value }); 
    title.value = ''; 
  }
};
</script>

<template>
    <div class="addContainer">
        <h3>Add Todo</h3>

        <form @submit="addTodo"  class="addForm">
        <input type="text" v-model="title" placeholder="Enter todo title" class="todoInput"/>
        <input type="submit" value=" Add " class="addButton"/>
        </form>


    </div>

</template>

<style scoped lang="css">
.addContainer {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.addForm {
  display: flex; 
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center; 
  gap: 0.5rem; 
}

.todoInput {
  flex: 1; 
  height: 1.5rem;
}

.addButton {
  height: 2rem;
  background-color: #f0f0f0;
  border: none; 
  width: auto;
  cursor: pointer;
  border-radius: 0.2rem; 
  font-size: 1rem; 
  white-space: nowrap; 
}
</style>