<template>
    <Head :title="$t('edit post')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('edit post') }}</h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form @submit.prevent="submit">
                        <div class="grid grid-row-3 gap-1">
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                <div>
                                    <Input
                                        :title="$t('en title')"
                                        :placeholder="$t('en title')"
                                        v-model="form.en_title"
                                        class="block mt-1 w-full"
                                        :class="{ 'input-error': form.errors.en_title }"
                                    />
                                    <div
                                        v-if="form.errors.en_title"
                                        v-text="form.errors.en_title"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        :title="$t('ar title')"
                                        :placeholder="$t('ar title')"
                                        v-model="form.ar_title"
                                        class="block mt-1 w-full"
                                        :class="{ 'input-error': form.errors.ar_title }"
                                    />
                                    <div
                                        v-if="form.errors.ar_title"
                                        v-text="form.errors.ar_title"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <select
                                        v-model="form.category_id"
                                        class="block sm:mt-1 w-full select select-bordered focus:border-transparent font-normal"
                                        :class="{ 'text-gray-500': !form.category_id, 'select-error': form.errors.category_id }"
                                    >
                                        <option selected value>{{ $t('select category') }}</option>
                                        <option
                                            v-for="category in categories"
                                            :value="category.id"
                                        >{{ category.name }}</option>
                                    </select>
                                    <div
                                        v-if="form.errors.category_id"
                                        v-text="form.errors.category_id"
                                        class="text-error text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>

                            <textarea
                                id="en_excerpt"
                                class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                autocomplete="en_excerpt"
                                v-model="form.en_excerpt"
                                :placeholder="$t('en excerpt')"
                                :title="$t('en excerpt')"
                                :class="{ 'textarea-error': form.errors.en_excerpt }"
                            />
                            <div
                                v-if="form.errors.en_excerpt"
                                v-text="form.errors.en_excerpt"
                                class="text-error text-sm ml-2 mt-1"
                            ></div>
                            <textarea
                                dir="ltr"
                                id="ar_excerpt"
                                class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                autocomplete="ar_excerpt"
                                v-model="form.ar_excerpt"
                                :placeholder="$t('ar excerpt')"
                                :title="$t('ar excerpt')"
                                :class="{ 'textarea-error': form.errors.ar_excerpt }"
                            />
                            <div
                                v-if="form.errors.ar_excerpt"
                                v-text="form.errors.ar_excerpt"
                                class="text-error text-sm ml-2 mt-1"
                            ></div>
                            <textarea
                                dir="ltr"
                                id="en_body"
                                class="block mt-1 w-full textarea h-104 textarea-bordered focus:border-transparent resize-none px-5"
                                autocomplete="en_body"
                                v-model="form.en_body"
                                :placeholder="$t('en body')"
                                :title="$t('en body')"
                                :class="{ 'textarea-error': form.errors.en_body }"
                            />
                            <div
                                v-if="form.errors.en_body"
                                v-text="form.errors.en_body"
                                class="text-error text-sm ml-2 mt-1"
                            ></div>
                            <textarea
                                id="ar_body"
                                class="block mt-1 w-full textarea h-104 textarea-bordered focus:border-transparent resize-none px-5"
                                autocomplete="ar_body"
                                v-model="form.ar_body"
                                :placeholder="$t('ar body')"
                                :title="$t('ar body')"
                                :class="{ 'textarea-error': form.errors.ar_body }"
                            />
                            <div
                                v-if="form.errors.ar_body"
                                v-text="form.errors.ar_body"
                                class="text-error text-sm ml-2 mt-1"
                            ></div>
                            <label
                                class="max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer"
                                for="thumbnail"
                            >
                                <img
                                    v-if="form.thumbnail_url"
                                    class="w-full h-full object-cover rounded-md"
                                    :src="form.thumbnail_url"
                                    alt="thumbnail"
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
                                    id="thumbnail"
                                    type="file"
                                    accept="image/*"
                                    @change="previewImage"
                                    class="hidden"
                                    ref="photo"
                                />
                            </label>
                            <div class="flex items-center justify-between mt-4">
                                <Link
                                    :href="route('blog.index')"
                                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
                                >{{ $t('back') }}</Link>
                                <div>
                                    <Button
                                        type="submit"
                                        class="px-5 mx-0.5"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                    >{{ $t("submit") }}</Button>
                                    <Button
                                        type="button"
                                        class="px-5 mx-0.5"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                        @click="enPreview"
                                    >{{ $t("en preview") }}</Button>
                                    <Button
                                        type="button"
                                        class="px-5 mx-0.5"
                                        :class="{ 'opacity-25': form.processing }"
                                        @click="arPreview"
                                        :disabled="form.processing"
                                    >{{ $t("ar preview") }}</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div
            :dir="previewLocale === 'ar' ? 'rtl' : 'ltr'"
            v-if="previewEnabled"
            class="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6 pb-10"
        >
            <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                <div class="col-span-4 lg:text-center lg:pt-14 mb-10">
                    <img src="/images/IMG_1.jpg" alt class="rounded-xl" />
                    <div class="flex items-center text-sm mt-4">
                        <div class="flex">
                            <span class="mx-1">{{ previewLocale === 'ar' ? 'الكاتب' : 'Author' }}</span>
                            <h5 class="font-bold">{{ $page.props.auth.user.name }}</h5>
                        </div>
                    </div>
                    <p class="mt-4 block text-lonestar-400 text-xs"></p>
                </div>

                <div class="col-span-8">
                    <div class="hidden lg:flex justify-between mb-6">
                        <span
                            class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-lonestar-400"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                class="mr-2"
                                :class="previewLocale === 'ar' ? 'transform rotate-180' : ''"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <path
                                        stroke="#000"
                                        stroke-opacity="0.012"
                                        stroke-width=".5"
                                        d="M21 1v20.16H.84V1z"
                                    />
                                    <path
                                        class="fill-current"
                                        d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                                    />
                                </g>
                            </svg>
                            {{ previewLocale === 'ar' ? 'العودة' : 'back to posts' }}
                        </span>

                        <div class="space-x-2">
                            <a
                                class="px-3 py-1 border-2 border-lonestar-400 border-opacity-50 rounded-full text-lonestar-500 text-xs uppercase font-semibold"
                                style="font-size: 10px"
                            >{{ previewLocale === 'ar' ? 'الفئة' : 'category' }}</a>
                        </div>
                    </div>

                    <h1
                        class="font-bold text-3xl lg:text-4xl mb-10"
                    >{{ previewLocale === 'ar' ? form.ar_title : form.en_title }}</h1>
                    <div
                        v-html="previewLocale === 'ar' ? form.ar_body : form.en_body"
                        class="space-y-4 lg:text-lg leading-loose"
                    ></div>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import Input from '@/Components/Input.vue';
import Button from '@/Components/Button.vue';
import { ref } from 'vue';
let props = defineProps({ post: Object, categories: Object });
const previewEnabled = ref(false);
const previewLocale = ref('en');
const enPreview = () => {
    if (previewLocale.value === 'en') {
        previewEnabled.value = !previewEnabled.value
    }
    else {
        previewLocale.value = 'en';
        previewEnabled.value = true
    }
}
const arPreview = () => {
    if (previewLocale.value === 'ar') {
        previewEnabled.value = !previewEnabled.value
    }
    else {
        previewLocale.value = 'ar';
        previewEnabled.value = true;
    }
}
const form = useForm({
    en_title: props.post.title.en,
    ar_title: props.post.title.ar,
    en_excerpt: props.post.excerpt.en,
    ar_excerpt: props.post.excerpt.ar,
    category_id: props.post.category_id,
    en_body: props.post.body.en,
    ar_body: props.post.body.ar,
    id: props.post.id,
    thumbnail: null,
    thumbnail_url: props.post.thumbnail_url,
    _method: 'PUT'
});
const previewImage = (e) => {
    form.thumbnail = e.target.files[0];
    form.thumbnail_url = URL.createObjectURL(form.thumbnail);
}
const submit = () => {
    form.post(route('posts.update', props.post), {
        preserveScroll: true,
    })
}
</script>