<template>
  <div class="btn-group">
    <Link
      v-for="link in links"
      :key="link.label"
      :href="link.url"
      v-html="link.label"
      class="px-2 btn btn-accent btn-sm"
      :class="{ 'bg-almond-500 border-almond-500 btn-disabled': !link.url, 'btn-active': link.active }"
      preserve-scroll
    />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    links: Array,
  },
};
</script>