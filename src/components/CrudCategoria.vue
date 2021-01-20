  <template>

  <div>
     <Navegador/>
 <div class="container">
   
  <div align="right">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registrar Categoria</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
Categoria
 
 
 
    </template>
    <div class="d-block text-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   

      <b-form-group id="input-group-2" label="Nombre de la Categoria:"   label-for="input-2">
        <b-form-input
          id="input-2"
       v-model="Categoria.nombre"
          required
          placeholder="Enter name"
></b-form-input>
      </b-form-group>

      

     

      <b-button type="submit" variant="primary">guardar categoria</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">cerrar</b-button>
  </b-modal>
</div>
  

<table class="table">
  <thead>
    <tr>
    
      <th scope="col">Nombre de la Categoria  </th>
           
            <th scope="col">Eliminar</th>
            
    </tr>
  </thead>
  <tbody>
  <tr v-for="categoria in categorias" :key="categoria['.key']"  >


    <td>  {{categoria.nombre}}  </td>
       

     <td> <b-button variant="success"    @click="Eliminar(categoria)"    >Eliminar</b-button       > </td>
 </tr>
  
  </tbody>
</table>
 

 </div>
 
</div>
</template>
<script>

 
//let bd=firebase.database()
//let area=db.ref('Area')
 
 
//let db=firebase.firestore()
 
//let area=db.collection('Area')

import { categoriaCollection } from './firebase';
   import Navegador  from '../components/Nevegador.vue'
export default {

    
  name: 'Categoria',
 
 components:{
   Navegador
 },
  data(){

    
    return {
             show: true,

             Categoria:{
               nombre:''
             },

      
            categorias:[]
  
    }
 

     
  },


    firestore(){

         return {
      categorias:  categoriaCollection
    }
 
},
 
  created(){
 
},   

Firestore(){
return {

}
},
      
 



    methods:{




     
onSubmit(evt) {
        evt.preventDefault()
  //  area.set(this.Area.nombre)
    //  this.Area.nombre=''
 // console.log()
 const {nombre}=this.Categoria
 
 categoriaCollection.add({
   nombre:nombre
  
     
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


this.Categoria.nombre=''
      },
onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
        this.Categoria.nombre = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      
 
  Eliminar(categoria){
 categoriaCollection.doc(categoria.id).delete()
}

      
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
