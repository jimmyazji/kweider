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
                ? 'inline-flex items-center px-1 pt-1 -my-2 border-b-4 leading-5 whitespace-nowrap border-almond-500 text-almond-200 focus:outline-none focus:border-almond-200 transition  duration-150 ease-in-out font-bold '
                : 'inline-flex items-center px-1 pt-1 -my-2 border-b-2 leading-5 whitespace-nowrap border-transparent text-almond-400 hover:text-almond-300 hover:border-lonestar-500 focus:outline-none focus:text-almond-300 focus:border-almond-300 font-bold hover:scale-110 focus:scale-110 hover-translate-y-2 transform transition duration-150 ease-in-out'
        }
    }
}
</script>
