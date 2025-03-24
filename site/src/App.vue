<script setup>
import { cards } from '@/data/cards';
</script>

<template>
    <header>
    
    </header>

    <main class="min-vh-100 w-100 d-flex flex-column">
        <div class="bg-primary bg-gradient text-white min-vh-100">
            <div class="m-3">
                <div class="dashboard-grid">
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
        </div>
    </main>
</template>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 20px;
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