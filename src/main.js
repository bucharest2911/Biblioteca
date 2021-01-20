
 
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue  from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import  Router from 'vue-router'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import validator from 'validator';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSwal from 'vue-swal'
 
 

 
Vue.use(VueSwal)
Vue.use(validator)
import { firestorePlugin } from 'vuefire'
import  {login} from './components/firebase'
 
import SimpleVueValidation from 'simple-vue-validator';
export const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
 
//import Config from './configurar'
//import {nameref} from './firebase'
//let app=  Firebase.initializeApp(Config);
//let db=app.database()
//let arearef=db.ref('Area')
 
 
  
Vue.use(VueSweetalert2);
 
  
Vue.use(Vuetify)
 


Vue.config.productionTip = false

 
 
Vue.use(Router)
 Vue.use(firestorePlugin)

 
 login.onAuthStateChanged(function(user) {
   console.log(user)
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

 
 
  
});

 