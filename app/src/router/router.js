import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import FormularioProducto from '../components/FormularioProducto.vue';
//

import Pedidos from '../components/Pedidos.vue';


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
  },
  

  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;