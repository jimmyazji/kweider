<template>
    <Head :title="$t('manage users')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ $t("manage users") }}
            </h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-almond-200 border-b border-gray-200">
                    <div class="mt-1 flex justify-between mb-2">
                        <div></div>
                        <div class="flex items-center px-2">
                            <Input
                                type="text"
                                class="input md:w-96 w-full mr-1 placeholder-lonestar-400 text-lonestar-800"
                                :placeholder="$t('search')"
                                v-model="search"
                                autofocus
                            />
                            <Link
                                :href="route('users.create')"
                                class="relative border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg p-3 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105"
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
                                    <path
                                        d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                    />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div
                        class="overflow-x-auto relative shadow-md sm:rounded-lg mt-6"
                    >
                        <table
                            class="w-full text-sm text-left text-lonestar-700"
                        >
                            <thead
                                class="text-xs text-lonestar-700 uppercase bg-lonestar-500 bg-opacity-50"
                            >
                                <tr>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("name") }}
                                    </th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("email") }}
                                    </th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("country") }}
                                    </th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("roles") }}
                                    </th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("phone") }}
                                    </th>
                                    <th class="py-4 px-6 text-start"></th>
                                </tr>
                            </thead>
                            <tbody
                                tag="tbody"
                                name="list"
                            >
                                <tr
                                    v-for="(user, index) in users.data"
                                    :key="index"
                                    :class="
                                        index % 2 != 0
                                            ? 'bg-lonestar-50'
                                            : 'bg-white'
                                    "
                                >
                                    <td class="py-4 px-6 text-start">
                                        <Link
                                            class="hover:underline focus:underline focus:outline-none"
                                            :href="route('users.show', user)"
                                            >{{ user.first_name }}
                                            {{ user.last_name }}</Link
                                        >
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        <Link
                                            class="hover:underline focus:underline focus:outline-none"
                                            :href="route('users.show', user)"
                                            >{{ user.email }}</Link
                                        >
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{ user.country }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        <div class="flex">
                                            <span
                                                class="text-xs bg-almond-500 py-0.5 px-2 rounded-full mr-1"
                                                v-for="role in user.roles"
                                                >{{ role }}</span
                                            >
                                        </div>
                                    </td>
                                    <td
                                        class="py-4 px-6 text-start"
                                        v-if="user.phone"
                                    >
                                        {{ user.phone }}
                                    </td>
                                    <td class="py-4 px-6 text-start" v-else>
                                        {{ $t("none") }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        <div class="flex justify-end">
                                            <Link
                                                class="text-lonestar-500 hover:underline focus:underline focus:outline-none"
                                                :href="
                                                    route('users.edit', user.id)
                                                "
                                            >
                                                <i class="fa fa-edit mx-1"></i>
                                            </Link>
                                            <button
                                                @click="destroy(user.id)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="#DC143C"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    class="w-4 0h-auto"
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
                                <tr
                                    v-if="users.data.length === 0"
                                    :class="
                                        users.data.length === 0
                                            ? 'opacity-70'
                                            : 'opacity-0'
                                    "
                                >
                                    <td colspan="7">
                                        <div
                                            class="flex justify-center transition duration-500"
                                        >
                                            {{ $t("no results") }}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
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

const destroy = (id) => {
    Inertia.delete(`/users/${id}`, {
        onBefore: () =>
            confirm(
                "Are you sure you want to delete this user? this cannot be undone"
            ),
        preserveScroll: true,
    });
};
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
<style>
.list-move {
    transition: transform 1s;
}
.table-move {
    transition: transform 1s;
}
</style>
