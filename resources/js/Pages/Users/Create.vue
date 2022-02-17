<template>
  <Head :title="$t('create user')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t("create user") }}</h2>
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
                    :class="{ 'input-error': form.errors.first_name }"
                  />
                  <div
                    v-if="form.errors.first_name"
                    v-text="form.errors.first_name"
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
                    :class="{ 'input-error': form.errors.last_name }"
                  />
                  <div
                    v-if="form.errors.last_name"
                    v-text="form.errors.last_name"
                    class="text-error text-sm ml-2 mt-1"
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
                    :class="{ 'input-error': form.errors.email }"
                  />
                  <div
                    v-if="form.errors.email"
                    v-text="form.errors.email"
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
                    :class="{ 'input-error': form.errors.phone }"
                  />
                  <div
                    v-if="form.errors.phone"
                    v-text="form.errors.phone"
                    class="text-error text-sm ml-2 mt-1"
                  ></div>
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-2">
                <div>
                  <select
                    v-model="form.country"
                    class="mt-1 block w-full select select-bordered font-normal focus:border-transparent"
                    :class="{ 'text-gray-500': !form.country, 'select-error': form.errors.country, 'pl-5': !locale === 'ar' }"
                  >
                    <option selected disabled value>{{ $t('select country') }}</option>
                    <option v-for="country, index in countries" :value="index">{{ country }}</option>
                  </select>
                  <div
                    v-if="form.errors.country"
                    v-text="form.errors.country"
                    class="text-error text-sm ml-2 mt-1"
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
                    :class="{ 'input-error': form.errors.password }"
                  />
                  <div
                    v-if="form.errors.password"
                    v-text="form.errors.password"
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
                      'input-error': form.errors.password_confirmation,
                    }"
                  />
                  <div
                    v-if="form.errors.password_confirmation"
                    v-text="form.errors.password_confirmation"
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
import Multiselect from '@vueform/multiselect'
defineProps({ roles: Object, permissions: Object, countries: Object });
const locale = localStorage.getItem('locale')
let classes = {
  tag: 'bg-lonestar-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
  container: 'relative mx-auto w-full flex items-center justify-end rounded-lg cursor-pointer border border-gray-300 rounded text-sm bg-white outline-none min-h-12 transition duration-200 mt-1',
  placeholder: 'flex items-center h-full absolute top-0 pointer-events-none bg-transparent pl-4 text-gray-500' + ' ' + (locale === 'ar' ? 'right-0' : 'left-0'),
  tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
  tagsSearch: 'absolute inset-0 border-0 outline-none focus:ring-0 focus:outline-none appearance-none p-0 text-base font-sans box-border w-full',
  containerActive: 'ring-1 border-transparent ring-almond-600',
  caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2 h-3 py-px box-content mr-4 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
}
let form = useForm({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  country: "",
  region: "",
  roles: [],
  permissions: [],
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
<style src="@vueform/multiselect/themes/default.css"></style>