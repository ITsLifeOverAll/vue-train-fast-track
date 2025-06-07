<template>
    <div>
        <!-- (todo) http get -->
        <h1 class="title is-3 has-text-centered">API 呼叫練習 (axios, async)</h1>

        <div class="block box container is-max-desktop">
            <h2 class="subtitle is-4">Http Get (todo)</h2>
            <div>
                <div class="is-flex is-align-items-center" style="gap: 1rem;">
                    <button class="button is-primary" @click="getMethod">待辦事項 (Http Get Method)</button>
                    <span>
                        ID:
                        <input type="text" v-model="id" />
                    </span>
                </div>
                <pre class="m-2">{{ getData }}</pre>
            </div>
        </div>

        <!-- (todo) http post  -->
        <div class="box container is-max-desktop">
            <h2 class="subtitle is-4">Http Post (todo)</h2>
            <button class="button is-primary" @click="postMethod">新增待辦 (Http Post Method)</button>

            <pre class="m-2">{{ postData }}</pre>
        </div>

        <!-- (todo) http delete -->
        <div class="box container is-max-desktop">
            <h2 class="subtitle is-4">Http Delete (todo)</h2>
            <div class="is-flex is-align-items-center" style="gap: 1rem;">
                <button class="button is-primary" @click="deleteMethod">刪除待辦 (Http Delete Method)</button>
                <span>
                    ID:
                    <input type="text" v-model="id" />
                </span>
            </div>

            <pre class="m-2">{{ deleteData }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const id = ref(1);
const getData = ref('');

const getMethod = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id.value}`);
        getData.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        getData.value = `Error fetching data
            : ${error.message}`;
    }
}

const postData = ref('');
const postMethod = async () => {
    const newTodo = {
        userId: 1,
        title: "新的待辦事項",
        completed: false
    };

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        postData.value = response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        postData.value = `Error posting data: ${error.message}`;
    }
}

const deleteData = ref('');
const deleteMethod = async () => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id.value}`);
        deleteData.value = `待辦事項 ID ${id.value} 已成功刪除。`;
    } catch (error) {
        console.error("Error:", error.message);
        deleteData.value = `Error: ${error.message}`;
    }
}

</script>