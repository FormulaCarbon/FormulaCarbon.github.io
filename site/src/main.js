import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/colors.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

import VVanta from 'vue-vanta';
export default {
  components: { VVanta },
  data () {
    return {
      options: {
          mouseControls: true,
          touchControls: true,
          minHeight: 500.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
      }
    }
  }
}


app.mount('#app')


