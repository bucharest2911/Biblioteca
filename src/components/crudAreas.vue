 <template>
 <div>
   <Navegador/>
 <div class="container">


  <div align="right">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registrar Area</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
   Area
 
 
 
    </template>
    <div class="d-block text-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   

      <b-form-group id="input-group-2" label="Nombre del area:"   label-for="input-2">
        <b-form-input
          id="input-2"
      v-model="Area.nombre"
          required
          placeholder="Enter name"
></b-form-input>
      </b-form-group>

      

     

      <b-button type="submit" variant="primary">guardar Area</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">cerrar</b-button>
  </b-modal>
</div>
 

<table class="table">
  <thead>
    <tr>
    
      <th scope="col">Nombre del area  </th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
            
    </tr>
  </thead>
  <tbody>
 <tr v-for="area in ventanas" :key="area['.key']"  >


    <td>  {{area.nombre}}  </td>
       <td>  

 

  <b-button pill variant="primary">Editar</b-button>
 

     </td>

     <td> <b-button variant="success"    @click="Eliminar(area)"    >Eliminar</b-button       > </td>
 </tr>
  
  </tbody>
</table>
 
</div>
 
 
</div>
</template>
<script>

 import { areaCollection } from './firebase'

    import Navegador  from '../components/Nevegador.vue'
 //import Config from './configurar'
//import {nameref} from './firebase'
//let app=  Firebase.initializeApp(Config);
//let db=app.database()
//let arearef=db.ref('Area')
 
//let bd=firebase.database()
//let area=db.ref('Area')
//let db=firebase.firestore()

 
//let area=db.collection('Area')
export default {

    
  name: 'CrudAreas',
 
 components:{
   Navegador
 },
 
  data(){

    
    return {
             show: true,

             Area:{
               nombre:''
             },

      
            ventanas:[]
  
    }
 

     
  },


    firestore(){

      return {
  ventanas: areaCollection
      }
 
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




               areaCollection.add({
    nombre: this.Area.nombre
     
})
.then(()=> {
    console.log("Document successfully written!");
     this.$swal('Area creado con exito!','','success')
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
  


this.Area.nombre=''
      },
onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
        this.Area.nombre = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      
Eliminar(todo){
 areaCollection.doc(todo.id).delete()
}
  

      
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
