<template>
    <Head :title="$t('home')" />
    <div>
        <img src="/images/asawer-walnut.gif" alt />
    </div>
    <div class="max-w-7xl mx-auto py-10">
        <h4 class="text-3xl text-lonestar-500 py-5 font-semibold">
            Featured Products
        </h4>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
const breakpoints = {
    700: {
        itemsToShow: 3.5,
    },
    1024: {
        itemsToShow: 5,
    },
};
</script>
<style scoped></style>
