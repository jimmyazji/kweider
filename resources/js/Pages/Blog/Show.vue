<template>
    <Head :title="$t('blog')" />
    <div class="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6 pb-10">
        <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
            <div class="col-span-4 lg:text-center lg:pt-14 mb-10">
                <img src="/images/IMG_1.jpg" alt class="rounded-xl" />

                <div class="flex items-center text-sm mt-4">
                    <div class="ml-3 text-left">
                        <span>Posted by</span>
                        <h5
                            class="font-bold"
                        >{{ post.author.first_name + ' ' + post.author.last_name }}</h5>
                    </div>
                </div>
                <p class="mt-4 block text-lonestar-400 text-xs">
                    Published
                    <time>{{ post.created_at }}</time>
                </p>
            </div>

            <div class="col-span-8">
                <div class="hidden lg:flex justify-between mb-6">
                    <Link
                        :href="route('blog.index')"
                        class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-lonestar-400"
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
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
                        Back to Posts
                    </Link>

                    <div class="space-x-2">
                        <a
                            href="#"
                            @click.prevent="categorise"
                            class="px-3 py-1 border-2 border-lonestar-400 border-opacity-50 rounded-full text-lonestar-500 text-xs uppercase font-semibold"
                            style="font-size: 10px"
                        >{{ post.category.name }}</a>
                    </div>
                </div>

                <h1 class="font-bold text-3xl lg:text-4xl mb-10">{{ post.title }}</h1>

                <div v-html="post.body" class="space-y-4 lg:text-lg leading-loose"></div>
            </div>
        </article>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia"
let props = defineProps({ post: Object })
const categorise = () => {
    Inertia.get('/blog', { category: props.post.category.name })
}
</script>
