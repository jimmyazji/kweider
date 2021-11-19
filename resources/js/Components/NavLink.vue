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
                ? 'inline-flex items-center px-1 pt-1 border-b-4 border-sand-500 text-sm font-medium leading-5 text-oyster-300 focus:outline-none focus:border-oyster-200 transition  duration-150 ease-in-out'
                : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-oyster-500 hover:text-oyster-300 hover:border-oyster-300 focus:outline-none focus:text-oyster-300 focus:border-oyster-300 transition duration-150 ease-in-out'
        }
    }
}
</script>
