<template>
    <ion-page>
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
                <ion-input label-placement="stacked" label="Quantite vendu" v-model="quantite_vendu" clearInput></ion-input>
            </ion-item>
            <ion-item>
                <ion-select placeholder="Select a product" v-model="produit">
                    <ion-select-option v-for="produit in produits" :key="produit.id" :value="produit">{{ produit.nom }} - {{
                        produit.prix_de_vente_unitaire }}</ion-select-option>
                </ion-select>
            </ion-item>
            <!-- <ion-item>
            <ion-input label-placement="stacked" label="umudandaza" v-model="umudandaza" clearInput></ion-input>
        </ion-item> -->
            <ion-item>
                <ion-button color="danger" expand="block" @click="Validervente"> Valide</ion-button>
            </ion-item>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonHeader, IonToolbar, IonPage, IonButtons, IonButton, IonContent, IonItem, IonInput, IonTitle, IonSelect, IonSelectOption, modalController } from '@ionic/vue';
import axios from 'axios';
export default {
    name: 'AjouterVente',
    props: ['titleProps'],

    components: {
        IonHeader,
        IonToolbar,
        IonPage,
        IonButtons,
        IonButton,
        IonContent,
        IonItem,
        IonInput,
        IonTitle,
        IonSelect,
        IonSelectOption

    },
    data() {
        return {
            quantite_vendu: '',
            produit: '',
            prix_de_vente_total: null,
            produits: [],
            umudandaza: '',
        };

    },
    methods: {
        retour() {
            return modalController.dismiss(null, 'cancel')
        },
        confirm() {
            var dodo = 'Hello'
            return modalController.dismiss(dodo, 'confirm')
        },
        Validervente() {
            let vente = {
                quantite_vendu: this.quantite_vendu,
                prix_de_vente_total: this.quantite_vendu * this.produit.prix_de_vente_unitaire,
                produit: this.produit,
            }

            console.log(vente)

            let headers = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.state.accessToken
                }
            }
            console.log(headers)

            axios.post('http://127.0.0.1:8000/kudandaza/vente/', vente, headers)
                .then((response) => {
                    this.$store.state.ventes.push(response.data)
                })
        }
    },
    mounted() {
        axios.get("http://127.0.0.1:8000/kudandaza/produit/",).then((response) => {
            this.produits = response.data.results
        })

    }
}

</script>

<style scoped></style>
