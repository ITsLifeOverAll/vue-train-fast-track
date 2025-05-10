<template>
    <div class="columns">
        <div class="column is-one-quarter m-4">
            <h1>Product List</h1>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <router-link :to="{ name: 'productitem', params: { id: product.id } }">
                        {{ product.name }}
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="column">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import products from '@/data/foods.js';

</script>
