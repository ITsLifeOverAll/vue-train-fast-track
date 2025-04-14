<template>
  <div class="container p-4">
    <h1 class="title is-3 has-text-centered">Hello Vue!</h1>
    <VoteItem v-bind="item" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VoteItem from './components/VoteItem.vue';

const item = ref({
  name: 'John',
  description: 'kfkdsgksfddjs',
  imageUrl: '/399-100x100.jpg',
  votes: 25,
});


</script>
