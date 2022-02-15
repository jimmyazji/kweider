<template>
  <Head :title="$t('manage categories')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t("manage categories") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form @submit.prevent="submit">
            <div class="grid grid-row-3 gap-1">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <Input
                    id="en_name"
                    type="text"
                    class="block mt-1 w-full"
                    v-model="form.en_name"
                    :placeholder="$t('en name')"
                    autofocus
                    autocomplete="en_name"
                    :class="form.errors.en_name ? 'input-error' : ''"
                  />
                  <div
                    v-if="form.errors.en_name"
                    v-text="form.errors.en_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
                <div>
                  <Input
                    id="ar_name"
                    type="text"
                    v-model="form.ar_name"
                    class="block mt-1 w-full"
                    :placeholder="$t('ar name')"
                    :class="{ 'input-error': form.errors.ar_name }"
                  />
                  <div
                    v-if="form.errors.ar_name"
                    v-text="form.errors.ar_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="lg:flex items-center justify-between mt-4">
                <div>
                  <Input
                    type="text"
                    class="input md:w-96 w-full mr-1 placeholder-lonestar-400 text-lonestar-800"
                    :placeholder="$t('search')"
                    v-model="search"
                    autofocus
                  />
                  <Link
                    :href="route('menu.index')"
                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1 hidden lg:inline-flex"
                  >{{ $t("back") }}</Link>
                </div>
                <div class="flex justify-between items-center mt-4 lg:mt-0">
                  <div>
                    <Button
                      type="button"
                      class="px-5 mx-0.5"
                      :class="{ 'opacity-25': form.processing }"
                      @click.prevent="clear()"
                    >{{ $t("clear") }}</Button>
                    <Button
                      type="submit"
                      class="px-5 mx-0.5"
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                    >{{ $t("submit") }}</Button>
                  </div>
                  <Link
                    :href="route('menu.index')"
                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1 lg:hidden"
                  >{{ $t("back") }}</Link>
                </div>
              </div>
            </div>
          </form>
          <div class="overflow-x-auto mt-4">
            <table class="table w-full table-compact table-zebra text-lonestar-800" dir="ltr">
              <thead>
                <tr>
                  <th></th>
                  <th>{{ $t("en name") }}</th>
                  <th>{{ $t("ar name") }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <TransitionGroup name="list">
                  <tr v-for="category in categories.data" :key="category.id">
                    <td>
                      <span @click="rank(category.id, 'up')">
                        <i
                          class="fa fa-angle-up block -mb-0.5 cursor-pointer hover:text-green-700 transition-colors"
                        ></i>
                      </span>
                      <span @click="rank(category.id, 'down')">
                        <i
                          class="fa fa-angle-down block -mt-0.5 cursor-pointer hover:text-red-700 transition-colors"
                        ></i>
                      </span>
                    </td>
                    <td>{{ category.name.en }}</td>
                    <td>{{ category.name.ar }}</td>
                    <td>
                      <div class="flex justify-end">
                        <button @click="edit(category)">
                          <i class="fa fa-edit mr-1 text-lonestar-500"></i>
                        </button>
                        <button @click="destroy(category.id)">
                          <i class="fa fa-trash text-red-700"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="categories.data.length === 0">
                    <td colspan="12">
                      <div class="flex justify-center items-center">{{ $t('no results') }}</div>
                    </td>
                  </tr>
                </TransitionGroup>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>{{ $t("en name") }}</th>
                  <th>{{ $t("ar name") }}</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        v-if="categories.next_page_url || categories.prev_page_url"
        class="mt-5 ml-2 lg:ml-10 pb-10"
        :links="categories.links"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination.vue";
import debounce from "lodash/debounce";
let form = useForm({
  en_name: '',
  ar_name: ''
});
let props = defineProps({
  categories: Object, filters: Object
})

let search = ref(props.filters.search);
let category_id = ""
let submit = () => {
  if (!category_id) {
    form.post(route('menucategories.index'), {
      preserveScroll: true,
      onSuccess: () => form.reset(),
    })
  }
  else {
    form.put(route('menucategories.update', category_id), {
      preserveScroll: true,
      onSuccess: () => clear(),
    })
  }
};
let edit = (category) => {
  category_id = category.id
  form.en_name = category.name.en
  form.ar_name = category.name.ar
}
let clear = () => {
  category_id = ''
  form.reset()
}
let destroy = (id) => {
  Inertia.delete(`/menucategories/${id}`, {
    onBefore: () => confirm('Are you sure you want to delete this category? all of the products in this category will be lost'),
    preserveScroll: true
  })
}
const rank = (id, dir) => {
  if (dir === 'up') {
    Inertia.put(route('menucategories.advance', id),
      {},
      { preserveScroll: true });
  }
  else {
    Inertia.put(route('menucategories.postpone', id),
      {},
      { preserveScroll: true });
  }
}

watch(
  search,
  debounce(function (value) {
    Inertia.get(
      "/menucategories",
      { search: value },
      { preserveState: true, replace: true }
    );
  }, 300)
);
</script>
