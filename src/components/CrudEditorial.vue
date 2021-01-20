  <template>

 <div>
      <Navegador/>
 <div class="container">
 
  <div align="right">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registrar Editorial</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
  Editorial
 
 
 
    </template>
    <div class="d-block text-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   

      <b-form-group id="input-group-2" label="Nombre de la editorial:"   label-for="input-2">
        <b-form-input
          id="input-2"
      v-model="Editorial.nombre"
          required
          placeholder="Enter name"
></b-form-input>
      </b-form-group>

      

     

      <b-button type="submit" variant="primary">guardar Editorial</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">cerrar</b-button>
  </b-modal>
</div>
 

<table class="table">
  <thead>
    <tr>
    
      <th scope="col">Nombre de la Editorial  </th>
          
            <th scope="col">Eliminar</th>
            
    </tr>
  </thead>
  <tbody>
 <tr v-for="editorial in editoriales" :key="editorial['.key']"  >


    <td>  {{editorial.nombre}}  </td>
       <td>  

 

 
 

     </td>

     <td> <b-button variant="success"    @click="Eliminar(editorial)"    >Eliminar</b-button       > </td>
 </tr>
  
  </tbody>
</table>
 

 </Div>
 
</div>
</template>
<script>

 
//let bd=firebase.database()
//let area=db.ref('Area')
 
 
//let db=firebase.firestore()
 
//let area=db.collection('Area')

import { editorialCollection } from './firebase';
   import Navegador  from '../components/Nevegador.vue'
export default {

    
  name: 'Editorial',
 
 components:{
  Navegador
 },
  data(){

    
    return {
             show: true,

             Editorial:{
               nombre:''
             },

      
            editoriales:[]
  
    }
 

     
  },


    firestore(){

         return {
      editoriales:  editorialCollection
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
 

 editorialCollection.add({
    nombre: this.Editorial.nombre
     
})
.then(() =>{
    console.log("Document successfully written!");
       this.$swal('Editorial creado con exito!','','success')

})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

 
  

this.Editorial.nombre=''
      },
onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
        this.Editorial.nombre = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      
 
  Eliminar(editorial){
    this.alerta()
 editorialCollection.doc(editorial.id).delete()
},

alerta() {
         
      }

      
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
