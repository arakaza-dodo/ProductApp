<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button color="danger" @click="retour">Retour</ion-button>
            </ion-buttons>
            <ion-title align="center">{{ titleProps }}</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="confirm">Confirm</ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item>
            <ion-input label-placement="stacked" label="Quantite vendu" v-model="Produit"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label-placement="stacked" label="Produit" v-model="vente" ></ion-input>
        </ion-item>
        <ion-item>
            <ion-input label-placement="stacked" label="umudandaza" v-model="acheter"></ion-input>
        </ion-item>
        <ion-button color="danger" expand="block" @click="Validerventer"> Valide</ion-button>
    </ion-content>
</template>
<script>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonContent, modalController } from '@ionic/vue';
export default {
    name: 'AjouterVente',
    props: ['titleProps'],

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
         Validerventer() {
            let data = {
                Produit: this.Produit,
                Vente: this.vente,
                achat: this.acheter,

            }
            return modalController.dismiss(data, 'addCongeEmited')
        }

    }
      
    }

</script>

<style scoped></style>
