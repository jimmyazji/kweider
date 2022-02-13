<template>
  <Head :title="$t('menu')" />
  <header class="max-w-sm lg:max-w-xl lg:mx-auto mx-2 mt-6 text-center">
    <div class="space-y-2 lg:space-y-0 mt-8 text-lonestar-600">
      <!-- Search -->
      <div
        class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl px-2 py-2 lg:mx-2"
      >
        <Input
          v-model="search"
          type="text"
          name="search"
          :placeholder="$t('search')"
          class="placeholder-lonestar-400 font-semibold text-sm w-full"
        />
        <Dropdown v-if="canList & canListCat" align="lg:right">
          <template #trigger>
            <button class="focus:scale-110 transform transition px-4 focus:outline-none">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </template>
          <template #content>
            <DropdownLink
              v-if="canListCat"
              :href="route('menucats.index')"
            >{{ $t('manage categories') }}</DropdownLink>
            <DropdownLink
              v-if="canList"
              :href="route('menu.create')"
            >{{ $t('manage products') }}</DropdownLink>
          </template>
        </Dropdown>
      </div>
    </div>
  </header>
  <div class="py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="flex flex-wrap justify-center items-center relative">
          <transition-group appear name="list">
            <Button
              v-for="category in categories.data"
              :key="category.id"
              :href="'#' + category.name"
              v-smooth-scroll
              class="btn btn-primary btn-sm mx-0.5 my-0.5 text-almond-300 hover:scale-105 focus:scale-105 transform transition ease-in-out duration-150"
            >{{ category.name }}</Button>
          </transition-group>
        </div>
        <section v-for="category in categories.data" :id="category.name">
          <transition appear name="fade-expand">
            <div class="divider font-bold opacity-50" dir="ltr">{{ category.name }}</div>
          </transition>
          <div class="flex flex-wrap justify-start gap-4 relative">
            <transition-group appear name="list">
              <MenuProduct
                v-for="product in category.products"
                :key="product.id"
                :product="product"
              />
            </transition-group>
          </div>
        </section>
        <div v-if="categories.data.length === 0">
          <transition appear name="fade-expand">
            <div class="divider font-bold opacity-50" dir="ltr">{{ $t('no results') }}</div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Button from "@/Components/Button.vue";
import Dropdown from "@/Components/Dropdown";
import DropdownLink from "@/Components/DropdownLink";
import { inject, ref, watch } from "vue";
import MenuProduct from "@/Components/MenuProduct.vue";
import Input from "@/Components/Input";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";

const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: refs.myEl,
  });
};
const locale = localStorage.getItem("locale");
let props = defineProps({ categories: Object, filters: Object, canList: Boolean, canListCat: Boolean })
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

