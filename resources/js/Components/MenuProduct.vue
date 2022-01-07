<template>
    <transition appear name="fade-expand">
        <a
            href="#"
            class="container rounded-lg border-2 bg-almond-300 border-lonestar-300 p-2 focus:outline-none transition-all transform ease-in-out duration-500"
            :class="toggled ? 'sm:w-140 h-120 sm:h-auto' : 'sm:w-68 h-106 sm:h-auto focus:-translate-y-1 hover:scale-95 focus:scale-100'"
            @click.prevent="toggleElement()"
        >
            <div
                class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden md:h-80 md:aspect-none flex"
            >
                <img
                    :src="product.image"
                    :alt="product.description"
                    class="h-full object-center object-cover rounded-lg"
                />
                <p
                    class="hidden md:flex text-lonestar-400 text-sm mx-2 mt-8 ease-in-out"
                    :class="toggled ? 'opacity-100 transition delay-300 duration-500' : 'opacity-0'"
                >{{ product.description }}</p>
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-lonestar-700">
                        <span class="absolute inset-0"></span>
                        {{ product.name }}
                    </h3>
                    <p class="mt-1 text-sm text-lonestar-500">{{ product.type }}</p>
                </div>
                <p class="font-medium text-lonestar-900">$35</p>
            </div>
            <p
                class="text-sm my-4 md:mx-4 opacity-80 transform transition-all delay-200 duration-100"
                :class="toggled ? 'flex md:hidden' : 'hidden'"
            >{{ product.description }}</p>
        </a>
    </transition>
</template>
<script setup>
import { ref } from 'vue';
const toggled = ref(false);
defineProps({
    product: Object,
});
const toggleElement = () => {
    toggled.value = !toggled.value;
};

</script>
<style>
.fade-expand-enter-active {
    transition: all 0.5s ease-in-out;
}
.fade-expand-leave-active {
    transition: all 0.2s ease-in-out;
}
.fade-expand-enter-from,
.fade-expand-leave-to {
    opacity: 0;
    transform: scale(0.5,0.5);
}
.fade-expand-enter-to,
.fade-expand-leave-from {
    opacity: 1;
    transform: scale(1,1);
}
</style>