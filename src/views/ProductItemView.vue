<template>
    <div class="m-4">
        <h1 class="title is-4 has-text-centered">
            Product {{ product.name }}
        </h1>

        <div class="card columns m-4">
            <div class="is-one-third figure image is-128x128 m-4">
                <img :src="product.imageUrl" alt="Placeholder image">
            </div>

            <div class="card-content column">
                <div class="media">
                    <div class="media-content m-4">
                        <p class="title is-4">
                            {{ product.name }}
                        </p>
                        <p>
                            {{ product.description }}
                        </p>
                    </div>
                    <div class="media-right">
                        ${{ product.price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import products from '@/data/foods'

const props = defineProps({
    id: {
        type: [Number, String],
        required: true
    }
})

const productId = Number(props.id)

const product = products.find(product => product.id === productId)


</script>
