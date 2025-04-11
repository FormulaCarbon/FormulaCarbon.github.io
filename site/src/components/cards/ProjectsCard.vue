<template>
    <div class="dashboard-grid m-3">
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
    </div>
</template>

<style scoped>
.dashboard-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 140px;
    gap: 40px;
    position: relative;
    z-index: 2;
}

.dashboard-item {
    background: #183D3D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.2rem;
    outline: 5px solid #5C8374;
    height: 100px;
    width: 133.33px;
}

.dashboard-item img {
  height: 100%;
  width: 100%;
}
</style>
