<template>
    <div class="slide absolute top-0 left-0 w-full max-h-full h-full">
        <transition :name="animation">
            <slot />
        </transition>
    </div>
</template>
<script setup>
defineProps({ animation: String })
</script>