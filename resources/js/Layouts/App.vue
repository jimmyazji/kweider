<template>
  <div>
    <div class="min-h-screen bg-oyster-300">
      <nav class="bg-lonestar-500 border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <Link
                  :href="route('dashboard')"
                  class="
                    block
                    focus:outline-none focus:border-oyster-200
                    hover:text-oyster-300
                    focus:text-oyster-300
                    text-oyster-500
                  "
                >
                  <BreezeApplicationLogo class="h-24 w-auto fill-current" />
                </Link>
              </div>
              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <BreezeNavLink
                  :href="route('products')"
                  :active="route().current('products')"
                >
                  {{ $t('Products') }}
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('menu')"
                  :active="route().current('menu')"
                >
                  {{ $t('Menu') }}
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('about')"
                  :active="route().current('about')"
                >
                  {{ $t('About us') }}
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('contact')"
                  :active="route().current('contact')"
                >
                  {{ $t('Contact us') }}
                </BreezeNavLink>
              </div>
            </div>

            <div class="flex">
              <!-- Language Selector -->
              <div
                class="
                  hidden
                  ml-3
                  items-center
                  relative
                  space-x-8
                  sm:-my-px sm:ml-10 sm:flex
                "
              >
                <LanguageSelector />
              </div>
              <!-- Auth -->
              <template v-if="!$page.props.auth.user">
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                  <BreezeNavLink :href="route('login')"> {{ $t('Log in') }} </BreezeNavLink>
                  <BreezeNavLink :href="route('register')">
                    {{ $t('Register') }}
                  </BreezeNavLink>
                </div>
              </template>
              <AuthLinks v-else />
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-oyster-500
                  hover:text-lonestar-500 hover:bg-oyster-300
                  focus:outline-none focus:bg-gray-100 focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                "
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
            >
              Products
            </BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('menu')"
              :active="route().current('menu')"
            >
              Menu
            </BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('about')"
              :active="route().current('about')"
            >
              About us
            </BreezeResponsiveNavLink>
          </div>
          <div class="pt-2 pb-3 space-y-1">
            <BreezeResponsiveNavLink
              :href="route('contact')"
              :active="route().current('contact')"
            >
              Contact us
            </BreezeResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pb-1 border-t border-gray-200">
            <template v-if="!$page.props.auth.user">
              <div class="mt-3 space-y-1">
                <BreezeResponsiveNavLink :href="route('login')">
                  {{ $t('Log in') }}
                </BreezeResponsiveNavLink>
                <BreezeResponsiveNavLink :href="route('register')">
                  Register
                </BreezeResponsiveNavLink>
              </div>
            </template>
            <ResponsiveAuthLinks v-else />
          </div>
        </div>
      </nav>

      <!-- Page Heading -->
      <header class="bg-oyster-200 shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main class="text-gray-900">
        <slot />
      </main>
    </div>
  </div>
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
defineProps({
  showingNavigationDropdown: false,
});
</script>