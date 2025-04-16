<script setup>
import { cards } from "@/data/cards";
import AboutMeCard from "@/components/cards/AboutMeCard.vue";
import ProjectsCard from "@/components/cards/ProjectsCard.vue";
import QualsCard from "@/components/cards/QualsCard.vue";
import OrgsCard from "@/components/cards/OrgsCard.vue";
import ContactsCard from "@/components/cards/ContactsCard.vue";
import Background from "@/components/Background.vue";

const componentsMap = {
    AboutMeCard,
    ProjectsCard,
    QualsCard,
    OrgsCard,
    ContactsCard,
};
</script>

<template>
    <header></header>
    <Background>
        <main class="min-vh-100 w-100 d-flex flex-column">
            <div class="text-white min-vh-100" id="container">
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
    </Background>
</template>

<style scoped>
/* pallete: https://colorhunt.co/palette/040d12183d3d5c837493b1a6 */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 140px;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.dashboard-item {
    background: #183d3d54;
    backdrop-filter: blur(18px);
    filter: drop-shadow();
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.2rem;
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
</style>
