import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import FormularioProducto from '../components/FormularioProducto.vue';
import FormularioPersona from '../components/FormularioPersona.vue';
import Persona from '../views/Persona.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/producto',
    name: "Producto",
    component: FormularioProducto
  },
  {
    path: '/usuario/:id?',
    name: "Usuario",
    component: FormularioPersona
  },
  {
    path: '/persona',
    name: "Persona",
    component: Persona
  }
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = /* Lógica para verificar si el usuario está autenticado */;

//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     // Redirigir a la página de inicio de sesión si la ruta requiere autenticación
//     next({ name: 'Home' });
//   } else {
//     next();
//   }
// });

export default router;