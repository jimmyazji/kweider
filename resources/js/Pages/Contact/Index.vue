<template>
  <Head :title="$t('contact')" />
  <div class="py-12">
    <div class="max-w-7xl mx-2 sm:mx-auto sm:px-6 lg:px-8">
      <div class="tabs">
        <span
          class="tab tab-lifted tab-lg duration-500"
          @click="selectTab(1)"
          :class="(selectedTab === 1) ? 'tab-active' : ''"
        >{{ $t('al-midan branch') }}</span>
        <span
          class="tab tab-lifted tab-lg duration-500"
          @click="selectTab(2)"
          :class="(selectedTab === 2) ? 'tab-active' : ''"
        >{{ $t('al-mazzah branch') }}</span>
        <span
          class="tab tab-lifted tab-lg duration-500"
          @click="selectTab(3)"
          :class="(selectedTab === 3) ? 'tab-active' : ''"
        >Tab 3</span>
      </div>
      <div
        class="p-4 bg-white rounded-lg"
        :class="(selectedTab === 1) ? ((locale === 'ar') ? 'rounded-tr-none' : 'rounded-tl-none') : ''"
      >
        <section class="text-lonestar-600 body-font relative h-180">
          <div class="absolute inset-0 bg-almond-300">
            <transition-group appear name="fade">
              <iframe
                v-if="selectedTab === 1"
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                src="https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                src="https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </transition-group>
          </div>
          <div class="container px-5 py-24 mx-auto flex h-160">
            <div
              class="hidden lg:w-1/3 md:w-1/2 bg-almond-50 rounded-lg p-8 md:flex flex-col md:ml-auto w-full mt-10 relative z-10 shadow-md"
            >
              <h2 class="text-lonestar-900 text-lg mb-1 font-medium title-font">{{ $t('feedback') }}</h2>
              <p class="leading-relaxed mb-2 text-lonestar-600">{{ $t('contact message') }}</p>
              <div class="relative mb-4">
                <Input class="w-full" v-model="form.email" :placeholder="$t('email')"></Input>
              </div>
              <div class="relative mb-4">
                <textarea
                  v-model="form.message"
                  :placeholder="$t('message')"
                  id="message"
                  name="message"
                  class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                ></textarea>
              </div>
              <Button @click="submit()" class="btn-md">{{ $t('send') }}</Button>
              <p class="text-xs text-gray-500 mt-3">
                {{ $t('or contact') }}
                <a class="text-green-500" href="http://www.google.com" target="_blank" rel="noopener noreferrer">{{ $t('whatsapp') }}</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div
        class="md:hidden bg-almond-50 rounded-lg p-8 flex flex-col mt-10 shadow-md"
      >
        <h2 class="text-lonestar-900 text-lg mb-1 font-medium title-font">{{ $t('feedback') }}</h2>
        <p class="leading-relaxed mb-2 text-lonestar-600">{{ $t('contact message') }}</p>
        <div class="relative mb-4">
          <Input class="w-full" v-model="form.email" :placeholder="$t('email')"></Input>
        </div>
        <div class="relative mb-4">
          <textarea
            v-model="form.message"
            :placeholder="$t('message')"
            id="message"
            name="message"
            class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
          ></textarea>
        </div>
        <Button @click="submit()" class="btn-md">{{ $t('send') }}</Button>
        <p class="text-xs text-gray-500 mt-3">
          {{ $t('or contact') }}
          <a class="text-green-500" href="#">{{ $t('whatsapp') }}</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head, useForm, usePage } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { ref } from "vue";
let locale = localStorage.getItem("locale");
const selectedTab = ref(1);
const form = useForm({
  email: "",
  message: "",
})
const submit = () => {
  usePage.props.flash.success = "Message sent,Thanks for the feedback"
  form.reset();
}
const selectTab = (tab) => {
  selectedTab.value = tab;
}
</script>