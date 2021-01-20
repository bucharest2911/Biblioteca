  <template>
  <div>
    <Navegador buscando="persona"     />
 <div class="container">
  <div align="right">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registrar Estudiante</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
 Estudiante
 
 
 
    </template>
    <div class="d-block text-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   

      <b-form-group id="input-group-1" label="Nombre :"   label-for="input-2">
        <b-form-input
          id="input-2"
    v-model="Persona.nombre"
          required
          placeholder="Nombre"
></b-form-input>
      </b-form-group>

            <b-form-group id="input-group-2" label="Email:"   label-for="input-2">
        <b-form-input
          id="input-2"
      v-model="correo"
          required
          placeholder="Correo"
></b-form-input>
 <div class="message">{{ validation.firstError('correo') }}</div>
      </b-form-group>
      

            <b-form-group id="input-group-3" label="ID:"   label-for="input-2">
       <b-form-input type="password" class="form-control" placeholder=" Contraseña " value=""  v-model="Persona.id"> </b-form-input>
      </b-form-group>
          


     

      <b-button type="submit" variant="primary">guardar Cliente</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">cerrar</b-button>
  </b-modal>
</div>
 
 

 
<table class="table">
   
  <thead>
    <tr>
    
      <th scope="col"> Nombre</th>
      <th scope="col"> Email</th>
      
     
<th scope="col">Eliminar</th>
            
    </tr>
  </thead>
  <tbody>
  <tr v-for="persona in personas" :key="persona['.key']  ">

<td> {{persona.nombre}}  </td>
<td> {{persona.email}}  </td>
 

     <td> <b-button variant="success"    @click="Eliminar(persona)"    >Eliminar</b-button       > </td>
  </tr>
  
  </tbody>
</table>
 

 
 </div>
</div>
</template>
<script>

 import { personaCollection } from './firebase'
    import Navegador  from '../components/Nevegador.vue'
   
 
import {login} from './firebase'
import {Validator} from './Validar'
 
 import axios from 'axios'
 //import Config from './configurar'
//import {nameref} from './firebase'
//let app=  Firebase.initializeApp(Config);
//let db=app.database()
//let arearef=db.ref('Area')
 
//let bd=firebase.database()
//let area=db.ref('Area')
//let db=firebase.firestore()
console.log(Validator)
 
//let area=db.collection('Area')
export default {
 
  
  name: 'Persona',
 
 components:{
Navegador
 },
  data(){

    
    return {
             show: true,

            Persona:{
               nombre:'',
               email:'',
               id:''
             },
  correo:'',
  buscarpersona:'',
      
            personas:[]
  
    }
 

     
  },

  validators: {
      correo: function (value) {
        return Validator.value(value).required().email();
      }
    },


    firestore(){

      return {
  personas: personaCollection
      }
 
},
 
     

Firestore(){
return {

}
},
      
 



    methods:{
 Limpiar(){
return 
 },
 



     
onSubmit(evt) {
        evt.preventDefault()
  //  area.set(this.Area.nombre)
    //  this.Area.nombre=''
 // console.log()


  this.$validate()
          .then( (success)=> {
            if (success) {
               this.$swal('Persona guardada con exito!','','success')
               const {nombre,id}=this.Persona
  personaCollection.add({
    nombre: nombre,
    email:this.correo,
    id:id
     
})
.then(()=> {
     login.createUserWithEmailAndPassword(this.correo,id).then(user=>{
      
console.log(user)
 }).catch(err=>{
    console.log(err)
 })
    console.log("Document successfully written!");
   let datos = new FormData();
console.log(id)
   datos.append('correo',this.correo)
   datos.append('contraseña',id)

 
    

  fetch('http://localhost/correo/Correo.php',{
               method:'POST',
               body:datos,
              
           
           }) .then(res=>res.json())
           .then(data=>{
            console.log(data)
           })




})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
 
 this.Limpiar(this.Persona)
 
            }
          });

 

 



 
      },
onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
        this.persona.nombre = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      
Eliminar(todo){
   personaCollection.doc(todo.id).delete()
 
 
},

perder(){
   axios.post('http://localhost/correo/Correo.php', {
                    correo:this.correo,
                    id:this.id,
    
                    
                })
                .then(function (response) {
                   console.log(response)
                })
                .catch(function (error) {
                     console.log(error)
                });
}
  

      
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
