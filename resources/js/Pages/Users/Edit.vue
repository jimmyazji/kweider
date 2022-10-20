<template>
    <Head :title="$t('edit user')" />
    <header class="bg-almond-200 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ user.first_name + " " + user.last_name }}
            </h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-whit shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form @submit.prevent="submit">
                        <div class="grid grid-row-3 gap-1">
                            <div class="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        class="block mt-1 w-full"
                                        v-model="form.first_name"
                                        :placeholder="$t('first name')"
                                        autofocus
                                        autocomplete="first_name"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.first_name,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.first_name"
                                        v-text="$page.props.errors.first_name"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        v-model="form.last_name"
                                        class="block mt-1 w-full"
                                        :placeholder="$t('last name')"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.last_name,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.last_name"
                                        v-text="$page.props.errors.last_name"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <Input
                                        id="email"
                                        type="email"
                                        class="block mt-1 w-full"
                                        v-model="form.email"
                                        :placeholder="$t('email')"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.email,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.email"
                                        v-text="$page.props.errors.email"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        id="phone"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.phone"
                                        autocomplete="phone"
                                        :placeholder="$t('phone')"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.phone,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.phone"
                                        v-text="$page.props.errors.phone"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <select
                                        v-model="form.country"
                                        class="inline-flex appearance-none text-sm outline-none border-opacity-20 flex-shrink-0 transition-colors duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-500 px-5 pr-10 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 w-full"
                                        :class="{
                                            'text-gray-500': !form.country,
                                            'select-error': form.errors.country,
                                        }"
                                    >
                                        <option selected disabled value>
                                            {{ $t("select country") }}
                                        </option>
                                        <option
                                            v-for="(
                                                country, index
                                            ) in countries"
                                            :value="index"
                                        >
                                            {{ country }}
                                        </option>
                                    </select>
                                    <div
                                        v-if="form.errors.country"
                                        v-text="form.errors.country"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="grid sm:grid-cols-2 gap-2">
                                <Multiselect
                                    id="roles"
                                    mode="tags"
                                    :classes="classes"
                                    autocomplete="roles"
                                    :options="roles"
                                    v-model="form.roles"
                                    :placeholder="$t('select roles')"
                                    searchable
                                    label
                                />
                                <Multiselect
                                    id="permissions"
                                    mode="tags"
                                    :classes="classes"
                                    autocomplete="permissions"
                                    :options="permissions"
                                    v-model="form.permissions"
                                    :placeholder="$t('select permissions')"
                                    searchable
                                    label
                                />
                            </div>
                            <div class="grid sm:grid-cols-2 gap-2">
                                <div>
                                    <Input
                                        class="block mt-1 w-full"
                                        type="password"
                                        :placeholder="$t('enter password')"
                                        v-model="form.password"
                                        :class="{
                                            'input-error':
                                                $page.props.errors.password,
                                        }"
                                    />
                                    <div
                                        v-if="$page.props.errors.password"
                                        v-text="$page.props.errors.password"
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                                <div>
                                    <Input
                                        id="password_confirmation"
                                        class="block mt-1 w-full"
                                        type="password"
                                        v-model="form.password_confirmation"
                                        :placeholder="$t('confirm password')"
                                        :class="{
                                            'input-error':
                                                $page.props.errors
                                                    .password_confirmation,
                                        }"
                                    />
                                    <div
                                        v-if="
                                            $page.props.errors
                                                .password_confirmation
                                        "
                                        v-text="
                                            $page.props.errors
                                                .password_confirmation
                                        "
                                        class="text-red-700 text-sm ml-2 mt-1"
                                    ></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <Link
                                    :href="route('users.index')"
                                    class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
                                    >{{ $t("back") }}</Link
                                >
                                <Button
                                    type="submit"
                                    class="px-5"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                    >{{ $t("edit") }}</Button
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
let props = defineProps({
    roles: Object,
    permissions: Object,
    user: Object,
    userRoles: Object,
    userPermissions: Object,
    countries: Object,
});
const locale = localStorage.getItem("locale");
let classes = {
  tag: 'bg-lonestar-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
  container: 'relative mx-auto w-full flex items-center justify-end rounded-lg cursor-pointer border border-gray-300 rounded text-sm bg-white outline-none min-h-12 transition duration-200 mt-1 py-2',
  placeholder: 'flex items-center h-full absolute top-0 pointer-events-none bg-transparent pl-4 text-gray-500 rtl:right-0  ltr:left-0',
  tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
  tagsSearch: 'absolute inset-0 border-0 outline-none focus:ring-0 focus:outline-none appearance-none p-0 text-base font-sans box-border w-full',
  containerActive: 'ring-1 border-transparent ring-almond-600',
  caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2 h-3 py-px box-content mr-4 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
};
let form = useForm({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    email: props.user.email,
    phone: props.user.phone,
    country: props.user.country,
    region: props.user.region,
    roles: props.userRoles,
    permissions: [props.userPermissions],
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.put(route("users.update", props.user.id), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
