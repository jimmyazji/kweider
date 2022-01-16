<template>
  <Head :title="$t('products')" />
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex-wrap sm:flex sm:justify-between text-lonestar-600 mx-4">
        <div class="relative">
          <Input
            type="text"
            class="input w-96 sm:ml-5 placeholder-lonestar-400 text-lonestar-600"
            :placeholder="$t('search')"
            v-model="search"
          />
          <svg
            class="absolute fill-current text-lonestar-500 opacity-60 -translate-y-1/2 transform top-1/2 w-3.5 h-3.5"
            :class="(locale === 'ar') ? 'left-5' : 'right-5'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 92"
          >
            <path
              d="M57.8 2.2c-17.1 0-31 14.1-31 31.3 0 7.3 2.5 13.9 6.6 19.3L4 82.6a4.53 4.53 0 000 6.3c.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3l29.4-29.8c5.1 3.7 11.3 5.8 18 5.8 17.1 0 31-14.1 31-31.3S74.9 2.2 57.8 2.2zm0 54.8c-12.7 0-23-10.5-23-23.4 0-12.9 10.3-23.4 23-23.4s23 10.5 23 23.4c0 12.9-10.3 23.4-23 23.4zm15.5-23c-.2 1.7-1.7 3-3.4 3h-.5c-1.9-.3-3.2-2-3-3.9.7-5.2-5.1-7.9-5.4-8-1.7-.8-2.5-2.9-1.7-4.6s2.8-2.5 4.6-1.8c.4.1 10.8 4.9 9.4 15.3zM66 41.6c.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2a4.2 4.2 0 01-1.2-2.8c0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2z"
            />
          </svg>
        </div>
        <div class="mt-5 sm:mt-0 flex justify-between">
          <Link
            v-if="canListCat"
            class="mx-4 hover:underline whitespace-nowrap"
            :href="route('exportcats.index')"
          >{{ $t('manage categories') }}</Link>
          <Link
            v-if="canList"
            class="mx-4 mb-2 hover:underline whitespace-nowrap"
            :href="route('products.create')"
          >{{ $t('manage products') }}</Link>
        </div>
      </div>
      <div class="xl:flex justify-start">
        <div class="hidden xl:flex mt-6 px-4 py-4 mx-4 w-40">
          <div class="lg:w-1/4 text-lonestar-700 mt-4">
            <h2 class="font-bold">{{ $t('categories') }}</h2>
            <div class="mx-1 mt-1">
              <span
                @click.prevent="setCat('')"
                class="block whitespace-nowrap text-sm"
                :class="!category ? 'font-bold' : 'cursor-pointer'"
              >{{ $t('all') }}</span>
              <span
                class="block whitespace-nowrap text-sm"
                v-for="cat in categories"
                @click.prevent="setCat(cat.name)"
                :class="category === cat.name ? 'font-bold' : 'cursor-pointer'"
              >{{ cat.name }}</span>
            </div>
          </div>
        </div>
        <div class="flex-wrap relative w-full">
          <transition-group name="list" appear>
            <ExportProduct
              v-for="product in products.data"
              :key="product.id"
              class="mt-4"
              :product="product"
            />
            <div v-if="products.data.length === 0" class="w-full mt-20 flex justify-center">
              <span class="text-lg text-lonestar-600 opacity-80">{{ $t('no results') }}</span>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import ExportProduct from "@/Components/ExportProduct.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";
const locale = localStorage.getItem("locale");
let props = defineProps({ categories: Object, products: Object, filters: Object, canList: Boolean, canListCat: Boolean });
let search = ref(props.filters.search)
let category = ref(props.filters.category)
const setCat = (cat) => {
  category.value = cat;
}

watch(
  category,
  debounce(function (value) {
    Inertia.get(
      "/products",
      { category: value },
      { preserveState: true, replace: true }
    );
  }, 300)
)
watch(
  search,
  debounce(function (value) {
    Inertia.get(
      "/products",
      { search: value },
      { preserveState: true, replace: true }
    );
  }, 300)
);
</script>
<style>
</style>