 <template>
  
 


<div class="container login-container" >
 
                       
            <div class="row" align="center">

     


                <div class="col-md-6 login-form-1"  >

            
                    <h3 id="texto">Iniciar Sesion</h3>


                         <v-btn class="ma-2" outlined color="indigo"  @click="CambiarEstudiante">Estudiante</v-btn>
  <v-btn class="ma-2" outlined color="indigo" @click="CambiarAdmin" >Administrador</v-btn>
        <div v-if="estudiante">
  <h3>Administrador</h3>
 <form @submit="Login">
                        <div class="form-group">
                            <input type="text" id="correadmin" class="form-control" placeholder=" correo " value="" v-model="email" />
                        </div>
                        <div class="form-group">
                            <input type="password" id="contraadmin"  class="form-control" placeholder="  contraseña" value=""  v-model="contraseña"   />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Entrar" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd"></a>
                        </div>


 
                    </form>



        </div>


      <div v-else>
  <h3   id=texto2 >Estudiante</h3>
 <form @submit="LoginEstudiante"   id="es"  class="input:focus"     >
                        <div class="form-group" color="red">
                            <input  id="correoest"  autofocus type="text" class="form-control" placeholder="email estudiante *" value="" v-model="estudianteemail"  />
                        </div>
                        <div class="form-group">
                            <input type="password" id="contraest"  autofocus class="form-control" placeholder="contraseña estudiante*" value="" v-model="contraseñaestudiante"    />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Entrar" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd"></a>
                        </div>


 
                    </form>



        </div>





                    
                </div>








                
               
            </div>
   
        </div>

 


 

 


</template>
<script>


  
import {login} from './firebase'
import { personaCollection } from './firebase';
 
console.log(login)
export default {

    
  name: 'Login',
  
  props: {

    
    autentico:Boolean,

     
  },
  data(){
    return {
         email:'',
         contraseña:'',
         crearemail:'',
         crearcontraseña:'',
         estudiante:true,
         estudianteemail:'',
         contraseñaestudiante:''
         
    }
  },

  
   methods:{
       
       registrar(evt){
           
           evt.preventDefault()
 login.createUserWithEmailAndPassword(this.crearemail,this.crearcontraseña).then(user=>{
      this.$swal('Usuario creado con exito!','','success')
      this.crearemail=''
      this.crearcontraseña=''
console.log(user)
 }).catch(err=>{
    console.log(err)

    if(err.code=='auth/invalid-email'){
           this.$swal('eso es todo menos un correo','','error')
    }else{
        if(err.code=='auth/invalid-email'){
           this.$swal('eso es todo menos un correo','','error')
    }else{
        if(err.code=='auth/weak-password'){
            this.$swal('la contraseña debe tener por lo menos 6 caracteres','','error')
        }
    }
    }
 })
    },

    Mostrar(){
        console.log(this.estudianteemail)
        var docRef=personaCollection.where('email','==',this.estudianteemail)
  docRef.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
     this.$router.push({ path: '/' })
this.$router.push({ name: 'Libro' })

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    },


    CambiarEstudiante(){
          
this.estudiante=false
 document.getElementById("correoadmin").focus();
  
  // document.getElementById('contraest').focus()
  
    },
    CambiarAdmin(){
        
        this.estudiante=true
    document.getElementById('correoest').focus()
   
    },

        Login(evt){
           evt.preventDefault()
      
 login.signInWithEmailAndPassword(this.email,this.contraseña).then(user=>{
     // this.$swal('Usuario creado con exito!','','success')
     
 
 this.$router.push({ path: '/' })
this.$router.push({ name: 'Navegador' })

console.log(user)
 }).catch(err=>{
    console.log(err)
      if(err.code=="auth/invalid-email"){
            this.$swal('error correo invalido','','error')
        } else{
            if(err.code=='auth/wrong-password'){
                this.$swal(' correo o usuario invalido','','error')
            } 
        }
 })
    },

    LoginEstudiante(evt){
            evt.preventDefault()
      
 login.signInWithEmailAndPassword(this.estudianteemail,this.contraseñaestudiante).then(user=>{
     // this.$swal('Usuario creado con exito!','','success')
     //console.log(libroCollection)
 
 


      console.log(this.estudianteemail)
        var docRef=personaCollection.where('email','==',this.estudianteemail)
  docRef.get()
    .then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
     this.$router.push({ path: '/' })
this.$router.push({ name: 'Galeria' })
 
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
       

    });




// this.$router.push({ path: '/' })
//this.$router.push({ name: 'Libro' })
//libroCollection.doc(user.user.email)
console.log(user)
 }).catch(err=>{
     
    console.log(err.code)
      if(err.code=="auth/invalid-email"){
            this.$swal('error correo invalido','','error')
        } else{
            if(err.code=='auth/wrong-password'){
                this.$swal(' correo o usuario invalido','','error')
            } 
        }
 })
    },
   


   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




input:focus {
  color: red;
}
 
 .login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-form-1{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #333;
}
.login-form-2{
    padding: 5%;
    background: #0062cc;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #0062cc;
}
.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
.login-form-2 .ForgetPwd{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}
.login-form-1 .ForgetPwd{
    color: #0062cc;
    font-weight: 600;
    text-decoration: none;
}

 
 
 
 
 
 
</style>
