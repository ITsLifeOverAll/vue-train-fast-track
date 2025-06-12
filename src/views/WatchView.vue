<template>
    <div>
        <div class="container is-max-desktop">
            <div class="field is-grouped">
                <label for="todoId" class="label">Todo Id: </label>
                <p class="control is-expanded">
                    <input id="todoId" v-model.lazy="todoId" class="input" type="text" placeholder="Find a todo">
                </p>
                <p class="control">
                    <button class="button is-info" @click="search"> Search </button>
                </p>
                <p class="control">
                    <button class="button" type="button" @click="clear">Clear</button>
                </p>
            </div>

            <div class="box">
                <pre>{{ todoInfo }}</pre>
            </div>
            <div class="box">Watch 執行次數: {{ watches }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import axios from 'axios';

const todoId = ref('');
const todoInfo = ref('');
const watches = ref(0);

const search = async () => {
    if (!todoId.value) {
        todoInfo.value = '請輸入 Todo Id';
        return;
    }

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
        todoInfo.value = response.data;
    } catch (error) {
        todoInfo.value = `錯誤: ${error.message}`;
    }
};

const clear = () => {
    todoId.value = '';
    todoInfo.value = '';
    watches.value = 0;
};


// // 使用 watch 
// watch(todoId, async (newValue, oldValue) => {
//     if (newValue !== oldValue) {
//         watches.value++;
//         await search();
//     }
// });

// 使用 watchEffect
watchEffect(async () => {
    console.log('watchEffect 執行');
    watches.value++;
    await search();
});

</script>