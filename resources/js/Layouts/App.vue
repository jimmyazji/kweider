<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div
      class="min-h-screen bg-almond-400"
      :style="{
        backgroundImage: `url('/../images/pattern.png')`,
        backgroundPosition: '600px 200px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }"
    >
      <nav
        class="bg-primary sticky top-0 z-50 p-2"
        :style="{
          backgroundImage: `url('/../images/pattern.png')`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <Link
                  :href="route('home')"
                  class="block focus:outline-none focus:border-almond-200 hover:text-almond-300 focus:text-almond-300 text-almond-500"
                >
                  <BreezeApplicationLogo class="h-10 mb-3 w-auto fill-current" />
                </Link>
              </div>
              <!-- Navigation Links -->
              <div class="hidden space-x-4 lg:space-x-8 md:-my-px md:mx-4 lg:mx-10 md:flex">
                <BreezeNavLink
                  :class="locale === 'ar' ? 'mr-4 lg:mr-8' : ''"
                  :href="route('products.index')"
                  :active="route().current('products.index')"
                >{{ $t("products") }}</BreezeNavLink>
                <BreezeNavLink
                  :href="route('menu.index')"
                  :active="route().current('menu.index')"
                >{{ $t("menu") }}</BreezeNavLink>
                <BreezeNavLink
                  :href="route('blog.index')"
                  :active="route().current('blog.index')"
                >{{ $t("blog") }}</BreezeNavLink>
                <BreezeNavLink
                  :href="route('about.index')"
                  :active="route().current('about.index')"
                >{{ $t("about") }}</BreezeNavLink>
                <BreezeNavLink
                  :href="route('contact.index')"
                  :active="route().current('contact.index')"
                >{{ $t("contact") }}</BreezeNavLink>
              </div>
            </div>

            <div class="flex">
              <!-- Language Selector -->
              <div class="hidden items-center relative md:flex">
                <LanguageSelector>
                  <span class="inline-flex rounded-md">
                    <button
                      type="button"
                      class="inline-flex font-semibold items-center px-3 py-2 border border-transparent leading-4 rounded-md text-almond-500 hover:text-almond-300 focus:outline-none hover:scale-110 focus:scale-110 transform transition ease-in-out duration-150"
                    >
                      {{ $i18n.locale.toUpperCase() }}
                      <img
                        :src="'/../images/' + $i18n.locale.toUpperCase() + '.png'"
                        alt="EN"
                        class="w-6 h-6 mx-1 rounded-full"
                      />
                    </button>
                  </span>
                </LanguageSelector>
              </div>
              <!-- Auth -->
              <template v-if="!$page.props.auth.user">
                <div class="hidden md:-my-px md:flex">
                  <BreezeNavLink class="mx-8" :href="route('login')">{{ $t("login") }}</BreezeNavLink>
                </div>
              </template>
              <AuthLinks v-else />
            </div>
            <!-- Hamburger -->
            <div class="flex items-center md:hidden">
              <LanguageSelector>
                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-almond-500 hover:text-almond-300 focus:outline-none transition ease-in-out duration-150"
                  >
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
                    {{ $i18n.locale.toUpperCase() }}
                    <img
                      :src="'/../images/' + $i18n.locale.toUpperCase() + '.png'"
                      alt="EN"
                      class="w-6 h-6 mx-1 rounded-full"
                    />
                  </button>
                </span>
              </LanguageSelector>
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center font-bold justify-center p-2 rounded-md text-almond-500 hover:text-lonestar-500 hover:bg-almond-300 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    :class="{
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="md:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('products.index')"
              :active="route().current('products.index')"
            >{{ $t("products") }}</BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('menu.index')"
              :active="route().current('menu.index')"
            >{{ $t("menu") }}</BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('about.index')"
              :active="route().current('about.index')"
            >{{ $t("about") }}</BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('contact.index')"
              :active="route().current('contact.index')"
            >{{ $t("contact") }}</BreezeResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pb-1 border-t border-gray-200">
            <template v-if="!$page.props.auth.user">
              <div class="mt-3 space-y-1">
                <BreezeResponsiveNavLink :href="route('login')">{{ $t("login") }}</BreezeResponsiveNavLink>
                <BreezeResponsiveNavLink :href="route('register')">Register</BreezeResponsiveNavLink>
              </div>
            </template>
            <ResponsiveAuthLinks v-else />
          </div>
        </div>
      </nav>
      <!-- Page Content -->
      <main class="text-lonestar-800">
        <FlashMessage :flash="$page.props.flash" :errors="$page.props.errors" />
        <ScrollTop />
        <slot />
      </main>
    </div>
  </div>
  <footer
    class="p-5 footer bg-primary text-almond-300 footer-center"
    :style="{
      backgroundImage: `url('/../images/pattern.png')`,
      backgroundPosition: '600px 200px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }"
  >
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/kweidersweetsdk/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current"
          >
            <path
              d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07a83 83 0 0 1-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92A82.98 82.98 0 0 1 2.16 12a84 84 0 0 1 .07-4.85c.15-3.23 1.67-4.77 4.92-4.92A84.4 84.4 0 0 1 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05A84.29 84.29 0 0 0 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07A84.33 84.33 0 0 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.89 1.44 1.44 0 0 0 0-2.89z"
            />
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCHyOV1laFp8hiNuGbmA3xkQ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/kweidersy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div>
      <p>Copyright © 2021 - All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import BreezeNavLink from "@/Components/NavLink.vue";
import BreezeResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import AuthLinks from "@/Components/AuthLinks.vue";
import ResponsiveAuthLinks from "@/Components/ResponsiveAuthLinks.vue";
import LanguageSelector from "@/Components/LanguageSelector.vue";
import FlashMessage from "@/Components/FlashMessage.vue";
import ScrollTop from "@/Components/ScrollTop.vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { onMounted, ref } from "vue";
defineProps({
  showingNavigationDropdown: false,
});
const locale = localStorage.getItem("locale");
onMounted(() => {
  if (usePage().props.value.locale !== locale) {
    var url = "/locale/:locale";
    url = url.replace(":locale", locale);
    console.log(url)
    window.location.replace(url)
  }
})
</script>
