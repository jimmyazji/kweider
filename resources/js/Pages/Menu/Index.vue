<template>
  <Head :title="$t('menu')" />
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-between text-lonestar-600 mx-4">
        <div class="relative">
          <Input
            type="text"
            class="input md:w-96 w-full ml-5 placeholder-lonestar-400 text-lonestar-600"
            :placeholder="$t('search')"
            v-model="search"
            autofocus
          />
          <svg
            class="absolute fill-current text-lonestar-500 opacity-70 -translate-y-1/2 transform top-1/2 right-5 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 92"
          >
            <path
              d="M57.8 2.2c-17.1 0-31 14.1-31 31.3 0 7.3 2.5 13.9 6.6 19.3L4 82.6a4.53 4.53 0 000 6.3c.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3l29.4-29.8c5.1 3.7 11.3 5.8 18 5.8 17.1 0 31-14.1 31-31.3S74.9 2.2 57.8 2.2zm0 54.8c-12.7 0-23-10.5-23-23.4 0-12.9 10.3-23.4 23-23.4s23 10.5 23 23.4c0 12.9-10.3 23.4-23 23.4zm15.5-23c-.2 1.7-1.7 3-3.4 3h-.5c-1.9-.3-3.2-2-3-3.9.7-5.2-5.1-7.9-5.4-8-1.7-.8-2.5-2.9-1.7-4.6s2.8-2.5 4.6-1.8c.4.1 10.8 4.9 9.4 15.3zM66 41.6c.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2a4.2 4.2 0 01-1.2-2.8c0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2z"
            />
          </svg>
        </div>
        <div class="flex justify-between items-center">
        
          <Link
            class="mx-4 hover:underline focus:outline-none focus:underline"
            :href="route('menucats.index')"
          >{{ $t('manage categories') }}</Link>
          <Link
            class="mx-4 hover:underline focus:outline-none focus:underline"
            :href="route('menu.create')"
          >{{ $t('manage products') }}</Link>
        </div>
      </div>
      <div class="max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="flex flex-wrap justify-center">
          <a
            v-for="category in categories.data"
            :key="category.id"
            :href="'#' + category.name"
            v-smooth-scroll
            class="btn btn-primary btn-sm mx-0.5 my-0.5 text-almond-300 hover:scale-105 focus:scale-105 transform transition ease-in-out duration-150"
          >{{ category.name }}</a>
        </div>
        <section v-for="category in categories.data" :id="category.name">
          <div class="divider font-bold opacity-50" dir="ltr">{{ category.name }}</div>
          <div class="flex justify-center items-center lg:ml-2 mt-6">
            <div class="flex flex-wrap gap-4">
              <MenuProduct
                v-for="product in category.products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </section>
        <div v-if="categories.data.length === 0">
          <div class="divider font-bold opacity-50" dir="ltr">{{ $t('no results') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { inject, ref, watch } from "vue";
import MenuProduct from "@/Components/MenuProduct.vue";
import Input from "@/Components/Input";
import { Link } from "@inertiajs/inertia-vue3";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";

const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: refs.myEl,
  });
};
let props = defineProps({ categories: Object, filters: Object })
let search = ref(props.filters.search);
watch(
  search,
  debounce(function (value) {
    Inertia.get(
      "/menu",
      { search: value },
      { preserveState: true, replace: true }
    );
  }, 300)
);
</script>
