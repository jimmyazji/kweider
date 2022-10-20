<template>
  <Head title="Log in" />
  <div v-if="status" class="mb-4 font-medium text-sm text-green-600">{{ status }}</div>

  <form @submit.prevent="submit">
    <div>
      <Input
        id="email"
        type="email"
        class="mt-1 block w-full bg-almond-100"
        v-model="form.email"
        autofocus
        autocomplete="username"
        :placeholder="$t('email')"
        :class="{ 'input-error': $page.props.errors.email }"
      />
      <div
        v-if="$page.props.errors.email"
        v-text="$page.props.errors.email"
        class="text-red-700 text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-2 relative">
      <Input
        id="password"
        :type="passwordFieldType"
        class="mt-1 block w-full bg-almond-100"
        v-model="form.password"
        autocomplete="current-password"
        :placeholder="$t('password')"
        :class="{ 'input-error': $page.props.errors.password }"
      />
      <span
        @click.prevent="switchVisibility"
        class="absolute top-0 bg-lonestar-500 cursor-pointer h-full ltr:rounded-r-lg right-0 flex justify-center items-center px-4 select-none"
      >
        <transition
          enter-to-class="opacity-100"
          enter-from-class="opacity-0"
          enter-active-class="transition-all duration-500"
          leave-to-class="opacity-0"
          leave-from-class="opacity-100"
          leave-active-class="transition-all duration-500 absolute"
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
        </transition>
      </span>
      <div
        v-if="$page.props.errors.password"
        v-text="$page.props.errors.password"
        class="text-red-700 text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="flex items-center justify-between mt-4">
      <label class="flex items-center">
        <Checkbox name="remember" v-model:checked="form.remember" />
        <span class="mx-2 text-sm text-lonestar-700">
          {{
            $t("remember me")
          }}
        </span>
      </label>
      <Link
        v-if="canResetPassword"
        :href="route('password.request')"
        class="hover:underline focus:underline focus:outline-none  text-sm text-lonestar-700 hover:text-lonestar-900"
      >{{ $t("forgotpassword") }}</Link>
    </div>
    <div class="flex flex-wrap justify-center mt-2">
      <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 ltr:mr-2 rtl:ml-2 text-white"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4 5-5-5-5m5 5H3" />
        </svg>
        {{ $t("login") }}
      </Button>
    </div>
  </form>
</template>

<script>
import Button from "@/Components/Button.vue";
import Checkbox from "@/Components/Checkbox.vue";
import AuthenticatingLayout from "@/Layouts/Authenticating.vue";
import Input from "@/Components/Input.vue";
import Label from "@/Components/Label.vue";
import ValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  layout: AuthenticatingLayout,

  components: {
    Button,
    Checkbox,
    Input,
    Label,
    ValidationErrors,
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
        replace: true,
        onSuccess: () => form.reset(),
      });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>
