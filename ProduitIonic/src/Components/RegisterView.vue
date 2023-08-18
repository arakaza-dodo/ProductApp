<template>
    <ion-content>
        <div class="flex-center">
            <ion-card>
                <ion-card-header>
                    <ion-buttons>
                       <ion-button color="danger" @click="retour">Retour</ion-button>
                    </ion-buttons>
                </ion-card-header>

                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input placeholder="Enter your email adress" ></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Password</ion-label>
                        <ion-input type="password" placeholder="Enter your password" @Ionchange="password=$event.target.value" clearInput></ion-input>
                    </ion-item>
                       <ion-item>
                            <ion-label position="floating"> Comfirm Password</ion-label>
                            <ion-input type="password" placeholder="comfirm your password" @Ionchange="password2=$event.target.value" clearInput></ion-input>
                          
                        </ion-item>
                    <ion-button color="danger" size="full" @click="$emit('loginEmited')">Submit</ion-button>
                </ion-card-content>
            </ion-card>

        </div>
    </ion-content>
</template>
<script>
import { modalController } from '@ionic/vue'

export default {
    data() {
    
    },
    methods: {
      retour() {
            return modalController.dismiss(null, 'cancel')
        },
   }
}
</script>

<style scoped>
ion-button[color="dark"] {
    text-transform: initial;
}

ion-content {
    --background: var(--ion-color-primary-shade #3171e0);
}
</style>