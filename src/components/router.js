
import Areas from'./components/Careas.vue'
import Login   from'./components/Iniciar.vue'
import Area from'./components/login.vue'
import CrudAreas from'./components/CrudAreas.vue'
 
import  Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
 {
        path:'/',
        name:'/Login',
        redirect:Login
 },
         
{
 
path:'*',
name:'/Login',
redirect:Login
},




   
  
  {
  
    path:'/menu',
    name:'Area',
  component:Area
   },
  
  
  
    {
  
     path:'/areas',
     name:'areas',
  component:Areas
    },


 
     
  
    ]
  }) 