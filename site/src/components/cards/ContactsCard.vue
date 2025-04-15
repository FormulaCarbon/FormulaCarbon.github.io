<script setup>
function copyEmail() {
    navigator.clipboard.writeText("siddharth.kakumanu@gmail.com");
    alert("Email copied to clipboard!");
}

const links = [
    { icon: "bi bi-github", url: "https://github.com/FormulaCarbon" },
    { icon: "bi bi-reddit", url: "https://reddit.com" },
    { icon: "bi bi-linkedin", url: "https://linkedin.com" },
    { icon: "bi bi-envelope-fill", url: "email" },
];
</script>

<template>
    <div class="icon-links">
        <div v-for="(link, index) in links" :key="index" :href="link.url">
            <div
                v-if="link.url === 'email'"
                @click="copyEmail()"
                target="_blank"
                rel="noopener"
                class="icon-email"
            >
                <i :class="link.icon"></i>
            </div>

            <a
                v-else-if="link.url !== 'email'"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="icon-link"
            >
                <i :class="link.icon"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
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
.icon-email i {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-size: 5.25rem;
    color: var(--color-light);
    transition: color 0.3s;
}
.icon-link:hover i {
    color: var(--color-accent);
}
.icon-email:hover i {
    color: var(--color-accent);
}
</style>
