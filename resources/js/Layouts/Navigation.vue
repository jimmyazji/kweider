<template>
    <nav
        class=" bg-lonestar-500 sticky top-0 z-50 p-2 border-b border-almond-500"
        :style="{
            backgroundImage: `url('/../images/pattern.png')`,
            backgroundPosition: 'center center',
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
                    <div class="hidden space-x-4 rtl:space-x-reverse lg:space-x-8 md:-my-px md:mx-4 lg:mx-10 md:flex">
                        <BreezeNavLink
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
                            :active="route().current('contact.show')"
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
                                        :src="'/../images/' + $i18n.locale + '.png'"
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
                                {{ $i18n.locale.toUpperCase() }}
                                <img
                                    :src="'/../images/' + $i18n.locale + '.png'"
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
</template>

<script setup>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
import BreezeNavLink from "@/Components/NavLink.vue";
import BreezeResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import AuthLinks from "@/Components/AuthLinks.vue";
import ResponsiveAuthLinks from "@/Components/ResponsiveAuthLinks.vue";
import LanguageSelector from "@/Components/LanguageSelector.vue";
defineProps({
  showingNavigationDropdown: false,
});
const locale = localStorage.getItem("locale");

</script>