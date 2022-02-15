<template>
  <Head :title="$t('home')" />

  <!-- <div class="h-80 overflow-hidden">
    <Carousel :autoplay="true" class="carousel-1" v-slot="{ currentSlide, animation }">
      <Slide :animation="animation">
        <div v-show="currentSlide === 1">
          <img class="min-w-full h-full" src="/images/IMG_1.jpg" alt />
        </div>
      </Slide>
      <Slide :animation="animation">
        <div v-show="currentSlide === 2">
          <img class="min-w-full h-full" src="/images/IMG_2.jpg" alt />
        </div>
      </Slide>
      <Slide :animation="animation">
        <div v-show="currentSlide === 3">
          <img class="min-w-full h-full" src="/images/IMG_3.jpg" alt />
        </div>
      </Slide>
    </Carousel>
  </div> -->
  <div class="px-20">
    <img src="/images/asawer-walnut.gif" alt />
  </div>
  <div class="flex mx-auto flex-wrap max-w-7xl gap-4 py-10">
    <MenuProduct :product="product" />
    <MenuProduct :product="product" />
    <MenuProduct :product="product" />
    <MenuProduct :product="product" />
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Carousel from "@/Components/Carousel.vue";
import Slide from "@/Components/Slide.vue";
import MenuProduct from "@/Components/MenuProduct.vue";
const product = {
  name:'product',
  type:'test product',
  description:'This is a test product',
}
</script>