<template>
    <Head :title="$t('create role')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('create role') }}</h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <Input class="w-full" :placeholder="$t('name')" :title="$t('name')" />
                    <div class="mt-4 grid grid-cols-2 sm:grid-cols-3">
                        <label
                            class="my-2 items-center"
                            v-for="permission in permissions"
                            :for="permission"
                        >
                            <Checkbox
                                :id="permission"
                                class="checkbox-primary mr-1"
                                @change="addPermission(permission)"
                            />
                            <span class="text-sm text-lonestar-500">{{ permission }}</span>
                        </label>
                    </div>
                    <Button
                        type="submit"
                        class="px-5"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >{{ $t("create") }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue"
import Checkbox from "@/Components/Checkbox.vue"
import Button from "@/Components/Button.vue"
defineProps({ permissions: Object })
let form = useForm({
    name: '',
    permissions: [],
})
const addPermission = (permission) => {
    form.permissions.push(permission)
}
const submit = () => {
    form.post(route('roles.index'),
        {
            preserveScroll: true,
        });
};
</script>