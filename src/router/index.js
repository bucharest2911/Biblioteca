import Vue from 'vue'
import VueRouter from 'vue-router'
//mport Home from '../views/Home.vue'
 
import CrudAreas from'../components/crudAreas.vue'
import Editorial from '../components/CrudEditorial.vue'
import Categoria from '../components/CrudCategoria.vue'
import Persona from '../components/CrudClientes.vue'
import Libro from '../components/crudLibros.vue'
import Login   from'../components/Iniciar.vue'
import Navegador   from'../components/Nevegador.vue'

import Galeria   from'../components/VistaPersona.vue'
import {  login } from '../components/firebase';
Vue.use(VueRouter)

const routes = [
 
{
  path: '/Navegador',
  name: 'Navegador',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Navegador,
  meta:{
    autentificado:true
  }
 
},

{
  path: '*',
  redirect:'/Login',
 
},
 
  {
    path: '/Login',
    name: 'Login',
    component:Login,
   
  },


  
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

 
 
  {
    path: '/Galeria',
    name: 'Galeria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component:Galeria,
  meta:{
    autentificado:true
  }
  
  },


  

  {
    path: '/Area',
    name: 'CrudAreas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:   CrudAreas,
    meta:{
      autentificado:true
    }
  },

  {
    path: '/Editorial',
    name: 'Editorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  Editorial,
    meta:{
      autentificado:true
    }
  },
  {
    path: '/Categoria',
    name: 'Categoria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  Categoria,
    meta:{
      autentificado:true
    }
  },
  {
    path: '/Persona',
    name: 'Persona',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Persona,
    meta:{
      autentificado:true
    }
  },



  {
    path: '/Libro',
    name: 'Libro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Libro,
    meta:{
      autentificado:true
    }
  },
 

  
  
]

 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // ...

  const usuario=login.currentUser

  
 
let autorizacion=to.matched.some(record=>record.meta.autentificado)
 //let personautorizada=to.matched.some(record=>record.meta.persona)
console.log(autorizacion)
    if(autorizacion && !usuario){
      next('Login')
    }else{
     if(!autorizacion &&  usuario){
       next('Login')
     }else{
       next()
     }
    }


     



     
    
})
export default router
