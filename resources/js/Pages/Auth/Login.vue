<template>
  <Head title="Log in" />

  <BreezeValidationErrors class="mb-4" />

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
        required
        autofocus
        autocomplete="username"
        placeholder="Email"
      />
    </div>

    <div class="mt-2 relative">
      <BreezeInput
        id="password"
        :type="passwordFieldType"
        class="mt-1 block w-full"
        v-model="form.password"
        required
        autocomplete="current-password"
        placeholder="Password"
      />
      <button
        @click.prevent="switchVisibility"
        class="absolute top-0 right-0 rounded-l-none btn btn-primary"
      >
        <svg
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
      </button>
    </div>

    <div class="flex items-center justify-between mt-4">
      <label class="flex items-center">
        <BreezeCheckbox name="remember" v-model:checked="form.remember" />
        <span class="ml-2 text-sm text-lonestar-700">Remember me</span>
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
        Forgot password?
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
          class="w-4 h-4 mr-2 text-white"
        >
          <path
            d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4 5-5-5-5m5 5H3"
          />
        </svg>

        Log in
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
        onFinish: () => this.form.reset("password"),
      });
    },
    switchVisibility(){
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" :"password";
    }
  },
};
</script>
