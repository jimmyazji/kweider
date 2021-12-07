<template>
  <div class="fixed bottom-6 left-0 opacity-80 z-50 m-6">
    <transition name="slide-fade">
      <div
        v-if="
          (flash.message ||
            flash.success ||
            flash.error ||
            Object.keys(errors).length > 0) &&
          showFlash
        "
        :class="{
          'bg-red-200 text-red-900':
            $page.props.flash.error || Object.keys(errors).length > 0,
          'bg-green-200 text-green-900': flash.success,
          'bg-yellow-200 text-yellow-900': flash.message,
        }"
        class="rounded-lg shadow-md p-6 pr-10"
        style="min-width: 240px"
      >
        <button
          @click.prevent="showFlash = false"
          class="opacity-75 cursor-pointer absolute top-0 right-0 py-2 px-3 hover:opacity-100"
        >×</button>
        <div class="flex items-center" v-if="flash.error || Object.keys(errors).length > 0">
          {{ $t("Whoops, Something went wrong!") }}
          <p>{{ flash.error }}</p>
        </div>
        <div
          class="flex items-center"
          v-else-if="flash.success"
        >{{ $t("Success,") }} {{ flash.success }}</div>
        <div
          class="flex items-center"
          v-else-if="flash.message"
        >{{ $("Warning,") }} {{ flash.message }}</div>
      </div>
    </transition>
  </div>
</template>
 
  <style scoped>
.slide-fade-enter-active {
  transition: all 0.4s;
}
.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-enter-from {
  transform: translateY(-400px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}
</style>
<script>
export default {
  props: {
    flash: Object,
    errors: Object,
  },
  data() {
    return {
      showFlash: false,
    };
  },
  watch: {
    flash: {
      deep: true,
      handler() {
        this.showFlash = true;
        setTimeout(() => (this.showFlash = false), 5000);
      },
    },
    errors: {
      deep: true,
      handler() {
        this.showFlash = true;
        setTimeout(() => (this.showFlash = false), 5000);
      },
    },
  },
};
</script>
