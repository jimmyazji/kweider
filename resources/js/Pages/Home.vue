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
  </div>-->
  <div>
    <img src="/images/asawer-walnut.gif" alt />
  </div>
  <div class="max-w-7xl mx-auto py-10">
    <h4 class="text-3xl text-lonestar-500 py-5 font-semibold">Featured Products</h4>
    <Carousel
      :itemsToShow="4"
      :itemsToScroll="1"
      class="relative text-center box-border hidden md:block"
    >
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <Carousel :itemsToShow="1" :itemsToScroll="1" class="relative text-center box-border md:hidden">
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <h4 class="text-3xl text-lonestar-500 py-5 font-semibold">Trending Products</h4>
    <Carousel :itemsToShow="4" :itemsToScroll="1" class="relative text-center box-border">
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <Slide class="borded border-lonestar-500 overflow-hidden">
        <Link
          class="carousel__item rounded-lg bg-almond-500 border border-lonestar-500 justify-center items-center"
          :href="route('menu.index') + '#big-meals'"
        >
          <img
            src="/media/3/conversions/web5-02-menu.jpg"
            class="rounded-lg object-fill w-80 h-80"
            alt
          />
        </Link>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

</script>
<style>
:root {
  --vc-clr-primary: #6b0303;
  --vc-clr-secondary: #974f4f;
  --vc-clr-white: #ffffff;
}
.carousel__item {
  min-height: 300px;
  width: 350px;
  display: flex;
}
.carousel__slide {
  padding: 5px;
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
