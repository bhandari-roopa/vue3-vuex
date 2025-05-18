<script setup lang="ts">
import { ref,Ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count:Ref<string> = ref('200');

const filterTodo=(e:Event)=>{
    const target = e.target as HTMLInputElement;
    store.dispatch('filterTodo', parseInt(target.value));
}

</script>

<template>
    <div class="filterCOntainer">
        <h3>Filter Todo</h3>
        <select v-model="count" v-on:change="(e)=>filterTodo(e)" class="selector">
            <option value="200">200</option>
            <option value="150">150</option>
            <option value="100">100</option>
            <option value="75">75</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
        </select>
    </div>

</template>

<style scoped lang="css">
.filterCOntainer {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.selector {
    width: 60%;
    height: 2rem;
}

</style>