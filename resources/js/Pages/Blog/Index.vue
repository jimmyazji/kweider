<template>
  <Head :title="$t('blog')" />
  <header class="w-full lg:max-w-2xl lg:mx-auto mt-6 text-center">
    <div class="space-y-2 lg:space-y-0 mt-8 text-lonestar-600">
      <!--  Category -->
      <div class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl mx-2">
        <select
          v-model="category"
          :class="{ 'text-lonestar-400': !category }"
          class="select select-bordered focus:border-transparent w-full"
        >
          <option :value="undefined" selected>{{ category ? 'All' : $t('category') }}</option>
          <option v-for="category in categories" :value="category.slug">{{ category.name }}</option>
        </select>
      </div>

      <!-- Sort -->
      <div class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl mx-2">
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
        <Dropdown :align="locale === 'ar' ? 'right' : 'left'">
          <template #trigger>
            <button class="focus:scale-110 transform transition px-4 focus:outline-none">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </template>
          <template #content>
            <DropdownLink :href="route('posts.create')">{{ $t('create post') }}</DropdownLink>
            <DropdownLink :href="route('postcats.index')">{{ $t('manage categories') }}</DropdownLink>
          </template>
        </Dropdown>
      </div>
    </div>
  </header>
  <div class="max-w-6xl mx-auto mt-6 space-y-6">
    <FeaturedPost v-if="!(posts.data.length === 0)" :post="posts.data[0]" />
    <span class="flex justify-center items-center text-lonestar-500" v-else>{{ $t('no results') }}</span>
    <div v-if="posts.data.length > 1" class="lg:grid lg:grid-cols-6">
      <template v-for="(post, index) in posts.data.slice(1)">
        <Post :class="index > 1 ? 'col-span-2' : 'col-span-3'" :post="post" />
      </template>
    </div>
    <Pagination
      v-if="posts.next_page_url || posts.prev_page_url"
      class="ml-2 lg:ml-10 pb-10"
      :links="posts.links"
    />
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import { watch, ref } from "vue";
import Post from "@/Components/Post.vue"
import FeaturedPost from "@/Components/FeaturedPost.vue"
import Pagination from "@/Components/Pagination.vue"
import Input from "@/Components/Input.vue";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";

let props = defineProps({ posts: Object, filters: Object, categories: Object })
let category = ref(props.filters.category)
let sorting = ref(props.filters.sorting)
let search = ref(props.filters.search)
const locale = localStorage.getItem('locale');
watch(
  [search, category, sorting],
  debounce(function () {
    Inertia.get(
      "/blog",
      { category: category.value, search: search.value, sorting: sorting.value },
      { preserveState: true, preserveScroll: true, replace: true }
    );
  }, 800)
);
</script>
