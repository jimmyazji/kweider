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
                    :placeholder="$t('cat name en')"
                    autofocus
                    autocomplete="en_name"
                    :class="{ 'input-error': $page.props.errors.en_name }"
                  />
                  <div
                    v-if="$page.props.errors.en_name"
                    v-text="$page.props.errors.en_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
                <div>
                  <Input
                    id="ar_name"
                    type="text"
                    v-model="form.ar_name"
                    class="block mt-1 w-full"
                    :placeholder="$t('cat name ar')"
                    :class="{ 'input-error': $page.props.errors.ar_name }"
                  />
                  <div
                    v-if="$page.props.errors.ar_name"
                    v-text="$page.props.errors.ar_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <Link
                  :href="route('menu.index')"
                  class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
                >{{ $t("back") }}</Link>
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
                <tr v-for="category in categories" :key="category.id">
                  <td>{{ category.id }}</td>
                  <td>{{ category.en_name }}</td>
                  <td>{{ category.ar_name }}</td>
                  <td>
                  <div class="flex justify-end">
                    <button @click="edit(category)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        class="w-4 h-auto mx-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button @click="destroy(category.id)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#DC143C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        class="w-4 h-auto mx-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
                        />
                      </svg>
                    </button>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia"

let form = useForm({
  en_name: "",
  ar_name: "",
});

let cat_id = ""
let submit = () => {
  if (!cat_id) {
    form.post(route('menucats.index'), {
      preserveScroll: true,
      onSuccess: () => form.reset(),
    })
  }
  else {
    form.put(route('menucats.update', cat_id), {
      preserveScroll: true,
      onSuccess: () => form.reset(),
    })

  }
};
let edit = (category) => {
  cat_id = category.id
  form.en_name = category.en_name
  form.ar_name = category.ar_name
}
let clear = () => {
  cat_id = ''
  form.reset()
}
let destroy = (id) => {
  Inertia.delete(`/menucats/${id}`, {
    onBefore: () => confirm('Are you sure you want to delete this category? all of the products in this category will be lost'),
    preserveScroll: true
  })
}
defineProps({
  categories: Object,
})
</script>
