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
                                        :placeholder="$t('product name ar')"
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
                                        :placeholder="$t('product type en')"
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
                                        :placeholder="$t('product type ar')"
                                        :class="{ 'input-error': form.errors.ar_type }"
                                    />
                                    <div
                                        v-if="form.errors.ar_type"
                                        v-text="form.errors.ar_type"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <select
                                        id="cat_id"
                                        class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                                        :class="{ 'text-gray-500': !form.cat_id, 'select-error': form.errors.cat_id }"
                                        v-model="form.cat_id"
                                        autocomplete="cat_id"
                                    >
                                        <option disabled value="">{{ $t('select category') }}</option>
                                        <option
                                            v-for="category in categories"
                                            :key="category.id"
                                            :value="category.id"
                                        >{{ category.name }}</option>
                                    </select>
                                    <div
                                        v-if="form.errors.cat_id"
                                        v-text="form.errors.cat_id"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <progress
                                        v-if="form.progress"
                                        class="progress"
                                        :value="form.progress.percentage"
                                        max="100"
                                    >{{ form.progress.percentage }}</progress>
                                    <label
                                        v-else
                                        class="input input-bordered flex w-full mt-1 items-center px-5 cursor-pointer"
                                        :class="{'input-error' : form.errors.image}"
                                        for="image"
                                    >
                                        <span
                                            v-text="form.image ? form.image.name : $t('upload image')"
                                        ></span>
                                        <input
                                            id="image"
                                            type="file"
                                            @change="previewImage"
                                            ref="photo"
                                            class="sr-only"
                                        />
                                    </label>
                                    <div
                                        v-if="form.errors.image"
                                        v-text="form.errors.image"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <textarea
                                        id="en_description"
                                        class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                        autocomplete="en_description"
                                        v-model="form.en_description"
                                        :placeholder="$t('product desc en')"
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
                                        :placeholder="$t('product desc ar')"
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
                        <div class="flex justify-center">
                            <img
                                v-if="form.imgUrl"
                                :src="form.imgUrl"
                                class="rounded-lg h-60 w-auto mt-4"
                            />
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
                                    <th>{{ $t("cat") }}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <td>{{ product.name.en }}</td>
                                    <td>{{ product.name.ar }}</td>
                                    <td>{{ product.type.en }}</td>
                                    <td>{{ product.type.ar }}</td>
                                    <td>{{ product.description.en }}</td>
                                    <td>{{ product.description.ar }}</td>
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
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia"
import { ref } from "vue";

const form = useForm({
    en_name: "",
    ar_name: "",
    en_type: "",
    ar_type: "",
    cat_id: "",
    en_description: "",
    ar_description: "",
    image: null,
    imgUrl: null,
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
    form.cat_id = prod.cat_id
    form.en_description = prod.description.en
    form.ar_description = prod.description.ar
    form.imgUrl = prod.imgUrl
};
const submit = () => {
  if (!prod_id.value) {
    form.post(route('menu.index'), {
      preserveScroll: true,
      onSuccess: () => clear(),
    })
  }
  else {
    form._method='PUT'
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
    form.imgUrl = URL.createObjectURL(form.image);
}
defineProps({
    categories: Object,
    products: Object,
})
</script>
