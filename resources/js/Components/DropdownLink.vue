<template>
    <Link class="block w-full px-4 py-2 text-left text-sm leading-5 text-lonestar-800 hover:bg-almond-300 focus:outline-none focus:bg-almond-100 transition duration-150 ease-in-out">
        <slot />
    </Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    }
}
</script>
