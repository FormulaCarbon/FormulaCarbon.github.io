<script setup>
const items = [
    {icon: "bi bi-buildings", text:"Flower Mound High School"},
    {icon: "bi bi-buildings", text:"Flower Mound High School"},
    {icon: "bi bi-robot", text:"FTC Team 21932"}
]
</script>

<template >
    <div class = "container">
        <div v-for = "(item, index) in items" :key = "index" class = "icon-links">
            <i :class = "item.icon"></i> {{ item.text }}
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.icon-links {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>