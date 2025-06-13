<template>
    <div>
        <div class="modal" :class="{ 'is-active': showModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <slot name="header">
                        <p class="modal-card-title"
                            style="color: red; font-weight: bold; background: #fff3cd; padding: 8px; border-radius: 4px;">
                            請父元件提供 header slot
                        </p>
                    </slot>
                </header>
                <section class="modal-card-body">
                    <slot> 請父元件提供預設 slot 的內容 </slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <div class="buttons">
                            <button class="button" @click="showModal = false">OK</button>
                        </div>
                    </slot>
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