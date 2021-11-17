<template>
  <Head title="Register" />

  <BreezeValidationErrors class="mb-4" />

  <form @submit.prevent="submit">
    <div>
      <BreezeInput
        id="first_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.first_name"
        required
        autofocus
        autocomplete="first_name"
        placeholder="First Name"
      />
    </div>

    <div class="mt-2">
      <BreezeInput
        id="last_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.last_name"
        required
        autocomplete="last_name"
        placeholder="Last Name"
      />
    </div>

    <div class="mt-2">
      <BreezeInput
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        required
        autocomplete="username"
        placeholder="Email"
      />
    </div>
    <div class="mt-2">
      <BreezeInput
        id="password"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password"
        required
        autocomplete="new-password"
        placeholder="Enter Password"
      />
    </div>

    <div class="mt-2">
      <BreezeInput
        id="password_confirmation"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password_confirmation"
        required
        autocomplete="new-password"
        placeholder="Confim Password"
      />
    </div>

    <div class="flex items-center justify-between md:justify-end mt-4">
      <div>
        <Link
          :href="route('login')"
          class="
            hover:underline
            text-sm text-lonestar-500
            hover:text-lonestar-700
          "
        >
          Already Registered?
        </Link>
      </div>
      <div>
        <BreezeButton
          class="ml-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Register
        </BreezeButton>
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
        password: "",
        password_confirmation: "",
        terms: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation"),
      });
    },
  },
};
</script>
