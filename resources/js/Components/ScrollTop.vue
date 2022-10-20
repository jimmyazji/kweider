<template>
  <div v-cloak>
      <div
        id="pagetop"
        class="fixed right-4 bottom-16 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 min-h-8 font-semibold uppercase text-sm  text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 focus:scale-105 hover:scale-105 shadow-sm border-2 border-almond-500 h-16 w-16 z-50"
        v-show="scY > 300"
        @click.prevent="toTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EFDECA"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>