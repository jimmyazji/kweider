<template>
    <div class="text-lonestar-600 body-font overflow-hidden">
        <div class="container px-5 lg:pr-0">
            <div class="mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h1
                        class="text-lonestar-900 text-3xl title-font w-104 font-medium mb-4"
                    >{{ product.name }}</h1>
                    <div class="flex mb-4">
                        <span
                            @click="setInfo('prod')"
                            class="flex-grow border-b-2 py-2 text-lg px-1 cursor-pointer transition-color duration-500 delay-200 ease-in-out"
                            :class="selectInfo === 'prod' ? 'text-lonestar-500  border-lonestar-500' : 'border-lonestar-300'"
                        >{{ $t('prod') }}</span>
                        <span
                            v-if="product.box_w"
                            @click="setInfo('box')"
                            class="flex-grow border-b-2 border-lonestar-300 py-2 text-lg px-1 cursor-pointer transition-color duration-300 ease-in-out"
                            :class="selectInfo === 'box' ? 'text-lonestar-500  border-lonestar-500' : 'border-lonestar-300'"
                        >{{ $t('box') }}</span>
                        <span
                            v-if="product.pack_w"
                            @click="setInfo('pack')"
                            class="flex-grow border-b-2 border-lonestar-300 py-2 text-lg px-1 cursor-pointer transition-color duration-300 ease-in-out"
                            :class="selectInfo === 'pack' ? 'text-lonestar-500  border-lonestar-500' : 'border-lonestar-300'"
                        >{{ $t('package') }}</span>
                    </div>
                    <div class="leading-relaxed mb-4 h-20">
                        <p>{{ product.description }}</p>
                    </div>

                    <div
                        class="relative transform transition-height delay-200 duration-100"
                        :class="selectInfo === 'prod' ? 'h-40' : 'h-64'"
                    >
                        <!-- Product info -->
                        <transition name="fade">
                            <div
                                v-show="selectInfo === 'prod'"
                                class="absolute top-0 left-0 w-full h-full "
                            >
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('weight') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.weight }} g</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('cat') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.category }}</span>
                                </div>
                                <div class="flex border-t border-b mb-6 border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('quantity') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.quantity }} p</span>
                                </div>
                            </div>
                        </transition>

                        <!-- Box info -->
                        <transition name="fade">
                            <div
                                v-show="selectInfo === 'box'"
                                class="absolute top-0 left-0 w-full h-full"
                            >
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('clear weight') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_w_c }} g</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('actual weight') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_w_a }} g</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('width') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_w }} cm</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('length') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_l }} cm</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('height') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_h }} cm</span>
                                </div>
                                <div class="flex border-t border-b mb-6 border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('quantity') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.box_q }} p</span>
                                </div>
                            </div>
                        </transition>

                        <!-- Package info -->
                        <transition name="fade">
                            <div
                                v-show="selectInfo === 'pack'"
                                class="absolute top-0 left-0 w-full h-full"
                            >
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('clear weight') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_w_c }} g</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('actual weight') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_w_a }} g</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('width') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_w }} cm</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('length') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_l }} cm</span>
                                </div>
                                <div class="flex border-t border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('height') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_h }} cm</span>
                                </div>
                                <div class="flex border-t border-b mb-6 border-lonestar-200 py-2">
                                    <span class="text-lonestar-500">{{ $t('quantity') }}</span>
                                    <span class="ml-auto text-lonestar-900">{{ product.pack_q }} p</span>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <div class="flex items-center">
                        <span class="title-font font-medium text-2xl text-lonestar-900">$58.00</span>
                        <Button
                            class="flex ml-auto text-almond-400 border-0 py-2 px-6 focus:outline-none"
                        >{{ $t('add to cart') }}</Button>
                        <button class="btn btn-circle btn-primary btn-sm ml-2">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    class="mt-10 max-w-screen lg:w-104 lg:h-104 mx-auto p-4 w-full h-0 pb-full lg:pb-0 flex justify-center items-center rounded-md"
                >
                    <Carousel
                        :id="product.id"
                        :class="'carousel-' + product.id"
                        v-slot="{ currentSlide }"
                    >
                        <Slide>
                            <div v-show="currentSlide === 1">
                                <img
                                    alt="ecommerce"
                                    class="min-w-full h-full object-cover rounded-lg"
                                    src="https://dummyimage.com/400x400"
                                />
                            </div>
                        </Slide>
                        <Slide>
                            <div v-show="currentSlide === 2">
                                <img
                                    alt="ecommerce"
                                    class="min-w-full h-full object-cover rounded-lg"
                                    src="https://dummyimage.com/401x401"
                                />
                            </div>
                        </Slide>
                        <Slide>
                            <div v-show="currentSlide === 3">
                                <img
                                    alt="ecommerce"
                                    class="min-w-full h-full object-cover rounded-lg"
                                    src="https://dummyimage.com/402x402"
                                />
                            </div>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Button from "@/Components/Button";
import Carousel from "@/Components/Carousel.vue";
import Slide from "@/Components/Slide.vue";
import { ref } from 'vue';
defineProps({ product: Object })

const selectInfo = ref('prod');

const setInfo = (index) => {
    selectInfo.value = index;
};
</script>

<style>
.fade-enter-active {
    transition: opacity 0.5s ease-in-out;
}
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>