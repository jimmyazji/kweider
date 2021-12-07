<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div
      class="min-h-screen bg-almond-400"
      :style="{
        backgroundImage: `url('~@/../images/pattern.png')`,
        backgroundPosition: '600px 200px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }"
    >
      <nav
        class="bg-primary border-b border-almond-100 sticky top-0 z-50"
        :style="{
          backgroundImage: `url('~@/../images/pattern.png')`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <Link
                  :href="route('home')"
                  class="block focus:outline-none focus:border-almond-200 hover:text-almond-300 focus:text-almond-300 text-almond-500"
                >
                  <BreezeApplicationLogo class="h-8 w-auto fill-current" />
                </Link>
              </div>
              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:mx-10 sm:flex">
                <BreezeNavLink
                  :class="locale === 'ar' ? 'ml-8' : ''"
                  :href="route('products')"
                  :active="route().current('products')"
                  >{{ $t("products") }}</BreezeNavLink
                >
                <BreezeNavLink :href="route('menu')" :active="route().current('menu')">{{
                  $t("menu")
                }}</BreezeNavLink>
                <BreezeNavLink :href="route('blog')" :active="route().current('blog')">{{
                  $t("blog")
                }}</BreezeNavLink>
                <BreezeNavLink
                  :href="route('about')"
                  :active="route().current('about')"
                  >{{ $t("about") }}</BreezeNavLink
                >
                <BreezeNavLink
                  :href="route('contact')"
                  :active="route().current('contact')"
                  >{{ $t("contact") }}</BreezeNavLink
                >
              </div>
            </div>

            <div class="flex">
              <!-- Language Selector -->
              <div class="hidden items-center relative sm:flex">
                <LanguageSelector>
                  <span class="inline-flex rounded-md">
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-almond-500 hover:text-almond-300 focus:outline-none transition ease-in-out duration-150"
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
              </div>
              <!-- Auth -->
              <template v-if="!$page.props.auth.user">
                <div class="hidden sm:-my-px sm:flex">
                  <BreezeNavLink class="mx-8" :href="route('login')">{{
                    $t("login")
                  }}</BreezeNavLink>
                  <BreezeNavLink class :href="route('register')">{{
                    $t("register")
                  }}</BreezeNavLink>
                </div>
              </template>
              <AuthLinks v-else />
            </div>

            <!-- Hamburger -->
            <div class="flex items-center sm:hidden">
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center justify-center p-2 rounded-md text-almond-500 hover:text-lonestar-500 hover:bg-almond-300 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
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
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('products')"
              :active="route().current('products')"
              >Products</BreezeResponsiveNavLink
            >
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('menu')"
              :active="route().current('menu')"
              >Menu</BreezeResponsiveNavLink
            >
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('about')"
              :active="route().current('about')"
              >About us</BreezeResponsiveNavLink
            >
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('contact')"
              :active="route().current('contact')"
              >Contact us</BreezeResponsiveNavLink
            >
          </div>

          <!-- Responsive Settings Options -->
          <div class="pb-1 border-t border-gray-200">
            <template v-if="!$page.props.auth.user">
              <div class="mt-3 space-y-1">
                <BreezeResponsiveNavLink :href="route('login')">{{
                  $t("login")
                }}</BreezeResponsiveNavLink>
                <BreezeResponsiveNavLink :href="route('register')"
                  >Register</BreezeResponsiveNavLink
                >
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
    class="items-center p-4 footer bg-primary text-neutral-content"
    :style="{
      backgroundImage: `url('~@/../images/pattern.png')`,
      backgroundPosition: '600px 200px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }"
  >
    <div class="items-center grid-flow-col">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="fill-current"
      >
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
        />
      </svg>
      <p>Copyright © 2021 - All right reserved</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
      </a>
      <a>
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
      <a>
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
  </footer>
</template>

<script setup>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import BreezeDropdown from "@/Components/Dropdown.vue";
import BreezeDropdownLink from "@/Components/DropdownLink.vue";
import BreezeNavLink from "@/Components/NavLink.vue";
import BreezeResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import AuthLinks from "@/Components/AuthLinks.vue";
import ResponsiveAuthLinks from "@/Components/ResponsiveAuthLinks.vue";
import LanguageSelector from "@/Components/LanguageSelector.vue";
import FlashMessage from "@/Components/FlashMessage.vue";
import ScrollTop from "@/Components/ScrollTop.vue";
defineProps({
  showingNavigationDropdown: false,
});
let locale = localStorage.getItem("lang");
</script>
