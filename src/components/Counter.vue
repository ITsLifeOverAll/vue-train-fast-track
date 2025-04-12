<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);
const counterMessage = computed(() => {
  return 'Counter is ' + counter.value;
});

const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
const reset = () => {
  counter.value = 0;
};
</script>

<template>
  <div>
    <h2 class="subtitle is-5">Couter: {{ counter }}</h2>
    <div class="buttons">
      <button class="button is-primary" @click="increment">Increment</button>
      <button class="button is-link" @click="decrement">Decrement</button>
      <button class="button is-info" v-on:click="reset">Reset</button>
    </div>

    <h2 class="subtitle is-5">CounterMessage: {{ counterMessage }}</h2>

    <div class="content">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing
        elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
        lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
        odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub>
        works as well!
      </p>
    </div>

    <div class="buttons">
      <button class="button">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </button>
      <button class="button is-primary">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>@jgthms</span>
      </button>
      <button class="button is-success">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save</span>
      </button>
    </div>
  </div>



</template>
