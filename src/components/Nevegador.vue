<template>
  

 
 

   

<div>

 <b-navbar toggleable="lg" type="dark" variant="info">
    
    <b-navbar-brand  >NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          
         <b-nav-item     :to="{name:'CrudAreas'} "     >Area</b-nav-item>
    <b-nav-item     :to="{name:'Editorial'} "     >Editorial</b-nav-item>
        <b-nav-item     :to="{name:'Categoria'} "     >Categoria</b-nav-item>
        <b-nav-item     :to="{name:'Persona'} "     >Persona</b-nav-item>
        <b-nav-item     :to="{name:'Libro'} "     >Libro</b-nav-item>
         <router-view/>
      </b-navbar-nav>
 
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
   
  
        </b-nav-form>

       
    
             <a href="#" class="btn btn-info btn-lg" @click="Cerrar">
          <span class="glyphicon glyphicon-log-out" ></span> Cerrar Sesion
        </a>
      </b-navbar-nav>
    </b-collapse>
   
        
  </b-navbar>
 
</div>
   
      
  
 
      
 
 
 
 



 
    
  
  
</template>
 
<script>
 import {login} from './firebase'
export default {
  name:'Navegador',
props:{
 
  buscando:String
},

  data(){
     return {
       autentificado:false
     }
  },
  methods:{
    Cerrar(){

      console.log('hola')
 login.signOut().then(()=>this.$router.replace('Login')  )

    }
  }
 
}


</script>



<style>
 

 
</style>
