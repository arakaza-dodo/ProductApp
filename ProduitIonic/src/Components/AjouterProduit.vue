<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button  color="danger" @click="retour">Retour</ion-button>
            </ion-buttons>
            <ion-title align="center">{{titleProps}}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="confirm">Confirm</ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content  class="">
          <ion-item>
            <ion-input label-placement="stacked" label="Nom" v-model="Produit" placeholder=""></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="stacked" label="Prix de vente Unitaire" v-model="vente" placeholder=""></ion-input>
          </ion-item>
          <ion-button expand="block"  color="danger" @click="AjouterProduit">Ajouter</ion-button>
    </ion-content>
</template>
<script>
import { IonHeader, IonToolbar, IonButtons, IonButton,  IonContent, modalController } from '@ionic/vue';
export default {
    name: 'AjouterProduit',
    props:['titleProps'],
    
    components: {
        IonHeader,
        IonToolbar,
        IonButtons,
        IonButton,
        IonContent,
        
    },
    methods: {
        retour() {
             return modalController.dismiss(null, 'cancel')
        },
        confirm() {
            var dodo = 'Hello'
             return modalController.dismiss(dodo, 'confirm')
        },
        AjouterProduit() {
            let data = {
                Produit: this.Produit,
                Vente: this.vente,
              
            }
            return modalController.dismiss(data, 'addCongeEmited')
        }
        
    }
}
</script>

<style scoped></style>
