<template>
  <Head :title="$t('products')" />
  <header class="w-full lg:max-w-2xl lg:mx-auto mt-6 text-center">
    <div class="space-y-2 lg:space-y-0 mt-8 text-lonestar-600">
      <!--  Category -->
      <div class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl mx-2">
        <select
          v-model="currentCategory"
          :class="{ 'text-lonestar-400': !currentCategory }"
          class="select select-bordered focus:border-transparent w-full"
        >
          <option :value="undefined" selected>{{ currentCategory ? $t('all') : $t('category') }}</option>
          <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
        </select>
      </div>

      <!-- Sort -->
      <div class="relative flex  lg:inline-flex items-center bg-almond-200 rounded-xl mx-2">
        <select
          v-model="sorting"
          :class="{ 'text-lonestar-400': !sorting }"
          class="select select-bordered focus:border-transparent w-full"
        >
          <option :value="undefined" selected>{{ sorting ? 'New first' : $t('sort by') }}</option>
          <option value="asc">{{ $t('old first') }}</option>
        </select>
      </div>

      <!-- Search -->
      <div
        class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl px-2 py-2 mx-2"
      >
        <Input
          v-model="search"
          type="text"
          name="search"
          :placeholder="$t('search')"
          class="placeholder-lonestar-400 font-semibold text-sm w-full"
        />
        <Dropdown v-if="canList || canListCategories" align="left">
          <template #trigger>
            <button class="focus:scale-110 transform transition px-4 focus:outline-none">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </template>
          <template #content>
            <DropdownLink
              v-if="canListCategories"
              :href="route('exportcategories.index')"
            >{{ $t('manage categories') }}</DropdownLink>
            <DropdownLink
              v-if="canList"
              :href="route('products.create')"
            >{{ $t('manage products') }}</DropdownLink>
          </template>
        </Dropdown>
      </div>
    </div>
  </header>
  <div class="py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="xl:flex justify-start">
        <div class="hidden xl:flex mt-6 px-4 py-4 mx-4 w-40">
          <div class="lg:w-1/4 text-lonestar-700 mt-4">
            <h2 class="font-bold">{{ $t('categories') }}</h2>
            <div class="mx-1 mt-1">
              <span
                @click.prevent="setCategory(undefined)"
                class="block whitespace-nowrap text-sm transition"
                :class="!currentCategory ? 'font-bold text-lonestar-600' : 'text-lonestar-400 cursor-pointer'"
              >{{ $t('all') }}</span>
              <span
                class="block whitespace-nowrap text-sm transition"
                v-for="category in categories"
                @click.prevent="setCategory(category.name)"
                :class="currentCategory === category.name ? 'font-bold text-lonestar-600' : 'text-lonestar-400 cursor-pointer'"
              >{{ category.name }}</span>
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
import Input from "@/Components/Input";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";
import Dropdown from "@/Components/Dropdown";
import DropdownLink from "@/Components/DropdownLink";
const locale = localStorage.getItem("locale");
let props = defineProps({ categories: Object, products: Object, filters: Object, canList: Boolean, canListCategories: Boolean, sorting: Object });
let search = ref(props.filters.search)
let currentCategory = ref(props.filters.category)
let sorting = ref(props.filters.sorting)
const setCategory = (cat) => {
  currentCategory.value = cat;
}

watch(
  [search, currentCategory, sorting],
  debounce(function () {
    Inertia.get(
      "/products",
      { category: currentCategory.value, search: search.value, sorting: sorting.value },
      { preserveState: true, preserveScroll: true, replace: true }
    );
  }, 300)
);
</script>
<style>
</style>