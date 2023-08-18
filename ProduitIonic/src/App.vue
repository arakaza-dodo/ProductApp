<template>
  <ion-app>
    <ion-router-outlet v-if="connected" />
    <login-page v-else></login-page>
   
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonRouterOutlet,

} from '@ionic/vue';
import LoginPage from './views/LoginPage.vue';


export default {
  components: {
    IonApp,
    IonRouterOutlet,
    LoginPage,
 
  },
  data() {
    return {
      connected: false,
      access: null,
    };
  },
  mounted() {
    this.access = localStorage.getItem("access")
    if (this.access) {
      this.connected = true
    }
  }
}
</script>
