<template>
    <div class="space-x-2 rtl:space-x-reverse">
        <Tab
            v-for="tab in tabs"
            :tab="tab"
            :key="tab.id"
        />
    </div>
</template>

<script setup>
import Tab from "@/Components/Tab.vue";
defineProps({ tabs: Array });
const emits = defineEmits("selectedTab");
const selectTab = (params) => {
    emits("selectedTab", params);
};
</script>
