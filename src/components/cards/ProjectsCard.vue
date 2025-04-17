<template>
    <div class="dashboard-flex m-3">
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        <div class="dashboard-item p-0"><img src = "https://placehold.co/400x300"></div>
        
    </div>
</template>

<style scoped>
.dashboard-flex {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 40px;
  position: relative;
  z-index: 2;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  scroll-padding: 1rem;
}

.dashboard-item {
  background: #183D3D;
  color: white;
  flex: 0 0 auto; /* Don't shrink, keep width */
  height: 100px;
  width: 133.33px;
  border-radius: 10px;
  overflow: hidden;
  outline: 5px solid #5C8374;
  scroll-snap-align: start;
  transition: 0.3s;
}

.dashboard-item:hover {
    outline-color: var(--color-accent);
}

.dashboard-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dashboard-flex::-webkit-scrollbar {
  height: 8px;
}

.dashboard-flex::-webkit-scrollbar-thumb {
  background-color: #5C8374;
  border-radius: 4px;
}
</style>
