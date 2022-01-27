<template>
    <article
        class="transition-colors duration-300 hover:bg-almond-200 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
    >
        <div class="py-6 px-5 lg:flex">
            <div class="flex-1 lg:mr-8">
                <img src="/images/IMG_1.jpg" alt="Blog Post illustration" class="rounded-xl" />
            </div>

            <div class="flex-1 flex flex-col justify-between">
                <header class="mt-8 lg:mt-0">
                    <div class="space-x-2">
                        <a
                            href="#"
                            @click.prevent="categorise()"
                            class="px-3 py-1 border-2 border-lonestar-400 border-opacity-50 rounded-full text-lonestar-500 text-xs uppercase font-semibold"
                            style="font-size: 10px"
                        >{{ post.category }}</a>
                    </div>

                    <div class="mt-4">
                        <h1 class="text-3xl text-lonestar-600">{{ post.title }}</h1>

                        <span class="mt-2 block text-lonestar-400 text-xs">
                            Published
                            <time>{{ post.created_at }}</time>
                        </span>
                    </div>
                </header>

                <div class="text-sm mt-2">
                    <div v-html="post.excerpt"></div>
                </div>

                <footer class="flex justify-between items-center mt-8">
                    <div class="flex items-center text-sm">
                        <div class="ml-3 flex">
                            <span class="mr-1">Post by</span>
                            <h5 class="font-bold">{{ post.author }}</h5>
                        </div>
                    </div>

                    <div class="hidden lg:block">
                        <Link
                            :href="route('posts.show', post.slug)"
                            class="btn btn-sm transition-colors duration-300 text-xs text-almond-200 font-semibold bg-lonestar-500 hover:bg-lonestar-400 rounded-full py-2 px-5"
                        >Read More</Link>
                    </div>
                </footer>
            </div>
        </div>
    </article>
</template>
<script setup>
import { Inertia } from "@inertiajs/inertia"
let props = defineProps({ post: Object });
const categorise = () => {
    Inertia.get('/blog', { category: props.post.category })
}
</script>