<template>
  <div
    class="p-8 min-h-screen flex flex-col pt-6 sm:pt-0 bg-almond-400"
    :style="{
      backgroundImage: `url('~@/../images/authenticating.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <section class="xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full">
      <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <nav class="border-b-4 border-lonestar-500">
          <div class="flex justify-between">
            <LanguageSelector :align="'left'">
              <span class="mx-4 py-1 inline-flex rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-lonestar-800 hover:text-lonestar-500 focus:outline-none transform transition ease-in-out duration-150 hover:scale-105 focus:scale-105"
                >
                  {{ $i18n.locale.toUpperCase() }}
                  <svg
                    class="mx-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </LanguageSelector>
            <div class="flex text-sm">
              <Link
                :href="route('login')"
                class="flex items-center mx-4 focus:outline-none transform transition ease-in-out duration-75 focus:scale-105 hover:scale-105"
                :class="{ 'font-bold': route().current('login') }"
              >{{ $t('login') }}</Link>
              <Link
                :href="route('register')"
                class="flex items-center mx-4 focus:outline-none transform transition ease-in-out duration-75 focus:scale-105 hover:scale-105"
                :class="{ 'font-bold': route().current('register') }"
              >{{ $t('register') }}</Link>
            </div>
          </div>
        </nav>
        <div class="text-lonestar-500">
          <Link
            href="/"
            class="focus:outline-none text-lonestar-500 transition ease-in-out duration-150"
          >
            <BreezeApplicationLogo
              class="mx-auto w-52 h-52 fill-current transform transition ease-in-out duration-150 hover:scale-110"
            />
            <div
              class="text-center text-base md:text-3xl transform transition ease-in-out duration-150"
            >{{ $t("slogan") }}</div>
          </Link>
        </div>
      </div>
    </section>
    <section class="xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full">
      <div class="md:px-12 xl:px-20 pt-4 max-w-2xl">
        <FlashMessage :flash="$page.props.flash" :errors="$page.props.errors" />
        <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import LanguageSelector from "@/Components/LanguageSelector.vue";
import FlashMessage from "@/Components/FlashMessage.vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";
let locale = localStorage.getItem("locale");
onMounted(() => {
  if (usePage().props.value.locale !== locale) {
    var url = "/locale/:locale";
    url = url.replace(":locale", locale);
    window.location.replace(url)
  }
})
</script>
