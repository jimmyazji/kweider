<template>
    <div class="inline-flex justify-center items-center w-full">
        <Bullet class="-translate-y-1" />
        <hr class="my-8 w-full h-px bg-lonestar-500 bg-opacity-50 border-0" />
        <span
            class="absolute flex left-1/2 px-3 font-medium text-lonestar-800 text-opacity-70 bg-almond-400 -translate-x-1/2 -translate-y-0.5"
            ><slot />
        </span>
        <Bullet class="-scale-x-100 -translate-y-1"/>
    </div>
</template>
<script setup>
import Bullet from "@/Components/Bullet.vue";
</script>
