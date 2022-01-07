<template>
  <BreezeDropdown :align="align" width="32">
    <template #trigger>
      <slot />
    </template>
    <template #content>
      <BreezeDropdownLink @click="setLocale('en')">
        <span class="flex items-center">
          <img :src="'/../images/en.png'" alt="EN" class="w-6 h-auto mx-1" />
          English
        </span>
      </BreezeDropdownLink>
      <BreezeDropdownLink @click="setLocale('ar')">
        <span class="flex items-center">
          <img :src="'/../images/ar.png'" alt="EN" class="w-6 h-auto mx-1" />
          العربية
        </span>
      </BreezeDropdownLink>
    </template>
  </BreezeDropdown>
</template>
<script>
import BreezeDropdown from "@/Components/Dropdown.vue";
import BreezeDropdownLink from "@/Components/DropdownLink.vue";
import { Inertia } from "@inertiajs/inertia";

export default {
  props: {
    align: {
      default: "right",
    },
  },
  components: {
    BreezeDropdown,
    BreezeDropdownLink,
  },
  methods: {
    setLocale(locale) {
      localStorage.setItem("locale", locale);
      location.reload();
    },
  },
};
</script>