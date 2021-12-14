<template>
    <button :type="type" class="btn btn-primary btn-sm text-almond-300">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'submit',
        },
    }
}
</script>
