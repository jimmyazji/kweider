<template>
  <Head :title="$t('products')" />
  <header class="bg-almond-200 shadow-sm">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-lonestar-800 leading-tight">{{ $t("products") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center md:justify-end text-lonestar-600 mx-4">
        <Link
          class="mx-4 hover:underline"
          :href="route('exportcats.index')"
        >{{ $t('manage categories') }}</Link>
        <Link
          class="mx-4 mb-2 hover:underline"
          :href="route('products.create')"
        >{{ $t('manage products') }}</Link>
      </div>
      <div class="lg:inline-flex">
        <div class="mt-6 px-4 py-4 mx-4 sm:px-6 lg:max-w-7xl">
          <div class="lg:w-1/4 text-lonestar-700 mt-4">
            <h2 class="font-bold">Categories</h2>
            <div class="mx-1 mt-1">
              <h1>category1</h1>
              <h1>category2</h1>
              <h1>category3</h1>
              <h1>category4</h1>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-2 mt-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-4 lg:mt-4"
        >
          <ExportProduct :product="product" />
          <ExportProduct :product="product" />
          <ExportProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { inject, ref } from "vue";
import ExportProduct from "@/Components/ExportProduct.vue";
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

})
let product = {
  name: 'product',
  type: 'type',
  description: 'alsdjglsndgjkl'
};
</script>
