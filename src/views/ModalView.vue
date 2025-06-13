<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">Modal Demo (對話窗)</h1>
            <button class="button is-primary" @click="showModal = true">Launch Card Modal</button>
            <CardModal v-model="showModal">
                <template #header>
                    請提供您的資訊
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
                    <span v-if="error.name" class="help is-danger">{{ error.name }}</span>
                </div>

                <div class="field">
                    <label for="age" class="label">年紀</label>
                    <div class="control">
                        <input id="age" v-model="inquery.age" class="input" type="text" placeholder="Text input">
                    </div>
                    <span v-if="error.age" class="help is-danger">{{ error.age }}</span>
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

const error = ref({
    name: '',
    age: ''
});

const validate = () => {
    error.value.name = '';
    error.value.age = '';

    if (!inquery.value.name) {
        error.value.name = '姓名不能為空';
    }

    const age = Number(inquery.value.age);
    if (!inquery.value.age) {
        error.value.age = '年紀不能為空';
    } else if (isNaN(age) || age <= 15) {
        error.value.age = '年紀必須大於 15 歲';
    }

    return !error.value.name && !error.value.age;
};

const save = () => {
    if (!validate()) {
        return;
    }
    showModal.value = false;
};

const cancel = () => {
    inquery.value.name = '';
    inquery.value.age = '';
    error.value.name = '';
    error.value.age = '';

    showModal.value = false;
};


</script>