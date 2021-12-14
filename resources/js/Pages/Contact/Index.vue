<template>
  <Head :title="$t('contact')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('contact') }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-almond-200 border-b border-gray-200">
          <section class="text-lonestar-600 body-font relative">
            <div class="absolute inset-0 bg-gray-300">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="map"
                scrolling="no"
                :src="'https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed&language='+locale"
              ></iframe>
            </div>
            <div class="container px-5 py-24 mx-auto flex">
              <div
                class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
              >
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p
                  class="leading-relaxed mb-5 text-gray-600"
                >Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >Button</button>
                <p
                  class="text-xs text-gray-500 mt-3"
                >Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
let locale = localStorage.getItem("locale");
</script>