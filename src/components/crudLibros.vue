  <template>




<div>
  <Navegador/>
<div class="container">
   
  
  <div align="right">
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registrar Libro</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
 Libro
 
 
 
    </template>
    <div class="d-block text-center">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
   

     

           <b-form-group id="input-group-2" label="Nombre del libro :"   label-for="input-2">
        <b-form-input
          id="input-2"
   v-model="Libro.nombre"
          required
          placeholder="Nombre del libro"
></b-form-input>
      </b-form-group>
      
           <b-form-group id="input-group-2" label="autor :"   label-for="input-2">
        <b-form-input
          id="input-2"
  v-model="Libro.autor"
          required
          placeholder="Autor"
></b-form-input>
      </b-form-group>

  <b-form-group id="input-group-2" label="año:"   label-for="input-2">
        <b-form-input
          id="input-2"
  v-model="Libro.año"
          required
          placeholder="Año"
></b-form-input>
      </b-form-group>
  <b-form-group id="input-group-2" label="cantidad :"   label-for="input-2">
        <b-form-input
          id="input-2"
  v-model="Libro.cantidad"
          required
          placeholder="Cantidad"
></b-form-input>
      </b-form-group>
 <b-form-group id="input-group-2" label="categoria :"   label-for="input-2">
       
  

     <b-form-select   v-model="selected"  >   
       
       <option    v-for="categoria in categorias"  :key="categoria['.key']    "   >

         {{categoria.nombre}}
       </option>
       
       
        </b-form-select>
  
  

      </b-form-group>
      
  <b-form-group id="input-group-2" label="Area :"   label-for="input-2">
       
  

     <b-form-select   v-model="selectedarea"  >   
       
       <option    v-for="area in areas"  :key="area['.key']    "   >

         {{area.nombre}}
       </option>
       
       
        </b-form-select>
  
  

      </b-form-group>


      <b-form-group id="input-group-2" label="editorial :"   label-for="input-2">
       
  

     <b-form-select   v-model="selectededitorial"  >   
       
       <option    v-for="editorial in editoriales"  :key="editorial['.key']    "   >

         {{editorial.nombre}}
       </option>
       
       
        </b-form-select>
  
  

      </b-form-group>


   
   
 
       
  <b-form-group>
   Seleccionar archivo: <input type="file" name="myFile" @change="Subir"  >
     <b-progress :value="value" :max="max" show-progress animated></b-progress>
      
   </b-form-group>
  <b-form-group>
   Seleccionar Imagen: <input type="file" name="myfile2" @change="SubirImagen"  >
  <b-progress :value="valor" :max="maximo" show-progress animated></b-progress>
   
      </b-form-group>


      <b-button type="submit" variant="primary">guardar Libro</b-button>
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
      
      <th scope="col"> autor</th>
       <th scope="col"> año</th>
         <th scope="col"> cantidad</th>
         <th scope="col"> area</th>
         <th scope="col"> categoria</th>
         <th scope="col">editorial</th>
  
<th scope="col">Eliminar</th>
<th scope="col">Enlace</th>
            
    </tr>
  </thead>
  <tbody>
 
  <tr v-for="libro in libros" :key="libro['.key']  ">
 
    <td> 
      
          
      
      
      
      {{libro.nombre}}    
      
    <div class="container">
           <img :src="libro.imagen"   height="100" width="100"> 
        </div>
   
   
       </td>
    
    <td> {{libro.autor}}  </td>
    
    <td> {{libro.año}}  </td>
    
    
  <td> {{libro.cantidad}}  </td>

  <td> {{libro.area}}  </td>
  <td> {{libro.categoria}}  </td>
  <td> {{libro.editorial}}  </td>
 
 
   <td> <b-button variant="success"    @click="Eliminar(libro)"    >Eliminar</b-button       > </td>
    <td>  
      
      
      <div class="container" >

 
<a  :href="libro.enlace" ><i class="fa fa-file-pdf-o" @click="Enviar(libro.nombrelibro)"  aria-hidden="true">  Ver PDF  </i>  {{libro.nombrelibro}}  </a>

<br>

 
      </div>
      
      
      
      
      
      </td>
    </tr>
  
  </tbody>
</table>
 

 
 
</div>

</div>

  
</template>
<script>

 import { libroCollection,areaCollection,editorialCollection,categoriaCollection,bd } from './firebase'
   import Navegador  from '../components/Nevegador.vue'
    
 //import Config from './configurar'
//import {nameref} from '. /firebase'
//let app=  Firebase.initializeApp(Config);
//let db=app.database()
//let arearef=db.ref('Area')
 
//let bd=firebase.database()
//let area=db.ref('Area')
//let db=firebase.firestore()

 console.log(bd)

 console.log(Navegador)
//let area=db.collection('Area')
export default {
 
    
  name: 'Libro',
 
 


  components:{
 
Navegador
 },
  data(){

    
    return {
             show: true,


             selected: null,
            selectedarea:null,
            selectededitorial:null,
            archivo:'',

            enlace:null,
            value:0,
        max: 100,
            link:'',

            maximo:100,
            valor:0,
        Libro:{
               nombre:'',
               autor:'',
              cantidad:'',
             año:'',
            enlace:''

             },
           Area:{
           nombrearea:''
               },
               Categoria:{
           nombrecategoria:''
               },

               Editorial:{
                 nombreeditorial:''
               },
      
            personas:[],
            areas:[],
            categorias:[],
            editoriales:[],
           libros:[],
           enlaces:[],
 

downloadUrl: '',

imagen:''
 


    }
 

     
  },


    firestore(){

      return {
 libros:libroCollection,
  areas:areaCollection,
  categorias:categoriaCollection,
  editoriales:editorialCollection,
  
  
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
 

 Obtener(){
 
 },
 


Subir(e){
 // this.archivo=event.target.files[0]
  //var storage=bd.ref('libros/'+file.name)
   //storage.put(file)
  // console.log(storage)
  //storage.put(file)
 
  //var storageref=bd.ref('libros/'+this.archivo.name)
 //let capturar=''
//et tarea=storageref.put(this.archivo)
//tarea.on('state_changed',(snapshopt)=>{
//console.log(snapshopt)
//},(error)=>{
//console.log(error)
//},()=>{
  //tarea.snapshot.ref.getDownloadURL().then(function(downloadUrl){
 
//  })
  
 


   
   let capturar=bd.ref('libros')
   console.log(capturar)
//})

if(e.target.files[0]){
        
          let file = e.target.files[0];
    

    this.archivo=e.target.files[0]
         // var storageRef = bd.ref('libros/'+ Math.random() + '_'  + file.name);
    var storageRef = bd.ref('libros/'+file.name);
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress)
          this.value=progress
          }, (error) => {

            console.log(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.enlace=downloadURL
            console.log(this.enlace)
            });
          });
      }

      return false 



  },
SubirImagen(e){
 // this.archivo=event.target.files[0]
  //var storage=bd.ref('libros/'+file.name)
   //storage.put(file)
  // console.log(storage)
  //storage.put(file)
 
  //var storageref=bd.ref('libros/'+this.archivo.name)
 //let capturar=''
//et tarea=storageref.put(this.archivo)
//tarea.on('state_changed',(snapshopt)=>{
//console.log(snapshopt)
//},(error)=>{
//console.log(error)
//},()=>{
  //tarea.snapshot.ref.getDownloadURL().then(function(downloadUrl){
 
//  })
  
 


   
   let capturar=bd.ref('libros')
   console.log(capturar)
//})

if(e.target.files[0]){
        
          let file = e.target.files[0];
    

    this.archivo=e.target.files[0]
         // var storageRef = bd.ref('libros/'+ Math.random() + '_'  + file.name);
    var storageRef = bd.ref('libros/'+file.name);
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress)
          this.valor=progress
          }, (error) => {

            console.log(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
           console.log(downloadURL)
            console.log(this.enlace)
            this.imagen=downloadURL
            });
          });
      }

      return false 



  },

onSubmit(evt) {
        evt.preventDefault()
  //  area.set(this.Area.nombre)
    //  this.Area.nombre=''
 // console.log()

 console.log(this.selected)
  
 let {nombre,autor,cantidad,año}=this.Libro
 
  libroCollection.add({
    nombre: nombre,
    autor:autor,
    cantidad:cantidad,
    año:año,
    categoria:this.selected,
    area:this.selectedarea,
    editorial:this.selectededitorial,
    enlace:this.enlace,
    imagen:this.imagen
   
})
.then(function() {
    console.log("Document successfully written!");
      
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
  
 //this.Libro=''
 //this.Area=''
 //this.Categoria=''
nombre=''
autor=''
cantidad=''
año=''
this.archivo.name=''
 
 
this.Area.nombrearea=''
this.Categoria.nombrecategoria=''
this.Editorial.nombreeditorial=''
 

 
      },
onReset(evt) {
        evt.preventDefault()
        // Reset our form values
       
       // this.persona.nombre = ''
       
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      
Eliminar(todo){
 libroCollection.doc(todo.id).delete()
},

 
 
  Enviar(valor){
 
 // Create a reference to the file we want to download
 //var storageRef = bd.ref("libros/"+valor);
 var storageref=bd.ref('libros/'+valor)
storageref.getDownloadURL().then((url)=> {
   console.log(url)
   
});
// Create a reference from a Google Cloud Storage URI
 
  }
  


},
     
 
 
      
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
