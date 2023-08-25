<template>
  <ion-app>
    <ion-router-outlet v-if="$store.state.tokens != null"></ion-router-outlet>
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

    };
  },
  mounted() {
    this.$store.state.tokens = JSON.parse(localStorage.getItem("tokens"))
  }
}

</script>
