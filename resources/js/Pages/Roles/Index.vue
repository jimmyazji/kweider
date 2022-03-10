<template>
    <Head :title="$t('manage roles')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('manage roles') }}</h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-almond-200 border-b border-gray-200">
                    <div class="overflow-x-auto">
                        <div class="mt-1 flex justify-center mb-2">
                            <div class="flex items-center">
                                <Input
                                    type="text"
                                    class="input md:w-96 w-full mr-1 placeholder-lonestar-400 text-lonestar-800"
                                    :placeholder="$t('search')"
                                    v-model="search"
                                    autofocus
                                />
                                <Link
                                    :href="route('roles.create')"
                                    class="relative btn btn-primary mx-2"
                                >
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
                        <table
                            class="table w-full table-compact table-zebra text-lonestar-800 mt-4"
                            dir="ltr"
                        >
                            <thead>
                                <tr>
                                    <th>{{ $t('name') }}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="role in roles.data">
                                    <td>{{ role.name }}</td>

                                    <td>
                                        <Link
                                            :href="route('roles.edit', role.id)"
                                            class="flex justify-end"
                                        >{{ $t('edit') }}</Link>
                                    </td>
                                </tr>
                                <tr v-if="roles.data.length === 0">
                                    <td colspan="3">
                                        <span
                                            class="flex justify-center text-lonestar-800 opacity-80"
                                        >{{ $t('no results') }}</span>
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
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ref, watch } from 'vue';
import debounce from "lodash/debounce";
import Input from "@/Components/Input.vue"
import { Inertia } from "@inertiajs/inertia";

let props = defineProps({ roles: Object, filters: Object })
let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/roles",
            { search: value },
            { preserveState: true, replace: true }
        );
    }, 300)
);
</script>