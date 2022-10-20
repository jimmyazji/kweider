<template>
    <textarea
        class="text-sm bg-transparent outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent focus:ltr:pl-8 focus:rtl:pr-8 text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 pt-4"
        :value="modelValue"
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
