<script setup>
const links = [
    { icon: "bi bi-github", url: "https://github.com", text: "" },
    { icon: "bi bi-reddit", url: "https://reddit.com", text: "s" },
    { icon: "bi bi-linkedin", url: "https://linkedin.com", text: "" },
];
</script>

<template>
    <div class="container">
        <div class="icon-links">
            <div v-for="(link, index) in links" :key="index" class="icon-link">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">
                    <i :class="link.icon"></i>
                </a>
            </div>
        </div>
        siddharth.kakumanu@gmail.com
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
    gap: 2rem;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.icon-link i {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-size: 4rem;
    color: var(--color-light);
    transition: color 0.3s;
}
.icon-link:hover i {
    color: var(--color-accent);
}
</style>
