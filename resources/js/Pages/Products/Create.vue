<template>
    <Head :title="$t('manage products')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ $t("manage products") }}
            </h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-md">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form @submit.prevent="submit">
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <Input
                                    id="en_name"
                                    type="text"
                                    class="block mt-1 w-full"
                                    v-model="form.en_name"
                                    :placeholder="$t('en name')"
                                    autofocus
                                    autocomplete="en_name"
                                    :class="{
                                        'input-error': form.errors.en_name,
                                    }"
                                />
                                <div
                                    v-if="form.errors.en_name"
                                    v-text="form.errors.en_name"
                                    class="text-red-700 text-sm ml-2 mt-1"
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
                                    :class="{
                                        'input-error': form.errors.ar_name,
                                    }"
                                />
                                <div
                                    v-if="form.errors.ar_name"
                                    v-text="form.errors.ar_name"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <select
                                    id="category_id"
                                    class="block mt-1 w-full appearance-none text-sm outline-none border-opacity-20 flex-shrink-0 transition-colors duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-500 px-5 pr-10 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 font-normal"
                                    :class="{
                                        'text-gray-500': !form.category_id,
                                        'select-error': form.errors.category_id,
                                    }"
                                    v-model="form.category_id"
                                    autocomplete="category_id"
                                >
                                    <option disabled value>
                                        {{ $t("select category") }}
                                    </option>
                                    <option
                                        v-for="category in categories"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        {{ category.name }}
                                    </option>
                                </select>
                                <div
                                    v-if="form.errors.category_id"
                                    v-text="form.errors.category_id"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div>
                                <Input
                                    id="weight"
                                    type="number"
                                    class="block mt-1 w-full"
                                    v-model="form.weight"
                                    :placeholder="$t('weight')"
                                    autocomplete="weight"
                                    :class="{
                                        'input-error': form.errors.weight,
                                    }"
                                />
                                <div
                                    v-if="form.errors.weight"
                                    v-text="form.errors.weight"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <TextArea
                                    id="en_description"
                                    class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                    autocomplete="en_description"
                                    v-model="form.en_description"
                                    :placeholder="$t('en desc')"
                                    :class="{
                                        'textarea-error':
                                            form.errors.en_description,
                                    }"
                                />
                                <div
                                    v-if="form.errors.en_description"
                                    v-text="form.errors.en_description"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div>
                                <TextArea
                                    id="ar_description"
                                    v-model="form.ar_description"
                                    class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none"
                                    autocomplete="ar_description"
                                    :placeholder="$t('ar desc')"
                                    :class="{
                                        'textarea-error':
                                            form.errors.ar_description,
                                    }"
                                />
                                <div
                                    v-if="form.errors.ar_description"
                                    v-text="form.errors.ar_description"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-2 my-2 mt-3">
                            <div class="flex justify-center">
                                <Checkbox
                                    name="box"
                                    v-model="form.box"
                                    class="checkbox-primary"
                                />
                                <span class="mx-2 text-sm text-lonestar-700">{{
                                    $t("box")
                                }}</span>
                            </div>
                            <div
                                class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:hidden"
                            >
                                <Input
                                    id="box_w"
                                    type="number"
                                    autocomplete="box_w"
                                    v-model="form.box_w"
                                    :disabled="!form.box"
                                    :placeholder="$t('width')"
                                    :class="{
                                        'input-error': form.errors.box_w,
                                    }"
                                />
                                <Input
                                    id="box_l"
                                    type="number"
                                    autocomplete="box_l"
                                    v-model="form.box_l"
                                    :disabled="!form.box"
                                    :placeholder="$t('length')"
                                    :class="{
                                        'input-error': form.errors.box_l,
                                    }"
                                />
                                <Input
                                    data-tooltip-target="tooltip-default"
                                    id="box_h"
                                    type="number"
                                    autocomplete="box_h"
                                    v-model="form.box_h"
                                    :disabled="!form.box"
                                    :placeholder="$t('height')"
                                    :class="{
                                        'input-error': form.errors.box_h,
                                    }"
                                />
                                <div
                                    id="tooltip-default"
                                    role="tooltip"
                                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                                >
                                    {{ $t("height") }}
                                    <div
                                        class="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                                <Input
                                    id="box_q"
                                    type="number"
                                    autocomplete="box_q"
                                    v-model="form.box_q"
                                    :disabled="!form.box"
                                    :placeholder="$t('quantity')"
                                    :class="{
                                        'input-error': form.errors.box_q,
                                    }"
                                />
                                <Input
                                    id="box_w_c"
                                    type="number"
                                    autocomplete="box_w_c"
                                    v-model="form.box_w_c"
                                    :class="{
                                        'input-error': form.errors.box_w_c,
                                    }"
                                    :disabled="!form.box"
                                    :placeholder="$t('clear weight')"
                                />
                                <Input
                                    id="box_w_a"
                                    type="number"
                                    autocomplete="box_w_a"
                                    v-model="form.box_w_a"
                                    :class="{
                                        'input-error': form.errors.box_w_a,
                                    }"
                                    :disabled="!form.box"
                                    :placeholder="$t('actual weight')"
                                />
                            </div>
                            <div class="flex justify-center">
                                <Checkbox
                                    name="package"
                                    v-model="form.package"
                                    class="checkbox-primary"
                                />
                                <span class="mx-2 text-sm text-lonestar-700">{{
                                    $t("package")
                                }}</span>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-2 mt-3">
                            <div
                                class="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2"
                            >
                                <Input
                                    id="box_w"
                                    type="number"
                                    autocomplete="box_w"
                                    v-model="form.box_w"
                                    :disabled="!form.box"
                                    :placeholder="$t('width')"
                                    :class="{
                                        'input-error': form.errors.box_w,
                                    }"
                                />
                                <Input
                                    id="box_l"
                                    type="number"
                                    autocomplete="box_l"
                                    v-model="form.box_l"
                                    :disabled="!form.box"
                                    :placeholder="$t('length')"
                                    :class="{
                                        'input-error': form.errors.box_l,
                                    }"
                                />
                                <Input
                                    id="box_h"
                                    type="number"
                                    autocomplete="box_h"
                                    v-model="form.box_h"
                                    :disabled="!form.box"
                                    :placeholder="$t('height')"
                                    :class="{
                                        'input-error': form.errors.box_h,
                                    }"
                                />
                                <Input
                                    id="box_q"
                                    type="number"
                                    autocomplete="box_q"
                                    v-model="form.box_q"
                                    :disabled="!form.box"
                                    :placeholder="$t('quantity')"
                                    :class="{
                                        'input-error': form.errors.box_q,
                                    }"
                                />
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                                <Input
                                    id="pack_w"
                                    type="number"
                                    autocomplete="pack_w"
                                    v-model="form.pack_w"
                                    :disabled="!form.package"
                                    :placeholder="$t('width')"
                                    :class="{
                                        'input-error': form.errors.pack_w,
                                    }"
                                />
                                <Input
                                    id="pack_l"
                                    type="number"
                                    autocomplete="pack_l"
                                    v-model="form.pack_l"
                                    :disabled="!form.package"
                                    :placeholder="$t('length')"
                                    :class="{
                                        'input-error': form.errors.pack_l,
                                    }"
                                />
                                <Input
                                    id="pack_h"
                                    type="number"
                                    autocomplete="pack_h"
                                    v-model="form.pack_h"
                                    :disabled="!form.package"
                                    :placeholder="$t('height')"
                                    :class="{
                                        'input-error': form.errors.pack_h,
                                    }"
                                />
                                <Input
                                    id="pack_q"
                                    type="number"
                                    autocomplete="pack_q"
                                    v-model="form.pack_q"
                                    :class="{
                                        'input-error': form.errors.pack_q,
                                    }"
                                    :disabled="!form.package"
                                    :placeholder="$t('quantity')"
                                />
                                <Input
                                    id="pack_w_c"
                                    type="number"
                                    class="sm:hidden"
                                    autocomplete="pack_w_c"
                                    v-model="form.pack_w_c"
                                    :class="{
                                        'input-error': form.errors.pack_w_c,
                                    }"
                                    :disabled="!form.package"
                                    :placeholder="$t('clear weight')"
                                />
                                <Input
                                    id="pack_w_a"
                                    type="number"
                                    class="sm:hidden"
                                    autocomplete="pack_w_a"
                                    v-model="form.pack_w_a"
                                    :class="{
                                        'input-error': form.errors.pack_w_a,
                                    }"
                                    :disabled="!form.package"
                                    :placeholder="$t('actual weight')"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-1">
                            <div
                                class="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2"
                            >
                                <Input
                                    id="box_w_c"
                                    type="number"
                                    autocomplete="box_w_c"
                                    v-model="form.box_w_c"
                                    :class="{
                                        'input-error': form.errors.box_w_c,
                                    }"
                                    :disabled="!form.box"
                                    :placeholder="$t('clear weight')"
                                />
                                <Input
                                    id="box_w_a"
                                    type="number"
                                    autocomplete="box_w_a"
                                    v-model="form.box_w_a"
                                    :class="{
                                        'input-error': form.errors.box_w_a,
                                    }"
                                    :disabled="!form.box"
                                    :placeholder="$t('actual weight')"
                                />
                            </div>
                            <div
                                class="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2"
                            >
                                <Input
                                    id="pack_w_c"
                                    type="number"
                                    autocomplete="pack_w_c"
                                    v-model="form.pack_w_c"
                                    :class="{
                                        'input-error': form.errors.pack_w_c,
                                    }"
                                    :disabled="!form.package"
                                    :placeholder="$t('clear weight')"
                                />
                                <Input
                                    id="pack_w_a"
                                    type="number"
                                    autocomplete="pack_w_a"
                                    v-model="form.pack_w_a"
                                    :class="{
                                        'input-error': form.errors.pack_w_a,
                                    }"
                                    :disabled="!form.package"
                                    :placeholder="$t('actual weight')"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                            <div>
                                <div
                                    v-if="form.errors.box_w"
                                    v-text="form.errors.box_w"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.box_l"
                                    v-text="form.errors.box_l"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.box_h"
                                    v-text="form.errors.box_h"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.box_q"
                                    v-text="form.errors.box_q"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.box_w_c"
                                    v-text="form.errors.box_w_c"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.box_w_a"
                                    v-text="form.errors.box_w_a"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div>
                                <div
                                    v-if="form.errors.pack_w"
                                    v-text="form.errors.pack_w"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.pack_l"
                                    v-text="form.errors.pack_l"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.pack_h"
                                    v-text="form.errors.pack_h"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.pack_q"
                                    v-text="form.errors.pack_q"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.pack_w_c"
                                    v-text="form.errors.pack_w_c"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                                <div
                                    v-if="form.errors.pack_w_a"
                                    v-text="form.errors.pack_w_a"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-evenly items-center">
                            <div>
                                <label
                                    class="max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer"
                                    for="prod_image"
                                >
                                    <img
                                        v-if="form.prod_img_url"
                                        class="w-full h-full object-cover rounded-md"
                                        :src="form.prod_img_url"
                                        alt="Product Image"
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
                                        id="prod_image"
                                        type="file"
                                        accept="image/*"
                                        @change="previewProdImage"
                                        class="hidden"
                                        ref="photo"
                                    />
                                </label>
                                <div
                                    v-if="form.errors.prod_image"
                                    v-text="form.errors.prod_image"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div>
                                <label
                                    class="max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer"
                                    for="box_image"
                                >
                                    <img
                                        v-if="form.box_img_url"
                                        class="w-full h-full object-cover rounded-md"
                                        :src="form.box_img_url"
                                        alt="Box Image"
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
                                        id="box_image"
                                        type="file"
                                        accept="image/*"
                                        @change="previewBoxImage"
                                        class="hidden"
                                    />
                                </label>
                                <div
                                    v-if="form.errors.box_image"
                                    v-text="form.errors.box_image"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                            <div>
                                <label
                                    class="max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer"
                                    for="pack_image"
                                >
                                    <img
                                        v-if="form.pack_img_url"
                                        class="w-full h-full object-cover rounded-md"
                                        :src="form.pack_img_url"
                                        alt="Package Image"
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
                                        id="pack_image"
                                        type="file"
                                        accept="image/*"
                                        @change="previewPackImage"
                                        class="hidden"
                                    />
                                </label>
                                <div
                                    v-if="form.errors.pack_image"
                                    v-text="form.errors.pack_image"
                                    class="text-red-700 text-sm ml-2 mt-1"
                                ></div>
                            </div>
                        </div>
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
                                    >{{ $t("back") }}</Link
                                >
                            </div>
                            <div
                                class="flex justify-between items-center mt-4 lg:mt-0"
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
                                <Link
                                    :href="route('menu.index')"
                                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1 lg:hidden"
                                    >{{ $t("back") }}</Link
                                >
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
                                    <th scope="col" class=""></th>
                                    <th colspan="2" class="pt-1">
                                        <div
                                            class="flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
                                        >
                                            {{ $t("english") }}
                                        </div>
                                    </th>
                                    <th colspan="2" class="pt-1">
                                        <div
                                            class="flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
                                        >
                                            {{ $t("arabic") }}
                                        </div>
                                    </th>
                                    <th colspan="2" class="pt-1"></th>
                                    <th colspan="6" class="pt-1">
                                        <div
                                            class="flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
                                        >
                                            {{ $t("box") }}
                                        </div>
                                    </th>
                                    <th colspan="6" class="pt-1">
                                        <div
                                            class="flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
                                        >
                                            {{ $t("package") }}
                                        </div>
                                    </th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th scope="col" class="py-2"></th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("name") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("description") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("name") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("description") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("category") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("weight") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("width") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("length") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("height") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("quantity") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("clear weight") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("actual weight") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("width") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("length") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("height") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("quantity") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("clear weight") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-2 px-6 text-start"
                                    >
                                        {{ $t("actual weight") }}
                                    </th>
                                    <th scope="col" class="py-3 text-start">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-if="products.length > 0"
                                    v-for="(product, index) in products"
                                    :key="index"
                                    :class="
                                        index % 2 != 0
                                            ? 'bg-lonestar-50'
                                            : 'bg-white'
                                    "
                                    class="border-b"
                                >
                                    <td class="py-4"></td>
                                    <td class="py-4 px-6 text-start">{{ product.name.en }}</td>
                                    <td class="py-4 px-6 text-start">{{ product.description.en }}</td>
                                    <td class="py-4 px-6 text-start">{{ product.name.ar }}</td>
                                    <td class="py-4 px-6 text-start">{{ product.description.ar }}</td>
                                    <td class="py-4 px-6 text-start">{{ product.category }}</td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.weight
                                                ? product.weight
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_w ? product.box_w : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_l ? product.box_l : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_h ? product.box_h : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_q ? product.box_q : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_w_c
                                                ? product.box_w_c
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.box_w_a
                                                ? product.box_w_a
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_w
                                                ? product.pack_w
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_l
                                                ? product.pack_l
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_h
                                                ? product.pack_h
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_q
                                                ? product.pack_q
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_w_c
                                                ? product.pack_w_c
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        {{
                                            product.pack_w_a
                                                ? product.pack_w_a
                                                : "-"
                                        }}
                                    </td>
                                    <td class="py-4 px-6 text-start">
                                        <div class="flex justify-end px-2">
                                            <button @click="edit(product)">
                                                <i
                                                    class="fa fa-edit text-lonestar-500"
                                                />
                                            </button>
                                            <button
                                                @click="destroy(product.id)"
                                            >
                                                <i
                                                    class="fa fa-trash text-red-700"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="products.length === 0">
                                    <td colspan="20" class="py-4 px-6">
                                        <span class="flex justify-center">{{
                                            $t("no results")
                                        }}</span>
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
import Checkbox from "@/Components/Checkbox.vue";
import { ref, watch } from "vue";
import debounce from "lodash/debounce";
import TextArea from "@/Components/TextArea.vue";

let props = defineProps({
    categories: Object,
    products: Object,
    filters: Object,
});
let search = ref(props.filters.search);

const form = useForm({
    en_name: "",
    ar_name: "",
    en_description: "",
    ar_description: "",
    weight: "",
    category_id: "",
    box: false,
    box_l: "",
    box_w: "",
    box_h: "",
    box_q: "",
    box_w_c: "",
    box_w_a: "",
    package: false,
    pack_l: "",
    pack_w: "",
    pack_h: "",
    pack_q: "",
    pack_w_c: "",
    pack_w_a: "",
    prod_image: null,
    prod_img_url: null,
    box_image: null,
    box_img_url: null,
    pack_image: null,
    pack_img_url: null,
    _method: "POST",
});
const prod_id = ref(null);
const edit = (prod) => {
    clear();
    prod_id.value = prod.id;
    form.en_name = prod.name.en;
    form.ar_name = prod.name.ar;
    form.weight = prod.weight;
    form.quantity = prod.quantity;
    form.category_id = prod.category_id;
    form.en_description = prod.description.en;
    form.ar_description = prod.description.ar;
    form.prod_img_url = prod.prod_url;
    form.box_img_url = prod.box_url;
    form.pack_img_url = prod.pack_url;
    if (prod.box_l) {
        form.box = true;
        form.box_l = prod.box_l;
        form.box_w = prod.box_w;
        form.box_h = prod.box_h;
        form.box_q = prod.box_q;
        form.box_w_c = prod.box_w_c;
        form.box_w_a = prod.box_w_a;
    }
    if (prod.pack_l) {
        form.package = true;
        form.pack_l = prod.pack_l;
        form.pack_w = prod.pack_w;
        form.pack_h = prod.pack_h;
        form.pack_q = prod.pack_q;
        form.pack_w_c = prod.pack_w_c;
        form.pack_w_a = prod.pack_w_a;
    }
};
const submit = () => {
    if (!prod_id.value) {
        form.post(route("products.index"), {
            preserveScroll: true,
            onSuccess: () => clear(),
        });
    } else {
        form._method = "PUT";
        form.post(route("products.update", prod_id.value), {
            preserveScroll: true,
            onSuccess: () => clear(),
        });
    }
};
const clear = () => {
    prod_id.value = null;
    form.reset();
};
const destroy = (id) => {
    Inertia.delete(`/products/${id}`, {
        onBefore: () =>
            confirm(
                "Are you sure you want to delete this product? this cannot be undone"
            ),
        preserveScroll: true,
    });
};
const previewProdImage = (e) => {
    form.prod_image = e.target.files[0];
    form.prod_img_url = URL.createObjectURL(form.prod_image);
};
const previewBoxImage = (e) => {
    form.box_image = e.target.files[0];
    form.box_img_url = URL.createObjectURL(form.box_image);
};
const previewPackImage = (e) => {
    form.pack_image = e.target.files[0];
    form.pack_img_url = URL.createObjectURL(form.pack_image);
};
watch(
    search,
    debounce(function (value) {
        Inertia.get(
            route("product.create"),
            { search: value },
            {
                preserveScroll: true,
                replace: true,
                preserveState: true,
            }
        );
    }, 300)
);
</script>
