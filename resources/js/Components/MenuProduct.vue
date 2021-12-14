<template>
    <transition name="expand">
        <a
            href="#"
            class="group rounded-lg border-2 border-lonestar-300 p-2 focus:outline-none focus:scale-105 hover:scale-95 transform ease-in-out duration-200 "
            :class="{ 'lg:col-span-2': toggled }"
            @click.prevent="toggleElement()"
        >
            <div
                class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none flex"
            >
                <img
                    src="https://dummyimage.com/500x400"
                    :alt="product.description"
                    class="w-auto md:w-2/3 h-full object-center object-cover rounded-lg"
                />
                <p
                    class="hidden md:flex w-1/3 text-lonestar-400 text-sm mx-2 mt-8"
                >{{ product.description }}</p>
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-lonestar-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {{ product.name }}
                    </h3>
                    <p class="mt-1 text-sm text-lonestar-500">{{ product.type }}</p>
                </div>
                <p class="text-sm font-medium text-lonestar-900">$35</p>
            </div>
            <p class="text-sm"
            :class=" toggled ? 'flex md:hidden' : 'hidden'  "
            >{{ product.description }}</p>
        </a>
    </transition>
</template>
<style scoped>
.expand-enter-active {
  transition: all 0.4s;
}
.expand-leave-active {
  transition: all 1s;
}
.expand-enter-to {
  opacity: 1;
}
.expand-enter-from {
  opacity: 0;
}
.expand-leave-to {
  opacity: 0;
}
</style>
<script >
export default {
    data() {
        return {
            toggled: false,
            rand: Math.random(),
        };
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
