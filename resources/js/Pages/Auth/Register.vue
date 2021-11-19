<template>
  <Head title="Register" />
  <form @submit.prevent="submit">
    <div>
      <BreezeInput
        id="first_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.first_name"
        autofocus
        autocomplete="first_name"
        placeholder="First Name"
        :class="{'input-error' : $page.props.errors.first_name}"
      />
      <div
        v-if="$page.props.errors.first_name"
        v-text="$page.props.errors.first_name"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-2">
      <BreezeInput
        id="last_name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.last_name"
        autocomplete="last_name"
        placeholder="Last Name"
        :class="{'input-error' : $page.props.errors.last_name}"
      />
      <div
        v-if="$page.props.errors.last_name"
        v-text="$page.props.errors.last_name"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-2">
      <BreezeInput
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        autocomplete="username"
        placeholder="Email"
        :class="{'input-error' : $page.props.errors.email}"
      />
      <div
        v-if="$page.props.errors.email"
        v-text="$page.props.errors.email"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>
    <div class="mt-2">
      <BreezeInput
        id="password"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password"
        autocomplete="new-password"
        placeholder="Enter Password"
        :class="{'input-error' : $page.props.errors.password}"
      />
      <div
        v-if="$page.props.errors.password"
        v-text="$page.props.errors.password"
        class="text-error text-sm ml-2 mt-1"
      ></div>
    </div>

    <div class="mt-2">
      <BreezeInput
        id="password_confirmation"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password_confirmation"
        autocomplete="new-password"
        placeholder="Confim Password"
        :class="{'input-error' : $page.props.errors.password_confirmation}"
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
