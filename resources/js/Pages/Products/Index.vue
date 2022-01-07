<template>
  <Head :title="$t('products')" />
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center md:justify-end text-lonestar-600 mx-4">
        <Link
          class="mx-4 hover:underline whitespace-nowrap"
          :href="route('exportcats.index')"
        >{{ $t('manage categories') }}</Link>
        <Link
          class="mx-4 mb-2 hover:underline whitespace-nowrap"
          :href="route('products.create')"
        >{{ $t('manage products') }}</Link>
      </div>
      <div class="xl:flex justify-evenly">
        <div class="hidden xl:flex mt-6 px-4 py-4 mx-4 sm:px-6 lg:max-w-7xl">
          <div class="lg:w-1/4 text-lonestar-700 mt-4">
            <h2 class="font-bold">{{ $t('categories') }}</h2>
            <div class="mx-1 mt-1">
              <a href="#" class="block whitespace-nowrap text-sm">{{ $t('all') }}</a>
              <a
                href="#"
                class="block whitespace-nowrap text-sm"
                v-for="category in categories"
              >{{ category.name }}</a>
            </div>
          </div>
        </div>
        <div class="flex-wrap">
          <ExportProduct
            v-for="product in products"
            :key="product.id"
            class="mt-4"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { inject, ref } from "vue";
import ExportProduct from "@/Components/ExportProduct.vue";
import { Link } from "@inertiajs/inertia-vue3";
const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: refs.myEl,
  });
};
defineProps({
  categories: Object, products: Object,
});

</script>
