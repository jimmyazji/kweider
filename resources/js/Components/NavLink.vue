<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },

    props: ['href', 'active'],

    computed: {
        classes() {
            return this.active
                ? 'inline-flex items-center px-1 pt-1 border-b-4 border-almond-600 text-sm font-medium leading-5 text-almond-300 focus:outline-none focus:border-almond-200 transition  duration-150 ease-in-out font-bold'
                : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-almond-500 hover:text-almond-300 hover:border-almond-300 focus:outline-none focus:text-almond-300 focus:border-almond-300 font-bold transition hover:scale duration-150 ease-in-out'
        }
    }
}
</script>
