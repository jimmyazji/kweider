<template>
  <div class="btn-group" dir="ltr">
    <Link
      v-for="link in links"
      :key="link.label"
      :href="link.url"
      v-html="link.label"
      class="px-2 btn btn-accent btn-sm border-2"
      :class="{ 'bg-almond-500 border-lonestar-400 btn-disabled text-lonestar-400': !link.url, 'btn-active': link.active }"
      preserve-scroll
    />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    links: Object,
  },
};
</script>