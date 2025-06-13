<template>
    <div>
        <div class="modal" :class="{ 'is-active': showModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                </header>
                <section class="modal-card-body">
                    <!-- Content ... -->
                </section>
                <footer class="modal-card-foot">
                    <div class="buttons">
                        <button class="button is-success" @click="showModal = false">Save changes</button>
                        <button class="button" @click="showModal = false">Cancel</button>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script setup>
const showModal = defineModel({
    type: Boolean,
    default: false
});
</script>