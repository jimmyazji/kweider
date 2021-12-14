<template>
  <Head title="Log in" />
  <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
    {{ status }}
  </div>

  <form @submit.prevent="submit">
    <div>
      <BreezeInput
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        autofocus
        autocomplete="username"
        :placeholder="$t('email')"
        :class="{ 'input-error': $page.props.errors.email }"
      />
      <div
        v-if="$page.props.errors.email"
        v-text="$page.props.errors.email"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-2 relative">
      <BreezeInput
        id="password"
        :type="passwordFieldType"
        class="mt-1 block w-full"
        v-model="form.password"
        autocomplete="current-password"
        :placeholder="$t('password')"
        :class="{ 'input-error': $page.props.errors.password }"
      />
      <span
        @click.prevent="switchVisibility"
        class="absolute top-0 btn btn-primary"
        :class="
          locale === 'en' ? 'right-0 rounded-l-none' : 'left-0 rounded-r-none'
        "
      >
        <svg
          v-if="passwordFieldType === 'text'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-auto"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-auto"
        >
          <path
            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"
          />
        </svg>
      </span>
      <div
        v-if="$page.props.errors.password"
        v-text="$page.props.errors.password"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="flex items-center justify-between mt-4">
      <label class="flex items-center">
        <BreezeCheckbox name="remember" v-model:checked="form.remember" />
        <span class="mx-2 text-sm text-lonestar-700">{{
          $t("remember me")
        }}</span>
      </label>
      <Link
        v-if="canResetPassword"
        :href="route('password.request')"
        class="
          hover:underline
          text-sm text-lonestar-700
          hover:text-lonestar-900
        "
      >
        {{ $t("forgotpassword") }}
      </Link>
    </div>
    <div class="flex flex-wrap justify-center mt-2">
      <BreezeButton
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 mx-2 text-white"
        >
          <path
            d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4 5-5-5-5m5 5H3"
          />
        </svg>

        {{ $t("login") }}
      </BreezeButton>
    </div>
  </form>
</template>

<script>
import BreezeButton from "@/Components/Button.vue";
import BreezeCheckbox from "@/Components/Checkbox.vue";
import BreezeAuthenticatingLayout from "@/Layouts/Authenticating.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  layout: BreezeAuthenticatingLayout,

  components: {
    BreezeButton,
    BreezeCheckbox,
    BreezeInput,
    BreezeLabel,
    BreezeValidationErrors,
    Head,
    Link,
  },

  props: {
    canResetPassword: Boolean,
    status: String,
  },

  data() {
    return {
      passwordFieldType: "password",
      locale: localStorage.getItem("locale"),
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("login"), {
        preserveScroll: true,
        onSuccess: () => form.reset("password"),
      });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>
