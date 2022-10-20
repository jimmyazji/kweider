<template>
    <input
        type="checkbox"
        :value="value"
        v-model="proxyChecked"
        class="rounded-md border text-lonestar-500 border-lonestar-800 border-opacity-40 focus:ring-1 w-5 h-5 focus:ring-lonestar-600 focus:ring-opacity-50 focus:outline-none bg-almond-100"
    />
</template>

<script>
export default {
    emits: ["update:checked"],

    props: {
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
    },

    computed: {
        proxyChecked: {
            get() {
                return this.checked;
            },

            set(val) {
                this.$emit("update:checked", val);
            },
        },
    },
};
</script>
