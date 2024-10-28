import Agregar from '../components/Agregar.vue'
import Editar from '../components/Editar.vue'
import Actividades from '../components/Actividades.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Agregar },
    { path: '/actividades', component: Actividades },
   
    {
        path: '/editar/:id',
        name: 'Editar',
        component: Editar,
        props: true
      }
      
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})