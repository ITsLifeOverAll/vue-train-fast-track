<script setup>
import { ref, computed } from 'vue';
import Counter from './components/Counter.vue';
import VoteItem from './components/VoteItem.vue';
</script>

<template>
  <div class="container p-4">
    <h1 class="title is-3 has-text-centered">Hello Vue!</h1>
    <VoteItem />
  </div>
</template>
