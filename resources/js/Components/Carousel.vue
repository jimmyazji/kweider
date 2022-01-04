<template>
    <div class="relative w-full h-full">
        <slot :currentSlide="currentSlide" />
        <!--  Navigation  -->
        <div
            v-if="navigationEnabled && getSlideCount > 1"
            class="hidden py-4 h-full w-full absolute lg:flex justify-between items-center"
        >
            <i
                @click="prevSlide"
                class="fas fa-chevron-left cursor-pointer btn btn-circle btn-primary btn-sm mx-4"
            ></i>
            <i
                @click="nextSlide"
                class="fas fa-chevron-right cursor-pointer btn btn-circle btn-primary btn-sm mx-4"
            ></i>
        </div>
        <!-- Pagination -->
        <div
            v-if="paginationEnabled"
            class="absolute bottom-6 w-full flex justify-center items-center gap-4"
        >
            <span
                v-for="(slide,index) in getSlideCount"
                @click="goToSlide(index)"
                :key="index"
                class="cursor-pointer w-4 h-4 rounded-full shadow-sm transition-colors duration-500"
                :class="(index + 1 === currentSlide) ? 'bg-lonestar-400' : 'bg-lonestar-500'"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['pagination', 'navigation', 'timeout', 'autoplay', 'id']
);

const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(props.autoplay ? props.autoplay : false);
const timeoutDuration = ref(props.timeout ? props.timeout : 5000);
const paginationEnabled = ref(props.pagination === false ? false : true);
const navigationEnabled = ref(props.navigation === false ? false : true);
const carouselId = ref(props.id ? props.id : '1');

var timer;

//next slide
const nextSlide = () => {
    if (autoPlayEnabled.value) {
        clearInterval(timer);
        startAutoPlay();
    };
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value += 1;
};

//prev slide
const prevSlide = () => {
    if (autoPlayEnabled.value) {
        clearInterval(timer);
        startAutoPlay();
    };
    if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
    };
    currentSlide.value -= 1;
};

//go to slide
const goToSlide = (index) => {
    if (autoPlayEnabled.value) {
        clearInterval(timer);
        startAutoPlay();
    };
    currentSlide.value = index + 1;
};

//auto play
const startAutoPlay = () => {
    timer = setInterval(() => {
        nextSlide()
    }, timeoutDuration.value);
}
if (autoPlayEnabled.value) {
    startAutoPlay();
}
onMounted(() => {
    const carousel = document.querySelectorAll(".carousel-" + carouselId.value);
    getSlideCount.value = carousel[0].querySelectorAll(".slide").length;
});
</script>