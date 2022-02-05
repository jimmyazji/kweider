<template>
  <Head title="Register" />
  <form @submit.prevent="submit">
    <div class="mt-1">
      <BreezeInput
        id="first_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.first_name"
        autofocus
        autocomplete="first_name"
        :placeholder="$t('first name')"
        :class="{ 'input-error': $page.props.errors.first_name }"
      />
      <div
        v-if="$page.props.errors.first_name"
        v-text="$page.props.errors.first_name"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>
    <div class="mt-1">
      <BreezeInput
        id="last_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.last_name"
        autocomplete="last_name"
        :placeholder="$t('last name')"
        :class="{ 'input-error': $page.props.errors.last_name }"
      />
      <div
        v-if="$page.props.errors.last_name"
        v-text="$page.props.errors.last_name"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-1">
      <BreezeInput
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        autocomplete="username"
        :placeholder="$t('email')"
        :class="{ 'input-error': $page.props.errors.email }"
      />
      <div
        v-if="$page.props.errors.email"
        v-text="$page.props.errors.email"
        class="text-error text-sm ml-2 mt-1"
      ></div>
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
        :countryName="true"
        :placeholder="$t('select country')"
      />
      <div
        v-if="$page.props.errors.country"
        v-text="$page.props.errors.country"
        class="text-error text-sm ml-2 mt-1"
      ></div>
      <region-select
        class="block mt-1 w-full select select-bordered focus:border-transparent font-normal"
        v-model="form.region"
        :country="form.country"
        disablePlaceholder
        :class="[
          form.region === '' ? 'text-gray-500' : '',
          { 'border-error': $page.props.errors.region },
        ]"
        :placeholder="$t('select region')"
        :usei18n="false"
        :countryName="true"
        :regionName="true"
      />
      <div
        v-if="$page.props.errors.region"
        v-text="$page.props.errors.region"
        class="text-error text-sm ml-2 mt-1"
      ></div>
      <BreezeInput
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
    <div class="mt-1">
      <BreezeInput
        id="password"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password"
        :placeholder="$t('enter password')"
        :class="{ 'input-error': $page.props.errors.password }"
      />
      <div
        v-if="$page.props.errors.password"
        v-text="$page.props.errors.password"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-1">
      <BreezeInput
        id="password_confirmation"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password_confirmation"
        autocomplete="new-password"
        :placeholder="$t('confirm password')"
        :class="{ 'input-error': $page.props.errors.password_confirmation }"
      />
      <div
        v-if="$page.props.errors.password_confirmation"
        v-text="$page.props.errors.password_confirmation"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="flex items-center justify-between md:justify-end mt-4">
      <div>
        <Link
          :href="route('login')"
          class="hover:underline text-sm text-lonestar-500 hover:text-lonestar-700"
        >{{ $t("registered") }}</Link>
      </div>
      <div class="ml-4">
        <BreezeButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >{{ $t("register") }}</BreezeButton>
      </div>
    </div>
  </form>
</template>

<script>
import BreezeButton from "@/Components/Button.vue";
import BreezeAuthenticatingLayout from "@/Layouts/Authenticating.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
export default {
  layout: BreezeAuthenticatingLayout,

  components: {
    BreezeButton,
    BreezeInput,
    BreezeLabel,
    BreezeValidationErrors,
    Head,
    Link,
  },

  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        region: "",
        password: "",
        password_confirmation: "",
        terms: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("register"), {
        preserveScroll: true,
        onFinish: () => this.form.reset("password", "password_confirmation"),
      });
    },
  },
};
</script>
