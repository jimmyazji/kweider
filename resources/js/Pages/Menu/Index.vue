<template>
  <Head :title="$t('menu')" />
  <header class="bg-almond-200 shadow-sm">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ $t("menu") }}
      </h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 border-b border-gray-200">
          <div class="">
            <div
              class="
                max-w-2xl
                mx-auto
                py-8
                px-4
                sm:py-24 sm:px-6
                lg:max-w-7xl lg:px-8p
              "
            >
              <div class="flex justify-center">
                <a href="#sec-1" v-smooth-scroll class="btn btn-primary mx-1">
                  Div 1
                </a>
                <a href="#sec-2" v-smooth-scroll class="btn btn-primary mx-1">
                  Div 2
                </a>
                <a href="#sec-3" v-smooth-scroll class="btn btn-primary mx-1">
                  Div 3
                </a>
              </div>
              <section id="sec-1">
                <div
                  class="
                    grid grid-cols-1
                    gap-y-10
                    sm:grid-cols-2
                    gap-x-6
                    lg:grid-cols-3
                    xl:grid-cols-4 xl:gap-x-8
                    mt-4
                  "
                >
                  <a
                    v-for="n in 4"
                    :key="n"
                    href="#"
                    class="group border-2 border-lonestar-300 rounded-lg"
                  >
                    <div
                      class="
                        w-full
                        aspect-w-1 aspect-h-1
                        bg-gray-200
                        overflow-hidden
                        rounded-t-lg
                        xl:aspect-w-7 xl:aspect-h-8
                      "
                    >
                      <img
                        :src="'https://picsum.photos/600?random=' + n"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        class="
                          w-full
                          h-full
                          object-center object-cover
                          group-hover:opacity-75
                        "
                      />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700 px-2">
                      Earthen Bottle
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900 p-2">
                      $48
                    </p>
                  </a>
                  <!-- More products... -->
                </div>
              </section>
              <section id="sec-2">
                <div
                  class="
                    grid grid-cols-1
                    gap-y-10
                    sm:grid-cols-2
                    gap-x-6
                    lg:grid-cols-3
                    xl:grid-cols-4 xl:gap-x-8
                    mt-4
                  "
                >
                  <a
                    v-for="n in 4"
                    :key="n"
                    href="https://picsum.photos/600?random="
                    class="group border-2 border-lonestar-300 rounded-lg"
                  >
                    <div
                      class="
                        w-full
                        aspect-w-1 aspect-h-1
                        bg-gray-200
                        overflow-hidden
                        rounded-t-lg
                        xl:aspect-w-7 xl:aspect-h-8
                      "
                    >
                      <img
                        :src="'https://picsum.photos/600?random=' + n+8"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        class="
                          w-full
                          h-full
                          object-center object-cover
                          group-hover:opacity-75
                        "
                      />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700 px-2">
                      Earthen Bottle
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900 p-2">
                      $48
                    </p>
                  </a>
                  <!-- More products... -->
                </div>
              </section>
              <section id="sec-3">
                <div
                  class="
                    grid grid-cols-1
                    gap-y-10
                    sm:grid-cols-2
                    gap-x-6
                    lg:grid-cols-3
                    xl:grid-cols-4 xl:gap-x-8
                    mt-4
                  "
                >
                  <a
                    v-for="n in 4"
                    :key="n"
                    href="#"
                    class="group border-2 border-lonestar-300 rounded-lg"
                  >
                    <div
                      class="
                        w-full
                        aspect-w-1 aspect-h-1
                        bg-gray-200
                        overflow-hidden
                        rounded-t-lg
                        xl:aspect-w-7 xl:aspect-h-8
                      "
                    >
                      <img
                        :src="'https://picsum.photos/600?random=' + n+12"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        class="
                          w-full
                          h-full
                          object-center object-cover
                          group-hover:opacity-75
                        "
                      />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700 px-2">
                      Earthen Bottle
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900 p-2">
                      $48
                    </p>
                  </a>
                  <!-- More products... -->
                </div>
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
const myEl = ref(null);
const smoothScroll = inject("smoothScroll");
const scrollToMyEl = () => {
  smoothScroll({
    scrollTo: myEl.value,
    hash: "#sampleHash",
  });
};
</script>
