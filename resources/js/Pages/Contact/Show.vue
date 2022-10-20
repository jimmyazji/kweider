<template>
    <Head :title="$t('contact')" />
    <div class="py-12">
        <div class="max-w-7xl mx-2 sm:mx-auto sm:px-6 lg:px-8">
            <Tabs :tabs="branches" />
            <div
                class="p-4 bg-white rounded-lg"
                :class="route().current('contact.show',branches[0].slug) ? 'ltr:rounded-tl-none rtl:rounded-tr-none' : ''"
            >
                <section class="text-lonestar-600 body-font relative h-180">
                    <div class="absolute inset-0 bg-almond-300">
                        <transition appear name="fade">
                            <iframe
                                width="100%"
                                height="100%"
                                frameborder="0"
                                marginheight="0"
                                marginwidth="0"
                                title="map"
                                scrolling="no"
                                :src="branch.map"
                            ></iframe>
                        </transition>
                    </div>
                    <div class="container px-5 py-24 mx-auto flex h-160">
                        <div
                            class="hidden lg:w-1/3 md:w-1/2 bg-almond-50 rounded-lg p-8 md:flex flex-col md:ml-auto w-full mt-10 relative z-10 shadow-md"
                        >
                            <h2
                                class="text-lonestar-900 text-lg mb-1 font-medium title-font"
                            >
                                {{ $t("feedback") }}
                            </h2>
                            <p class="leading-relaxed mb-2 text-lonestar-600">
                                {{ $t("contact message") }}
                            </p>
                            <div class="relative mb-4">
                                <Input
                                    class="w-full"
                                    v-model="form.email"
                                    :placeholder="$t('email')"
                                ></Input>
                            </div>
                            <div class="relative mb-4">
                                <TextArea
                                    v-model="form.message"
                                    :placeholder="$t('message')"
                                    id="message"
                                    name="message"
                                    class="block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5"
                                ></TextArea>
                            </div>
                            <Button
                                @click="submit()"
                                class="max-w-min px-7 py-5"
                                >{{ $t("send") }}</Button
                            >
                            <p class="text-xs text-gray-500 mt-3">
                                {{ $t("or contact") }}
                                <a
                                    class="text-green-500"
                                    href="http://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >{{ $t("whatsapp") }}</a
                                >.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div
                class="md:hidden bg-almond-50 rounded-lg p-8 flex flex-col mt-10 shadow-md"
            >
                <h2
                    class="text-lonestar-900 text-lg mb-1 font-medium title-font"
                >
                    {{ $t("feedback") }}
                </h2>
                <p class="leading-relaxed mb-2 text-lonestar-600">
                    {{ $t("contact message") }}
                </p>
                <div class="relative mb-4">
                    <Input
                        class="w-full"
                        v-model="form.email"
                        :placeholder="$t('email')"
                    ></Input>
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
                <Button @click="submit()" class="btn-md">{{
                    $t("send")
                }}</Button>
                <p class="text-xs text-gray-500 mt-3">
                    {{ $t("or contact") }}
                    <a class="text-green-500" href="#">{{ $t("whatsapp") }}</a
                    >.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head, useForm } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import TextArea from "@/Components/TextArea.vue";
import Tabs from "@/Components/Tabs.vue";
const props = defineProps({ branches: Array, branch: Object });
const form = useForm({
    email: "",
    message: "",
});
const submit = () => {
    form.reset();
};
</script>
