<template>
    <a
        href="#"
        class="container rounded-lg border-2 bg-almond-300 border-lonestar-300 p-2 w-auto mx-2  lg:h-auto focus:outline-none focus:-translate-y-1 hover:scale-95 focus:scale-100 transition-all transform ease-in-out duration-300"
        :class="toggled ? 'lg:col-span-2 sm:w-240 xl:col-span-3 h-216 mx-0' : 'sm:w-80 h-106 mx-0' "
        @click.prevent="toggleElement()"
    >
        <div
            class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none flex"
        >
            <img src="https://dummyimage.com/600x400" class="h-full object-center object-cover rounded-lg" alt="600x400">
            <p
                class="hidden lg:flex text-lonestar-400 text-sm mx-2 mt-8"
            >{{ product.description }}</p>
        </div>
        <div class="mt-4 flex justify-between pb-4">
            <h3 class="text-lonestar-700">
                <span class="absolute inset-0"></span>
                {{ product.name }}
            </h3>
            <p class="text-sm font-medium text-lonestar-900">$35</p>
        </div>
        <p class="text-sm" :class="toggled ? 'flex lg:hidden' : 'hidden'">{{ product.description }}</p>
    </a>
</template>

<script >
import ImageSlider from "@/Components/ImageSlider.vue";
export default {
    data() {
        return {
            toggled: false,
        };
    },
    components: {
        ImageSlider
    },
    props: { product: Object, }
    ,
    methods: {
        toggleElement() {
            this.toggled = !this.toggled;
        },
    },
};
</script>
