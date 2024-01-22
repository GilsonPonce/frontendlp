import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import FormularioProducto from '../components/FormularioProducto.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/formproducto',
    name: "Producto",
    component: FormularioProducto
  }
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;