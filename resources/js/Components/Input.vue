<template>
    <input
        class="text-sm outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10"
        :value="modelValue"
        :class="modelValue ? '':'focus:ltr:pl-8  focus:rtl:pr-8'"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>

<script>
export default {
    props: ["modelValue"],

    emits: ["update:modelValue"],

    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>
