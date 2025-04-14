<template>
    <div class="card columns ">
        <div class="is-one-third image is-64x64 m-4">
            <img v-bind:src="image" alt="Placeholder image">
        </div>

        <div class="card-content column">
            <div class="media">
                <div class="media-content m-4">
                    <span class="title is-4">{{ name }}</span>
                    <p>
                        {{ description }}
                    </p>
                </div>
                <div class="media-right">
                    ^ <span class="tag is-info is-large">{{ votes }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
})
</script>