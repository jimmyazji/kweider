<template>
    <Head :title="$t('manage categories')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ $t("manage categories") }}
            </h2>
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
                                        :class="
                                            $page.props.errors.en_name
                                                ? 'input-error'
                                                : ''
                                        "
                                    />
                                    <div
                                        v-if="$page.props.errors.en_name"
                                        v-text="$page.props.errors.en_name"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        id="ar_name"
                                        type="text"
                                        v-model="form.ar_name"
                                        class="block mt-1 w-full"
                                        :placeholder="$t('ar name')"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.ar_name,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.ar_name"
                                        v-text="$page.props.errors.ar_name"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <Link
                                    :href="route('blog.index')"
                                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
                                    >{{ $t("back") }}</Link
                                >
                                <div>
                                    <Button
                                        type="button"
                                        class="px-5 mx-0.5"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        @click.prevent="clear()"
                                        >{{ $t("clear") }}</Button
                                    >
                                    <Button
                                        type="submit"
                                        class="px-5 mx-0.5"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                        >{{ $t("submit") }}</Button
                                    >
                                </div>
                            </div>
                        </div>
                    </form>
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
                                    <th class="py-4 px-6 text-start"></th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("en name") }}
                                    </th>
                                    <th class="py-4 px-6 text-start">
                                        {{ $t("ar name") }}
                                    </th>
                                    <th class="py-4 px-6 text-start"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(category, index) in categories"
                                    :key="index"
                                    :class="
                                        index % 2 != 0
                                            ? 'bg-lonestar-50'
                                            : 'bg-white'
                                    "
                                >
                                    <td class="py-4 px-6 text-start"></td>
                                    <td class="py-4 px-6 text-start">
                                        {{ category.name.en }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{ category.name.ar }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
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
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                    />
                                                    <path
                                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                @click="destroy(category.id)"
                                            >
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
                                <tr v-if="categories.length === 0">
                                    <td colspan="12">
                                        <div class="py-4 px-6 text-start">
                                            {{ $t("no results") }}
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
import { Inertia } from "@inertiajs/inertia";

let form = useForm({
    en_name: "",
    ar_name: "",
});

let category_id = "";
let submit = () => {
    if (!category_id) {
        form.post(route("postcategories.index"), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    } else {
        form.put(route("postcategories.update", category_id), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    }
};
let edit = (category) => {
    category_id = category.id;
    form.en_name = category.name.en;
    form.ar_name = category.name.ar;
};
let clear = () => {
    category_id = "";
    form.reset();
};
let destroy = (id) => {
    Inertia.delete(`/postcategories/${id}`, {
        onBefore: () =>
            confirm(
                "Are you sure you want to delete this category? all of the products in this category will be lost"
            ),
        preserveScroll: true,
    });
};
defineProps({
    categories: Object,
});
</script>
