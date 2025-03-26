<script setup>
import { cards } from '@/data/cards';

</script>

<template>
    <header>
    
    </header>

    <main class="min-vh-100 w-100 d-flex flex-column">
        <div class="bg-black text-white min-vh-100">
            <div id = "shape-1" class = "position-absolute ">

            </div>
                <div class="dashboard-grid m-3">
                    <div
                    class="dashboard-item"
                    v-for="(item, index) in cards"
                    :key="index"
                    :class="item.class"
                    >
                    <h3>{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 140px;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.dashboard-item {
    background: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.2rem;
    outline: 5px solid grey;
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
    border-radius: 30% 70% 45% 55% / 64% 25% 75% 36% ;
    width: 300px;
    height: 300px;
    top: -100px;
    right:10px;
    background: radial-gradient(#272727, #424242);
    outline: 5px solid purple;
    z-index: 0; /* Lower the z-index */
    border-image: linear-gradient(#c70a0a,#fefefe);
}
</style>