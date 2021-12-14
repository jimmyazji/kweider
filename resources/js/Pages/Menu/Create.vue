<template>
    <Head :title="$t('manage products')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2
                class="font-semibold text-xl text-gray-800 leading-tight"
            >{{ $t("manage products") }}</h2>
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
                                        :placeholder="$t('product name en')"
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
                                        autocomplete="ar_name"
                                        :placeholder="$t('product name ar')"
                                        :class="{ 'input-error': $page.props.errors.ar_name }"
                                    />
                                    <div
                                        v-if="$page.props.errors.ar_name"
                                        v-text="$page.props.errors.ar_name"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <Input
                                        id="en_type"
                                        type="text"
                                        class="block mt-1 w-full"
                                        v-model="form.en_type"
                                        :placeholder="$t('product type en')"
                                        autocomplete="en_type"
                                        :class="{ 'input-error': $page.props.errors.en_type }"
                                    />
                                    <div
                                        v-if="$page.props.errors.en_type"
                                        v-text="$page.props.errors.en_type"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        id="ar_type"
                                        type="text"
                                        v-model="form.ar_type"
                                        class="block mt-1 w-full"
                                        autocomplete="ar_type"
                                        :placeholder="$t('product type ar')"
                                        :class="{ 'input-error': $page.props.errors.ar_type }"
                                    />
                                    <div
                                        v-if="$page.props.errors.ar_type"
                                        v-text="$page.props.errors.ar_type"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <select
                                        id="cat_id"
                                        class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                                        :class="{ 'text-gray-500': !form.cat_id, 'input-error': $page.props.errors.cat_id }"
                                        v-model="form.cat_id"
                                        autocomplete="cat_id"
                                    >
                                        <option disabled value>{{ $t('select category') }}</option>
                                        <option
                                            v-for="category in categories"
                                            :key="category.id"
                                            :value="category.id"
                                        >{{ category.name }}</option>
                                    </select>
                                    <div
                                        v-if="$page.props.errors.cat_id"
                                        v-text="$page.props.errors.cat_id"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <label
                                        class="input input-bordered flex w-full mt-1 items-center px-5 cursor-pointer"
                                        for="img"
                                    >
                                        <span>Upload an image</span>
                                        <input id="img" type="file" class="sr-only" />
                                    </label>
                                    <div
                                        v-if="$page.props.errors.image"
                                        v-text="$page.props.errors.image"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <textarea
                                        id="en_desc"
                                        class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                        autocomplete="en_desc"
                                        v-model="form.en_desc"
                                        :placeholder="$t('product desc en')"
                                        :class="{ 'input-error': $page.props.errors.en_desc }"
                                    />
                                    <div
                                        v-if="$page.props.errors.en_desc"
                                        v-text="$page.props.errors.en_desc"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <textarea
                                        id="ar_desc"
                                        v-model="form.ar_desc"
                                        class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none"
                                        autocomplete="ar_desc"
                                        :placeholder="$t('product desc ar')"
                                        :class="{ 'input-error': $page.props.errors.ar_desc }"
                                    />
                                    <div
                                        v-if="$page.props.errors.ar_desc"
                                        v-text="$page.props.errors.ar_desc"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
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
                    </form>

                    <div class="overflow-x-auto mt-4">
                        <table
                            class="table w-full table-compact table-zebra text-lonestar-800"
                            dir="ltr"
                        >
                            <thead>
                                <tr>
                                    <th>{{ $t("en name") }}</th>
                                    <th>{{ $t("ar name") }}</th>
                                    <th>{{ $t("en type") }}</th>
                                    <th>{{ $t("ar type") }}</th>
                                    <th>{{ $t("en desc") }}</th>
                                    <th>{{ $t("ar desc") }}</th>
                                    <th>{{ $t("cat name") }}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <td>{{ product.en_name }}</td>
                                    <td>{{ product.ar_name }}</td>
                                    <td>{{ product.en_type }}</td>
                                    <td>{{ product.ar_type }}</td>
                                    <td>{{ product.en_desc }}</td>
                                    <td>{{ product.ar_desc }}</td>
                                    <td>{{ product.cat_name }}</td>
                                    <td>
                                        <div class="flex justify-end">
                                            <button @click="edit(product)">
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
                                            <button @click="destroy(product.id)">
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
    en_type: "",
    ar_type: "",
    cat_id: "",
    en_desc: "",
    ar_desc: "",
    img: ""
});
let prod_id = ""
let submit = () => {
    form.post(route('menu.index'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    })
};
let edit = (prod) => {
    prod_id = prod.id
    form.en_name = prod.en_name
    form.ar_name = prod.ar_name
    form.en_type = prod.en_type
    form.cat_id = prod.cat_id
    form.ar_type = prod.ar_type
    form.en_desc = prod.en_desc
    form.ar_desc = prod.ar_desc
};
let clear = () => {
  prod_id = ''
  form.reset()
};
let destroy = (id) => {
    Inertia.delete(`/menu/${id}`, {
        onBefore: () => confirm('Are you sure you want to delete this product? this cannot be undone'),
        preserveScroll: true
    })
};
defineProps({
    categories: Object,
    products: Object,
})
</script>
