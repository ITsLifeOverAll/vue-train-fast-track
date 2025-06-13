<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">Modal Demo (對話窗)</h1>
            <button class="button is-primary" @click="showModal = true">Launch Card Modal</button>
            <CardModal v-model="showModal">
                <template #header>
                    請提供資訊
                </template>
                <template #footer>
                    <div class="buttons">
                        <button class="button is-success" @click="save">確認</button>
                        <button class="button" @click="cancel">取消</button>
                    </div>
                </template>

                <div class="field">
                    <label for="name" class="label">姓名</label>
                    <div class="control">
                        <input id="name" v-model="inquery.name" class="input" type="text" placeholder="Text input">
                    </div>
                </div>

                <div class="field">
                    <label for="age" class="label">年紀</label>
                    <div class="control">
                        <input id="age" v-model="inquery.age" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </CardModal>
        </div>
    </div>
</template>

<script setup>
import CardModal from '@/components/CardModal.vue';
import { ref } from 'vue';
const showModal = ref(false);

const inquery = ref({
    name: '',
    age: ''
});


</script>