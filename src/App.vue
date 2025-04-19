<template>
  <div class="container p-4">
    <h1 class="title is-3 has-text-centered">Hello Vue!</h1>
    <div v-for="item in voteItems" class="p-4">
      <VoteItem :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VoteItem from './components/VoteItem.vue';
import voteList from './data/votes.js'

voteList.sort((a, b) => {
  return b.votes - a.votes;
});

const voteItems = ref(voteList);


</script>
