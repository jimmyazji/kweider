<template>
  <Head :title="$t('manageusers')" />
  <header class="bg-oyster-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ $t('manageusers') }}
      </h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <div class="overflow-x-auto">
            <div class="mt-1 flex justify-between mb-2">
              <div></div>
              <div>
                <Input
                  type="text"
                  class="
                    input
                    md:w-96
                    w-full
                    mr-1
                    placeholder-lonestar-400
                    text-lonestar-800
                  "
                  :placeholder="$t('search')"
                  v-model="search"
                  autofocus
                />
                <svg
                  class="
                    absolute
                    fill-current
                    text-gray-500
                    mt-3.5
                    ml-4
                    w-3
                    h-3
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 92 92"
                >
                  <path
                    d="M57.8 2.2c-17.1 0-31 14.1-31 31.3 0 7.3 2.5 13.9 6.6 19.3L4 82.6a4.53 4.53 0 000 6.3c.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3l29.4-29.8c5.1 3.7 11.3 5.8 18 5.8 17.1 0 31-14.1 31-31.3S74.9 2.2 57.8 2.2zm0 54.8c-12.7 0-23-10.5-23-23.4 0-12.9 10.3-23.4 23-23.4s23 10.5 23 23.4c0 12.9-10.3 23.4-23 23.4zm15.5-23c-.2 1.7-1.7 3-3.4 3h-.5c-1.9-.3-3.2-2-3-3.9.7-5.2-5.1-7.9-5.4-8-1.7-.8-2.5-2.9-1.7-4.6s2.8-2.5 4.6-1.8c.4.1 10.8 4.9 9.4 15.3zM66 41.6c.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2a4.2 4.2 0 01-1.2-2.8c0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2z"
                  />
                </svg>
              </div>
            </div>
            <table
              class="table w-full table-compact table-zebra text-lonestar-800"
            >
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
                  <td>{{ user.id }}</td>
                  <td>{{ user.first_name }} {{ user.last_name }}</td>
                  <td>{{ user.email }}</td>
                  <td v-t="user.country"></td>
                  <td v-t="user.region"></td>
                  <td v-if="user.phone">{{ user.phone }}</td>
                  <td v-else>{{ $t("none") }}</td>
                  <td class="text-lonestar-500">
                    <Link
                      class="focus:outline-none hover:underline"
                      :href="route('users.edit', user.id)"
                      >{{ $t("edit") }}</Link
                    >
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
                  <th>{{ $t("lastlogin") }}</th>
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

watch(search, debounce(function (value) {
  Inertia.get(
    "/users",
    { search: value },
    { preserveState: true, replace: true }
  );
}, 300));
</script>
