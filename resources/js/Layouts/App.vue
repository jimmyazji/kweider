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
            <Navigation />
            <!-- Page Content -->
            <main class="text-lonestar-800">
                <FlashMessage
                    :flash="$page.props.flash"
                    :errors="$page.props.errors"
                />
                <ScrollTop />
                <slot />
            </main>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";
import FlashMessage from "@/Components/FlashMessage.vue";
import ScrollTop from "@/Components/ScrollTop.vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";
const locale = localStorage.getItem("locale");

onMounted(() => {
    if (usePage().props.value.locale !== locale) {
        var url = "/locale/:locale";
        url = url.replace(":locale", locale);
        window.location.replace(url);
    }
});
</script>
<style>
.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-to {
    opacity: 1;
    transform: scale(1);
}
.list-enter-active {
    transition: all 0.5s ease-in-out;
}
.list-leave-from {
    opacity: 1;
    transform: scale(1);
}
.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active {
    transition: all 0.5s ease-in-out;
    position: absolute;
}
.list-move {
    transition: all 0.4s ease-in-out;
}
.fade-expand-enter-active {
    transition: all 0.5s ease-in-out;
}
.fade-expand-leave-active {
    transition: all 0.2s ease-in-out;
}
.fade-expand-enter-from,
.fade-expand-leave-to {
    opacity: 0;
    transform: scale(0.5, 0.5);
}
.fade-expand-enter-to,
.fade-expand-leave-from {
    opacity: 0.5;
    transform: scale(1, 1);
}
.fade-enter-active {
    transition: all 0.5s ease-in-out;
}
.fade-leave-active {
    transition: all 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

</style>
