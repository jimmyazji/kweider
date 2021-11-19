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
                  Products
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('menu')"
                  :active="route().current('menu')"
                >
                  Menu
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('about')"
                  :active="route().current('about')"
                >
                  About us
                </BreezeNavLink>
                <BreezeNavLink
                  :href="route('contact')"
                  :active="route().current('contact')"
                >
                  Contact us
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
                <BreezeDropdown align="right" width="32">
                  <template #trigger>
                    <span class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="
                          inline-flex
                          items-center
                          px-3
                          py-2
                          border border-transparent
                          text-sm
                          leading-4
                          font-medium
                          rounded-md
                          text-oyster-500
                          bg-lonestar-500
                          hover:text-oyster-300
                          focus:outline-none
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        en
                      </button>
                    </span>
                  </template>
                  <template #content>
                    <BreezeDropdownLink
                      ><span class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="1235"
                          height="650"
                          viewBox="0 0 7410 3900"
                          class="w-6 h-6 mr-1"
                        >
                          <path fill="#b22234" d="M0 0h7410v3900H0z" />
                          <path
                            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                            stroke="#fff"
                            stroke-width="300"
                          />
                          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                          <g fill="#fff">
                            <g id="d">
                              <g id="c">
                                <g id="e">
                                  <g id="b">
                                    <path
                                      id="a"
                                      d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                    />
                                    <use xlink:href="#a" y="420" />
                                    <use xlink:href="#a" y="840" />
                                    <use xlink:href="#a" y="1260" />
                                  </g>
                                  <use xlink:href="#a" y="1680" />
                                </g>
                                <use xlink:href="#b" x="247" y="210" />
                              </g>
                              <use xlink:href="#c" x="494" />
                            </g>
                            <use xlink:href="#d" x="988" />
                            <use xlink:href="#c" x="1976" />
                            <use xlink:href="#e" x="2470" />
                          </g>
                        </svg>
                        English
                      </span></BreezeDropdownLink
                    >
                    <BreezeDropdownLink
                      ><span class="flex items-center"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 180 120"
                          class="w-6 h-6 mr-1"
                        >
                          <path d="M0 0h180v120H0z" />
                          <path fill="#fff" d="M0 0h180v80H0z" />
                          <path fill="#ce1126" d="M0 0h180v40H0z" />
                          <g id="d" fill="#007a3d">
                            <g id="c">
                              <g id="b">
                                <path
                                  d="M54 47v13h8"
                                  transform="rotate(18 54 47)"
                                  id="a"
                                />
                                <use
                                  xlink:href="#a"
                                  x="-108"
                                  transform="scale(-1 1)"
                                />
                              </g>
                              <use
                                xlink:href="#b"
                                transform="rotate(72 54 60)"
                              />
                            </g>
                            <use
                              xlink:href="#b"
                              transform="rotate(-72 54 60)"
                            />
                            <use
                              xlink:href="#c"
                              transform="rotate(144 54 60)"
                            />
                          </g>
                          <use xlink:href="#d" x="72" />
                        </svg>
                        العربية
                      </span>
                    </BreezeDropdownLink>
                  </template>
                </BreezeDropdown>
              </div>
              <!-- Auth -->
              <template v-if="!$page.props.auth.user">
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                  <BreezeNavLink :href="route('login')"> Login </BreezeNavLink>
                  <BreezeNavLink :href="route('register')">
                    Register
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
                  Login
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

defineProps({
  showingNavigationDropdown: false,
});
</script>