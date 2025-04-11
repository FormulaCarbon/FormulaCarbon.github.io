<script setup>
import { cards } from "@/data/cards";
import AboutMeCard from "@/components/cards/AboutMeCard.vue";
import ProjectsCard from "@/components/cards/ProjectsCard.vue";
import QualsCard from "@/components/cards/QualsCard.vue";
import OrgsCard from "@/components/cards/OrgsCard.vue";
import ContactsCard from "@/components/cards/ContactsCard.vue";

const componentsMap = {
    AboutMeCard,
    ProjectsCard,
    QualsCard,
    OrgsCard,
    ContactsCard
};

</script>




<template>
    <header></header>

    <main class="min-vh-100 w-100 d-flex flex-column">
        <div class="bg-main text-white min-vh-100" id = "container">
            <v-vanta effect="waves" :options="options"></v-vanta>

            <div id="shape-1" class="position-absolute"></div>
            <div class="dashboard-grid m-3">
                <div
                    class="dashboard-item"
                    v-for="(item, index) in cards"
                    :key="index"
                    :class="item.class"
                >
                    <component :is="componentsMap[item.component]" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* pallete: https://colorhunt.co/palette/0926351b42425c83749ec8b9 */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 140px;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.dashboard-item {
    background: var(--color-medium);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.2rem;
    outline: 5px solid var(--color-light);
}

.bg-main {
    background: var(--color-dark);
}

/* Custom sizes */
.wide {
    grid-column: span 2;
}
.tall {
    grid-row: span 2;
}
.large {
    grid-column: span 2;
    grid-row: span 2;
}
.largest {
    grid-column: span 2;
    grid-row: span 3;
}

#shape-1 {
    border-radius: 30% 70% 45% 55% / 64% 25% 75% 36%;
    width: 300px;
    height: 300px;
    top: -100px;
    right: 10px;
    background: radial-gradient(#ae00ff, #5f0063);
    z-index: 0; /* Lower the z-index */
    border-image: linear-gradient(#c70a0a, #fefefe);
}
</style>
