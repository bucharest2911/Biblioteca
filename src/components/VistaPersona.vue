 <template>
 
   <div>
       <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
     
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" v-model="buscando"   placeholder="nombre"></b-form-input>
          
        </b-nav-form>

        

   
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
          
          </template>
           <a href="#" class="btn btn-info btn-lg" @click="Cerrar">
          <span class="glyphicon glyphicon-log-out" ></span> Cerrar Sesion
        </a>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
        <div class="container">
<div class="col-9 ">


   <div class="row">

 <div  class="col-4"  v-for="libro in filteredList" :key="libro['.key']">
  <b-card
    :title="libro.nombre"
    
    :img-src="libro.imagen"
    img-alt="Image"
    img-top
    :size=100
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    
  >
    <b-card-text>
   Categoria:{{libro.categoria}}
    </b-card-text>
  <b-card-text>
   Area:{{libro.area}}
    </b-card-text>
  <a :href="libro.enlace" >  <b-button  variant="primary">Leer</b-button></a>
  </b-card>
</div>


      </div>

</DIV>
    
 
 
</div>
       
       </div>
 
 
 
 
</template>
<script>

 import { libroCollection } from './firebase'
 import {login} from './firebase'
    
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

    
  name: 'Galeria',
 
 components:{
    
 },
 
  data(){

    
    return {
             show: true,

              buscando:'',
              buscandoarea:'',
              buscandocategoria:'',

      
            libros:[]
  
    }
 

     
  },


    firestore(){

      return {
  libros: libroCollection
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

      
Eliminar(){
 
},
    Cerrar(){

      console.log('hola')
 login.signOut().then(()=>this.$router.replace('Login')  )

    },
Buscar(){
    console.log(this.buscando)
      var docRef=libroCollection.where('nombre','==',this.buscando)
  docRef.get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        
                
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);

    });
}
      
  },
   computed: {
    filteredList() {
      return this.libros.filter(post => {
        return post.nombre.toLowerCase().includes(this.buscando.toLowerCase())
      })
    },
     
    
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 
 
 
 
 
 
 
</style>
