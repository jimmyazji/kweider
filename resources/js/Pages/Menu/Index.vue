<template>
  <Head :title="$t('menu')" />
  <header class="bg-almond-200 shadow-sm">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-lonestar-800 leading-tight">{{ $t("menu") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center md:justify-end text-lonestar-600 mx-4">
        <Link
          class="mx-4 hover:underline focus:outline-none focus:underline"
          :href="route('menucats.index')"
        >{{ $t('manage categories') }}</Link>
        <Link
          class="mx-4 mb-2 hover:underline focus:outline-none focus:underline"
          :href="route('menu.create')"
        >{{ $t('manage products') }}</Link>
      </div>

      <div class="max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8p">
        <div class="flex flex-wrap justify-center">
          <a
            v-for="category in categories"
            :key="category.id"
            :href="'#' + category.name"
            v-smooth-scroll
            class="btn btn-primary btn-sm mx-0.5 my-0.5 text-almond-300 hover:scale-105 focus:scale-105 transform transition ease-in-out duration-150"
          >{{ category.name }}</a>
        </div>
        <section v-for="category in categories" :id="category.name">
          <div class="divider font-bold opacity-50" dir="ltr">{{ category.name }}</div>
          <div class="sm:flex container justify-evenly mt-6">
            <div
              class="grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4"
            >
              <MenuProduct
                v-for="product in category.products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { inject, ref } from "vue";
import MenuProduct from "@/Components/MenuProduct.vue";
import Button from "@/Components/Button.vue";
import { Link } from "@inertiajs/inertia-vue3";
const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: refs.myEl,
  });
};
defineProps({
  categories: Object,
})
</script>
