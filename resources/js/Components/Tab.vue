<template>
    <Link :href="route('contact.show', tab.slug)">
        <span
            class="inline-flex cursor-pointer select-none flex-wrap px-4 items-center justify-center text-center h-8 text-sm leading text-lonestar-500"
            :class="route().current('contact.show',tab.slug) ? 'bg-almond-100 rounded-t-lg' : ''"
        >
            {{ $t(tab.name) }}
        </span>
    </Link>
</template>
<script setup>
defineProps({ tab: Object });
</script>
