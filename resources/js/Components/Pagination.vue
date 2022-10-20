<template>
    <nav aria-label="Page pagination">
        <li class="list-none select-none">
            <Link
                v-for="link in links"
                :key="link.label"
                :href="link.url"
                v-html="link.label"
                class="px-2 py-2 border border-t-2 border-b-2 ltr:first:rounded-l-lg ltr:first:border-l-2 ltr:last:rounded-r-lg ltr:last:border-r-2 rtl:first:rounded-r-lg rtl:first:border-r-2 rtl:last:rounded-l-lg rtl:last:border-l-2 text-sm border-lonestar-500 bg-lonestar-500 bg-opacity-80 text-almond-100"
                :class="{
                    'bg-opacity-40 text-lonestar-500 pointer-events-none':
                        !link.url,
                    'bg-opacity-40 pointer-events-none': link.active,
                }"
            />
        </li>
    </nav>
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
