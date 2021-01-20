 <template>
  

<div class="container login-container">
 
                       
            <div class="row">

     


                <div class="col-md-6 login-form-1" >

            
                    <h3>Iniciar Sesion</h3>


                         <v-btn class="ma-2" outlined color="indigo"  @click="CambiarEstudiante">Estudiante</v-btn>
  <v-btn class="ma-2" outlined color="indigo" @click="CambiarAdmin" >Administrador</v-btn>
        <div v-if="estudiante">
  <h3>Administrador</h3>
 <form @submit="Login">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" v-model="email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value=""  v-model="contraseña"   />
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
  <h3>Estudiante</h3>
 <form @submit="Login">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="email estudiante *" value=""  />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="contraseña estudiante*" value=""     />
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








                
                <div class="col-md-6 login-form-2">
                    <h3>Crear Cuenta</h3>
                    <form @submit="registrar"    >
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="  Email " value=""  v-model="crearemail"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder=" Contraseña " value=""  v-model="crearcontraseña"/>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Crear Cuenta" />
                        </div>
                        <div class="form-group">



                            <a href="#" class="ForgetPwd" value="Login">Olvidaste la contraseña?</a>
                        </div>
                    </form>
                </div>
            </div>
        
        </div>

 


 




</template>
<script>


  
import {login} from './firebase'
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
 })
    },


    CambiarEstudiante(){
this.estudiante=false
console.log(this.estudiante)
    },
    CambiarAdmin(){
        this.estudiante=true
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
 })
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
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
