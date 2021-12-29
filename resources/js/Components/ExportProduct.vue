<template>
    <div
        class="container lg:col-span-2 sm:w-240 xl:col-span-3 h-216 rounded-lg border-2 bg-almond-300 border-lonestar-300 p-2 w-auto mx-2 lg:h-auto focus:outline-none hover:scale-95 transition-all transform ease-in-out duration-300"
    >
        <div
            class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none flex"
        >
            <div class="h-full w-full carousel">
                <div id="slide1" class="relative w-full carousel-item">
                    <img
                        src="https://dummyimage.com/500x400"
                        class="w-full h-full rounded-lg"
                        alt="600x400"
                    />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#"
                            @click.prevent="prevImage()"
                            class="btn btn-primary btn-circle opacity-60 hover:opacity-100"
                        >❮</a>
                        <a
                            href="#"
                            @click.prevent="nextImage()"
                            class="btn btn-primary btn-circle opacity-60 hover:opacity-100"
                        >❯</a>
                    </div>
                </div>
            </div>
            <p
                class="text-lonestar-400 text-sm mx-2 mt-8"
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
    </div>
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
        nextImage() {

        },
        prevImage() {

        },
    },
};
</script>
