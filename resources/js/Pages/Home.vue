<template>
  <Head :title="$t('home')" />

  <div class="h-140 overflow-hidden">
    <Carousel :autoplay="true" class="carousel-1" v-slot="{ currentSlide }">
      <Slide>
        <div v-show="currentSlide === 1">
          <img
            class="min-w-full h-full object-cover rounded-lg"
            src="../../../public/images/IMG_1.jpg"
            alt
          />
        </div>
      </Slide>
      <Slide>
        <div v-show="currentSlide === 2">
          <img
            class="min-w-full h-full object-cover rounded-lg"
            src="../../../public/images/IMG_2.jpg"
            alt
          />
        </div>
      </Slide>
      <Slide>
        <div v-show="currentSlide === 3">
          <img
            class="min-w-full h-full object-cover rounded-lg"
            src="../../../public/images/IMG_3.jpg"
            alt
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import Carousel from "@/Components/Carousel.vue";
import Slide from "@/Components/Slide.vue";
export default {
  components: {
    Head, Carousel, Slide,
  },
};
</script>
