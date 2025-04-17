<!-- src/components/Background.vue -->
<template>
    <div ref="vantaRef" class="vanta-bg">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(() => {
    if (window.VANTA && window.VANTA.WAVES) {
        vantaEffect = window.VANTA.WAVES({
            el: vantaRef.value,
            THREE: window.THREE,
            color: 0x040D12,
            backgroundColor: 0x040d12,
            shininess: 50,
            waveHeight: 25,
            waveSpeed: 0.75,
            zoom: 1.0,
            mouseControls: false
        });
    }
});

onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy();
});
</script>

<style scoped>
.vanta-bg {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
}
</style>
