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
            <div class="box">
                <pre>{{ userInfo }}</pre>
                <pre>{{ userInfoError }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useUserInfo } from '@/composables/userInfo'

const todoId = ref('');
const todoInfo = ref('');
const userId = ref('');

const { data: userInfo, error: userInfoError } = useUserInfo(userId);

const clear = () => {
    todoId.value = '';
    todoInfo.value = '';
    userId.value = '';
    userInfo.value = '';
    userInfoError.value = '';
};

const search = async () => {
    if (!todoId.value) {
        todoInfo.value = '請輸入 Todo Id';
        return;
    }

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
        todoInfo.value = response.data;
        userId.value = response.data.userId; // 假設 todo 資料中有 userId
        console.log('userId:', userId.value);
    } catch (error) {
        todoInfo.value = `錯誤: ${error.message}`;
    }
};

</script>