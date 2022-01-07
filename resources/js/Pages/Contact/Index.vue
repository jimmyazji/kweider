<template>
  <Head :title="$t('contact')" />
  <header class="bg-almond-100 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('contact') }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="tabs">
        <span
          class="tab tab-lifted transition duration-500"
          @click="selectTab(1)"
          :class="(selectedTab === 1) ? 'tab-active' : ''"
        >Tab 1</span>
        <span
          class="tab tab-lifted transition duration-500"
          @click="selectTab(2)"
          :class="(selectedTab === 2) ? 'tab-active' : ''"
        >Tab 2</span>
        <span
          class="tab tab-lifted transition duration-500"
          @click="selectTab(3)"
          :class="(selectedTab === 3) ? 'tab-active' : ''"
        >Tab 3</span>
      </div>
      <div class="p-4 bg-white rounded-lg" :class="(selectedTab === 1) ? ' rounded-tl-none' : ''">
        <section class="text-lonestar-600 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              v-if="selectedTab === 1"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              :src="'https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed&language=' + locale"
            ></iframe>
            <iframe
              v-if="selectedTab === 2"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              :src="'https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed&language=' + locale"
            ></iframe>
            <iframe
              v-if="selectedTab === 3"
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              :src="'https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed&language=' + locale"
            ></iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex">
            <div
              class="lg:w-1/3 md:w-1/2 bg-almond-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            >
              <h2 class="text-lonestar-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p
                class="leading-relaxed mb-2 text-lonestar-600"
              >Visit us in any of our branches or leave us a message below.</p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-lonestar-600">Email</label>
                <Input class="w-full"></Input>
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-lonestar-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                ></textarea>
              </div>
              <Button class="btn-md">{{ $t('submit') }}</Button>
              <p class="text-xs text-gray-500 mt-3">
                Or contact us on WhatsApp by clicking on
                <a class="text-green-500" href>this link</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { ref } from "vue";
let locale = localStorage.getItem("locale");
const selectedTab = ref(1);

const selectTab = (tab) => {
  selectedTab.value = tab;
}
</script>