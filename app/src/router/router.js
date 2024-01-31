import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import FormularioProducto from '../components/FormularioProducto.vue';
import FormularioPersona from '../components/FormularioPersona.vue';
import Persona from '../views/Persona.vue';
import Pedidos from '../components/Pedidos.vue';
import FormularioPedido from '../components/FormularioPedido.vue';
import Pedido from '../views/Pedido.vue'; // Importa el nuevo componente Pedido

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/producto/:id?',
    name: 'Producto',
    component: FormularioProducto,
  },
  {
    path: '/usuario/:id?',
    name: 'Usuario',
    component: FormularioPersona,
  },
  {
    path: '/persona',
    name: 'Persona',
    component: Persona,
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos,
  },
  {
    path: '/pedidoVista',
    name: 'PedidoVista',
    component: Pedido,
  },

  
  {
    path: '/pedido/:id?', // Puedes ajustar el nombre de la ruta si es necesario
    name: 'Pedido',
    component: FormularioPedido,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
