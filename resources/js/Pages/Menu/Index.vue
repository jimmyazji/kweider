<template>
  <Head :title="$t('menu')" />
  <header class="bg-almond-200 shadow-sm">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h2 class="font-semibold text-xl text-lonestar-800 leading-tight">{{ $t("menu") }}</h2>
      <Button>add menu item</Button>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 border-b border-gray-200">
          <div class>
            <div class="max-w-2xl mx-auto px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8p">
              <div class="flex justify-center">
                <a href="#sec-1" v-smooth-scroll class="btn btn-primary btn-sm mx-0.5">Sec 1</a>
                <a href="#sec-2" v-smooth-scroll class="btn btn-primary btn-sm mx-0.5">Sec 2</a>
                <a href="#sec-3" v-smooth-scroll class="btn btn-primary btn-sm mx-0.5">Sec 3</a>
              </div>
              <section id="sec-1">
                <div class="divider opacity-50" dir="ltr">SEC1</div>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
                >
                  <MenuElement />
                  <MenuElement />
                  <MenuElement />
                  <MenuElement />
                </div>
              </section>
              <section id="sec-2">
                <div class="divider opacity-50" dir="ltr">SEC2</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { inject, ref } from "vue";
import MenuElement from "@/Components/MenuElement.vue";
import Button from "@/Components/Button.vue";
const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: refs.myEl,
  });
};

</script>
