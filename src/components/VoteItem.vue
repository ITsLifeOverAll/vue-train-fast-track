<template>
    <div class="card columns ">
        <div class="is-one-third image is-64x64 m-4">
            <img src="/399-100x100.jpg" alt="Placeholder image">
        </div>

        <div class="card-content column">
            <div class="media">
                <div class="media-content m-4">
                    <span class="title is-4">John Smith</span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, cumque!
                    </p>
                </div>
                <div class="media-right">
                    ^ 18
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