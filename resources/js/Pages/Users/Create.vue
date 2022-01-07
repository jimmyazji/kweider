<template>
  <Head :title="$t('create user')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t("create user") }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form @submit.prevent="submit">
            <div class="grid grid-row-3 gap-1">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <Input
                    id="first_name"
                    type="text"
                    class="block mt-1 w-full"
                    v-model="form.first_name"
                    :placeholder="$t('first name')"
                    autofocus
                    autocomplete="first_name"
                    :class="{ 'input-error': $page.props.errors.first_name }"
                  />
                  <div
                    v-if="$page.props.errors.first_name"
                    v-text="$page.props.errors.first_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
                <div>
                  <Input
                    id="last_name"
                    type="text"
                    v-model="form.last_name"
                    class="block mt-1 w-full"
                    :placeholder="$t('last name')"
                    :class="{ 'input-error': $page.props.errors.last_name }"
                  />
                  <div
                    v-if="$page.props.errors.last_name"
                    v-text="$page.props.errors.last_name"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <Input
                    id="email"
                    type="email"
                    class="block mt-1 w-full"
                    v-model="form.email"
                    :placeholder="$t('email')"
                    :class="{ 'input-error': $page.props.errors.email }"
                  />
                  <div
                    v-if="$page.props.errors.email"
                    v-text="$page.props.errors.email"
                    class="text-error text-sm ml-2 mt-1"
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
                    :class="{ 'input-error': $page.props.errors.phone }"
                  />
                  <div
                    v-if="$page.props.errors.phone"
                    v-text="$page.props.errors.phone"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <country-select
                    class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                    topCountry="SY"
                    v-model="form.country"
                    :class="[
                      form.country === '' ? 'text-gray-500' : '',
                      { 'border-error': $page.props.errors.country },
                    ]"
                    disablePlaceholder
                    :usei18n="false"
                    :placeholder="$t('select country')"
                    :countryName="true"
                  />
                  <div
                    v-if="$page.props.errors.country"
                    v-text="$page.props.errors.country"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
                <div>
                  <region-select
                    class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
                    v-model="form.region"
                    :usei18n="false"
                    :country="form.country"
                    disablePlaceholder
                    :class="[
                      form.region === '' ? 'text-gray-500' : '',
                      { 'border-error': $page.props.errors.region },
                    ]"
                    :placeholder="$t('select region')"
                    :countryName="true"
                    :regionName="true"
                  />
                  <div
                    v-if="$page.props.errors.region"
                    v-text="$page.props.errors.region"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <Input
                    class="block mt-1 w-full"
                    type="password"
                    :placeholder="$t('enter password')"
                    v-model="form.password"
                    :class="{ 'input-error': $page.props.errors.password }"
                  />
                  <div
                    v-if="$page.props.errors.password"
                    v-text="$page.props.errors.password"
                    class="text-error text-sm ml-2 mt-1"
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
                      'input-error': $page.props.errors.password_confirmation,
                    }"
                  />
                  <div
                    v-if="$page.props.errors.password_confirmation"
                    v-text="$page.props.errors.password_confirmation"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <Link
                  :href="route('users.index')"
                  class="text-sm underline hover:text-lonestar-500 font-semibold mx-1"
                >{{ $t("back") }}</Link>
                <Button
                  type="submit"
                  class="px-5"
                  :class="{ 'opacity-25': form.processing }"
                  :disabled="form.processing"
                >{{ $t("create") }}</Button>
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

let form = useForm({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  country: "",
  region: "",
  password: "",
  password_confirmation: "",
});

let submit = () => {
  form.post(route('users.index'),
    {
      preserveScroll: true,
      onFinish: () => this.form.reset("password", "password_confirmation"),
    });
};
</script>
