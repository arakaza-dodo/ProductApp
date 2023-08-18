<template>
    <ion-content>
        <div class="flex-center">
          <ion-card>
              <ion-card-header>
                <ion-card-title color="danger">Welcome to Login Form</ion-card-title>
                <ion-card-subtitle ></ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
              <form action="">
                <ion-item>
                
          <ion-input v-model="email" label="Email"></ion-input>
                    </ion-item>
                    <ion-item>
        
                    <ion-input label="Password" type="password" placeholder="comfirm your password" v-model="password" clearInput></ion-input>
                    </ion-item>
                    <ion-button color="danger" size="full" @click="connect">Login</ion-button>
              </form>
            <ion-button  color="danger" size="full" @click="register">register</ion-button>
          </ion-card-content>
      </ion-card>
      
   </div>
  </ion-content>
</template>
<script>
import {
   modalController, IonCard, IonContent, IonButton, IonCardContent, IonItem, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/vue'
import RegisterView from '../Components/RegisterView.vue'
import axios from 'axios';

export default {
  components: { IonCard, IonContent, IonButton, IonCardContent, IonItem, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle },
  data()
  {
    return {
      email: '',
      password:''
    }
  },
  methods:{
    async register() {
      const modal = await modalController.create({
        component: RegisterView,
        componentProps: {
          titleProps: "Show Product"
        }
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === 'confirm') {
        this.products = data
      }
    },
    connect() {
      let user = {
        "username": this.email,
        "password": this.password
      }

      console.log(user)
      axios.post("http://127.0.0.1:8000/login/", user)
        .then((response) => {
          localStorage.setItem("access", JSON.stringify(response.data.access))
        console.log(response.data.access)
      })
    }
  }
}

  </script>

  <style scoped>
  ion-button[color="dark"] {
  text-transform: initial;
  }
  ion-content{
      --background: var(--ion-color-primary-shade #3171e0);
  }
  </style>