<template>
    <article
        class="transition-colors duration-300 hover:bg-almond-200 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl focus-within:bg-almond-200"
    >
        <div class="py-6 px-2 lg:px-5 lg:flex">
            <div class="flex-1 lg:mr-8">
                <img :src="post.thumbnail" alt="Blog Post illustration" class="rounded-xl" />
            </div>

            <div class="flex-1 flex flex-col justify-between">
                <header class="mt-8 lg:mt-0">
                    <div class="flex justify-between">
                        <a
                            href="#"
                            @click.prevent="categorise()"
                            class="border-lonestar-500 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase border hover:text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105 text-3xs"
                        >{{ post.category.name }}</a>
                        <Dropdown :align="locale === 'ar' ? 'left' : 'right'">
                            <template #trigger>
                                <Button
                                >
                                    <i class="fas fa-ellipsis-h"></i>
                                </Button>
                            </template>
                            <template #content>
                                <DropdownLink :href="route('posts.edit', post)">
                                    <span class="text-lonestar-500">
                                        <i class="fas fa-edit mr-1" />
                                        {{ $t('edit') }}
                                    </span>
                                </DropdownLink>
                                <DropdownLink @click="destroy">
                                    <span class="text-red-600">
                                        <i class="fa fa-trash mr-2" />
                                        {{ $t('delete') }}
                                    </span>
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>

                    <div class="mt-4">
                        <h1 class="text-3xl text-lonestar-600">{{ post.title }}</h1>

                        <span class="mt-2 block text-lonestar-400 text-xs">
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
                            <span class="mr-1">{{ $t('post by') }}</span>
                            <h5 class="font-bold">{{ post.author }}</h5>
                        </div>
                    </div>

                    <div class="hidden lg:block">
                        <Link
                            :href="route('posts.show', post.slug)"
                            class="border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105"
                        >{{ $t('read more') }}</Link>
                    </div>
                </footer>
            </div>
        </div>
    </article>
</template>
<script setup>
import { Inertia } from "@inertiajs/inertia"
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import Button from "@/Components/Button.vue";
const locale = localStorage.getItem('locale');
let props = defineProps({ post: Object });
const categorise = () => {
    Inertia.get('/blog', { category: props.post.category.slug })
}
const destroy = () => {
    Inertia.delete(`/posts/${props.post.id}`, {
        onBefore: () => confirm('Are you sure you want to delete this post? this cannot be undone'),
        preserveScroll: true
    })
};
</script>