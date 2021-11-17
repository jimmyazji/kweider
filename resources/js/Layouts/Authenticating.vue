<template>
  <div class="p-8 min-h-screen flex flex-col pt-6 sm:pt-0 bg-oyster-300">
    <section class="xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full">
      <div class="text-lonestar-500">
        <Link href="/" class="focus:outline-none">
          <BreezeApplicationLogo
            class="mx-auto w-52 h-52 fill-current"
          />
        </Link>
        <div class="text-center text-base md:text-3xl">
            Qwaider For Damascene Sweets 
        </div>
      </div>
    </section>
    <section class="xl:w-2/5 lg:w-5/12 md:w-1/2 sm:w-2/3 w-full">
      <div class="md:px-12 xl:px-20 pt-4 max-w-2xl">
        <slot />
      </div>
    </section>
  </div>
</template>

<script setup>
import BreezeApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>
