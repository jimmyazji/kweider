<template>

    <Head :title="$t('menu')" />
    <header class="max-w-sm lg:max-w-xl lg:mx-auto mx-2 mt-6 text-center">
        <div class="space-y-2 lg:space-y-0 mt-8 text-lonestar-600">
            <!-- Search -->
            <div class="relative flex lg:inline-flex items-center bg-almond-200 rounded-xl px-2 py-2 lg:mx-2">
                <Input v-model="search" type="text" name="search" :placeholder="$t('search')"
                    class="placeholder-lonestar-400 font-semibold text-sm w-full" />
                <Dropdown v-if="list || listCategories" align="lg:right">
                    <template #trigger>
                        <button class="focus:scale-110 transform transition px-4 focus:outline-none">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </template>
                    <template #content>
                        <DropdownLink v-if="listCategories" :href="route('menucategories.index')">
                        {{ $t("manage categories") }}</DropdownLink>
                        <DropdownLink v-if="list" :href="route('menu.create')">{{ $t("manage products") }}
                        </DropdownLink>
                    </template>
                </Dropdown>
            </div>
        </div>
    </header>
    <div class="py-6 menu__page">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex flex-wrap justify-center items-center relative">
                    <TransitionGroup appear name="list">
                        <a v-for="category in categories.data" :key="category.id" :href="'#' + category.slug"
                            class="border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105 mx-1">{{
                                    category.name
                            }}</a>
                    </TransitionGroup>
                </div>
                <section v-for="category in categories.data" :id="category.slug">
                    <Transition appear name="fade-expand">
                        <Divider>
                            {{ category.name }}
                        </Divider>
                    </Transition>
                    <div class="flex flex-wrap justify-start gap-4 relative">
                        <TransitionGroup appear name="list">
                            <MenuProduct v-for="product in category.products" :id="product.slug" :key="product.id"
                                :product="product" />
                        </TransitionGroup>
                    </div>
                </section>
                <div v-if="categories.data.length === 0">
                    <Transition appear name="fade-expand">
                        <Divider>{{ $t("no results") }}</Divider>
                        <!-- <div class="divider font-bold opacity-50" dir="ltr">{{ $t('no results') }}</div> -->
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Button from "@/Components/Button.vue";
import Dropdown from "@/Components/Dropdown";
import DropdownLink from "@/Components/DropdownLink";
import { ref, watch } from "vue";
import MenuProduct from "@/Components/MenuProduct.vue";
import Input from "@/Components/Input";
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";
import Divider from "@/Components/Divider.vue";

let props = defineProps({
    categories: Object,
    filters: Object,
    list: Boolean,
    listCategories: Boolean,
});
let search = ref(props.filters.search);
watch(
    search,
    debounce(function (value) {
        Inertia.get(
            "/menu",
            { search: value },
            { preserveState: true, replace: true }
        );
    }, 300)
);
</script>
<style>
.menu__page {
    scroll-behavior: smooth;
}

:root {
    --vc-clr-primary: #6b0303;
    --vc-clr-secondary: #974f4f;
    --vc-clr-white: #ffffff;
}
</style>
