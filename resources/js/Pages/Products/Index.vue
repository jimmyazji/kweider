<template>
  <Head :title="$t('products')" />
  <header class="bg-almond-200 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ $t('products') }}</h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center md:justify-end text-lonestar-600">
        <Link
          class="mx-4 hover:underline"
          :href="route('menucats.index')"
        >{{ $t('manage categories') }}</Link>
        <Link
          class="mx-4 mb-2 hover:underline"
          :href="route('menu.create')"
        >{{ $t('manage products') }}</Link>
      </div>
      <div class="bg-almond-200 overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-almond-200 border-b border-gray-200">{{ $t('incoming') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
  },
};
</script>
