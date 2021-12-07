<template>
    <transition name="expand">
        <a
            href="#"
            class="group relative rounded-lg border-2 border-lonestar-300 p-2"
            :class="{ 'lg:col-span-2': toggled }"
            @click.prevent="toggleElement()"
        >
            <div
                class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none lg:flex"
            >
                <img
                    :src="'https://loremflickr.com/320/240/food?random=' + rand"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="w-full h-full object-center object-cover rounded-lg group-hover:opacity-75"
                />
                <p
                    class="text-lonestar-400 text-sm mx-4 mt-8"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, nemo.</p>
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-lonestar-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Basic Tee
                    </h3>
                    <p class="mt-1 text-sm text-lonestar-500">Black</p>
                </div>
                <p class="text-sm font-medium text-lonestar-900">$35</p>
            </div>
        </a>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            toggled: false,
            rand: Math.random(),
        };
    },
    methods: {
        toggleElement() {
            this.toggled = !this.toggled;
        },
    },
};
</script>
