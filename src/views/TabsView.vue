<template>
    <div class="container has-text-centered">
        <h1 class="title is-3">Tabs Demo Page</h1>
        <div class="tabs is-centered is-boxed">
            <ul>
                <li v-for="tab in tabs" :key="tab.id" :class="{ 'is-active': currentIndex == tab.id }"
                    @click="tabClicked(tab.id)">
                    <a>{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <KeepAlive>
            <Transition name="fade" mode="out-in">
                <component :is="tabs[currentIndex].component" />
            </Transition>
        </KeepAlive>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Pictures from '@/components/Pictures.vue';
import Music from '@/components/Music.vue';
import Videos from '@/components/Videos.vue';

const tabs = [
    { id: 0, name: 'Pictures', component: Pictures },
    { id: 1, name: 'Music', component: Music },
    { id: 2, name: 'Videos', component: Videos }
];
const currentIndex = ref(0);

const tabClicked = (index) => {
    console.log('tabClicked', index);

    currentIndex.value = index;
};

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
