<template>
  <Head :title="$t('manageusers')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t("manageusers") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-almond-200 border-b border-gray-200">
          <div class="overflow-x-auto">
            <div class="mt-1 flex justify-between mb-2">
              <div></div>
              <div class="flex items-center">
                <Input
                  type="text"
                  class="input md:w-96 w-full mr-1 placeholder-lonestar-400 text-lonestar-800"
                  :placeholder="$t('search')"
                  v-model="search"
                  autofocus
                />
                <Link :href="route('users.create')" class="relative btn btn-primary mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-auto"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <table class="table w-full table-compact table-zebra text-lonestar-800 mt-4" dir="ltr">
              <thead>
                <tr>
                  <th></th>
                  <th>{{ $t("name") }}</th>
                  <th>{{ $t("email") }}</th>
                  <th>{{ $t("country") }}</th>
                  <th>{{ $t("region") }}</th>
                  <th>{{ $t("phone") }}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users.data" :key="user.id">
                  <td>
                    <Link class="hover:underline" :href="route('users.show', user)">{{ user.id }}</Link>
                  </td>
                  <td>
                    <Link
                      class="hover:underline"
                      :href="route('users.show', user)"
                    >{{ user.first_name }} {{ user.last_name }}</Link>
                  </td>
                  <td>
                    <Link class="hover:underline" :href="route('users.show', user)">{{ user.email }}</Link>
                  </td>
                  <td v-t="user.country"></td>
                  <td v-t="user.region"></td>
                  <td v-if="user.phone">{{ user.phone }}</td>
                  <td v-else>{{ $t("none") }}</td>
                  <td class="text-lonestar-500">
                    <Link
                      class="focus:outline-none hover:underline"
                      :href="route('users.edit', user.id)"
                    >{{ $t("edit") }}</Link>
                  </td>
                </tr>
                <tr
                  v-if="users.data.length === 0"
                  :class="users.data.length === 0 ? 'opacity-70' : 'opacity-0'"
                >
                  <td colspan="7">
                    <div class="flex justify-center transition duration-500">{{ $t('no results') }}</div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>{{ $t("name") }}</th>
                  <th>{{ $t("email") }}</th>
                  <th>{{ $t("country") }}</th>
                  <th>{{ $t("region") }}</th>
                  <th>{{ $t("phone") }}</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <pagination class="mt-6" :links="users.links" />
    </div>
  </div>
</template>

<script setup>
import Input from "@/Components/Input.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({ users: Object, filters: Object });

let search = ref(props.filters.search);

watch(
  search,
  debounce(function (value) {
    Inertia.get(
      "/users",
      { search: value },
      { preserveState: true, replace: true }
    );
  }, 300)
);
</script>
