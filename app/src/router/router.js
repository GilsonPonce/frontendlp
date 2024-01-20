import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue' // Asegúrate de tener el componente Home creado

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;