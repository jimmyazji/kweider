<template>
  <Head title="About us" />
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="p-6 text-lonestar-500">
        <h1 class="font-serif text-6xl">{{ $t('about kweider') }}</h1>
        <p class="flex text-lg mt-5">
          <Bullet />
          {{ $t('about p1') }}
        </p>
        <p class="flex text-lg mt-2 ml-10">{{ $t('about p2') }}</p>
        <p class="flex text-lg mt-2 ml-10">{{ $t('about p3') }}</p>
        <p class="flex text-lg mt-2 ml-10">{{ $t('about p4') }}</p>
        <p class="flex text-lg mt-2 ml-10">{{ $t('about p5') }}</p>
        <h1 class="font-serif mt-20 text-6xl">{{ $t('certificates and awards') }}</h1>
        <p class="flex text-lg mt-2 ">{{ $t('certificates p') }}</p>
        <p class="flex text-lg mt-5">
          <Bullet />
          {{ $t('certificates p1') }}
        </p>
        <p class="flex text-lg mt-5">
          <Bullet />
          {{ $t('certificates p2') }}
        </p>
        <p class="flex text-lg mt-5">
          <Bullet />
          {{ $t('certificates p3') }}
        </p>
        <h1 class="font-serif mt-20 text-6xl">{{ $t('global reach') }}</h1>
        <p class="flex text-lg mt-5">
          <Bullet />
          {{ $t('global p1') }}
        </p>
        <p class="flex text-lg mt-5 ml-10">{{ $t('global p2') }}</p>
        <p class="flex text-lg mt-5 ml-10">{{ $t('global p3') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Bullet from "@/Components/Bullet.vue";
</script>
