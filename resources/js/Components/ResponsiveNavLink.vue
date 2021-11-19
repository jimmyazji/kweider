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
                ? 'block pl-3 pr-4 py-2 border-l-4 border-sand-500 text-base font-medium text-lonestar-800 bg-indigo-50 focus:outline-none focus:text-lonestar-900 focus:bg-oyster-300 focus:border-sand-700 transition duration-150 ease-in-out'
                : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-oyster-600 hover:text-oyster-800 hover:bg-gray-50 hover:border-oyster-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
        }
    }
}
</script>
