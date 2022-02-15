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
                                        :placeholder="$t('en name')"
                                        autocomplete="en_name"
                                        :class="{ 'input-error': form.errors.en_name }"
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
                                        autocomplete="ar_name"
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
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <Input
                                        id="en_type"
                                        type="text"
                                        class="block mt-1 w-full"
                                        v-model="form.en_type"
                                        :placeholder="$t('en type')"
                                        autocomplete="en_type"
                                        :class="{ 'input-error': form.errors.en_type }"
                                    />
                                    <div
                                        v-if="form.errors.en_type"
                                        v-text="form.errors.en_type"
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
                                        :placeholder="$t('ar type')"
                                        :class="{ 'input-error': form.errors.ar_type }"
                                    />
                                    <div
                                        v-if="form.errors.ar_type"
                                        v-text="form.errors.ar_type"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <select
                                    id="category_id"
                                    class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                                    :class="{ 'text-gray-500': !form.category_id, 'select-error': form.errors.category_id }"
                                    v-model="form.category_id"
                                    autocomplete="category_id"
                                >
                                    <option disabled value>{{ $t('select category') }}</option>
                                    <option
                                        v-for="category in categories"
                                        :key="category.id"
                                        :value="category.id"
                                    >{{ category.name }}</option>
                                </select>
                                <div
                                    v-if="form.errors.category_id"
                                    v-text="form.errors.category_id"
                                    class="text-error text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <textarea
                                        id="en_description"
                                        class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                        autocomplete="en_description"
                                        v-model="form.en_description"
                                        :placeholder="$t('en desc')"
                                        :class="{ 'textarea-error': form.errors.en_description }"
                                    />
                                    <div
                                        v-if="form.errors.en_description"
                                        v-text="form.errors.en_description"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <textarea
                                        id="ar_description"
                                        v-model="form.ar_description"
                                        class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none"
                                        autocomplete="ar_description"
                                        :placeholder="$t('ar desc')"
                                        :class="{ 'textarea-error': form.errors.ar_description }"
                                    />
                                    <div
                                        v-if="form.errors.ar_description"
                                        v-text="form.errors.ar_description"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <label
                            class="max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer"
                            for="image"
                        >
                            <img
                                v-if="form.img_url"
                                class="w-full h-full object-cover rounded-md"
                                :src="form.img_url"
                                alt="Image"
                            />
                            <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0.2"
                                class="mx-auto w-1/2 md:w-40 md:h-40"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                @change="previewImage"
                                class="hidden"
                                ref="photo"
                            />
                        </label>
                        <div
                            v-if="form.errors.image"
                            v-text="form.errors.image"
                            class="text-error text-sm ml-2 mt-1 flex justify-center"
                        ></div>
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
                                    <th>{{ $t("category") }}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products.data" :key="product.id">
                                    <td>{{ product.name.en }}</td>
                                    <td>{{ product.name.ar }}</td>
                                    <td>{{ product.type.en }}</td>
                                    <td>{{ product.type.ar }}</td>
                                    <td>
                                        <div
                                            class="whitespace-pre-wrap block max-w-xs"
                                        >{{ product.description.en }}</div>
                                    </td>
                                    <td>
                                        <div
                                            class="whitespace-pre-wrap block max-w-xs"
                                        >{{ product.description.ar }}</div>
                                    </td>
                                    <td>{{ product.category }}</td>
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
            <Pagination
                v-if="products.next_page_url || products.prev_page_url"
                class="mt-5 ml-2 lg:ml-10 pb-10"
                :links="products.links"
            />
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia"
import { ref, watch } from "vue";
import debounce from "lodash/debounce";
import Pagination from "@/Components/Pagination.vue";
let props = defineProps({
    categories: Object,
    products: Object,
    filters: Object,
})

let search = ref(props.filters.search);
const form = useForm({
    en_name: "",
    ar_name: "",
    en_type: "",
    ar_type: "",
    category_id: "",
    en_description: "",
    ar_description: "",
    image: null,
    img_url: null,
    _method: 'POST'
});
const prod_id = ref(null);
const edit = (prod) => {
    clear()
    prod_id.value = prod.id
    form.en_name = prod.name.en
    form.ar_name = prod.name.ar
    form.en_type = prod.type.en
    form.ar_type = prod.type.ar
    form.category_id = prod.category_id
    form.en_description = prod.description.en
    form.ar_description = prod.description.ar
    form.img_url = prod.img_url
};
const submit = () => {
    if (!prod_id.value) {
        form.post(route('menu.index'), {
            preserveScroll: true,
            onSuccess: () => clear(),
        })
    }
    else {
        form._method = 'PUT'
        form.post(route('menu.update', prod_id.value), {
            preserveScroll: true,
            onSuccess: () => clear(),
        })
    }
};

const clear = () => {
    prod_id.value = null;
    form.reset()
};
const destroy = (id) => {
    Inertia.delete(`/menu/${id}`, {
        onBefore: () => confirm('Are you sure you want to delete this product? this cannot be undone'),
        preserveScroll: true
    })
};

const previewImage = (e) => {
    form.image = e.target.files[0];
    form.img_url = URL.createObjectURL(form.image);
}
watch(
    search,
    debounce(function (value) {
        Inertia.get(
            route('menu.create'),
            { search: value },
            {
                preserveScroll: true,
                replace: true,
                preserveState: true
            }
        );
    }, 300)
);
</script>
