<template>
    <ion-page>
        <ion-list>
            <ion-list-header :translucent="true">
                <ion-toolbar color="danger">
                    <ion-button @click="showproduit">Show</ion-button>
                    <ion-item>
                        <ion-label>ID</ion-label>
                        <ion-label>Nom</ion-label>
                        <ion-label>PVU</ion-label>
                    </ion-item>
                </ion-toolbar>
            </ion-list-header>
            <ion-item>
                <ion-label>{{ test }}</ion-label>
            </ion-item>
            <div class="list" v-for="produit in $store.state.produits" :key="produit.id">
                <ion-item>
                    <ion-label>{{ produit.id }}</ion-label>
                    <ion-label>{{ produit.nom }}</ion-label>
                    <ion-label>{{ produit.prix_de_vente_unitaire }}</ion-label>
                </ion-item>
            </div>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end" @click="AddProduit">
                <ion-fab-button color="danger">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-list>
    </ion-page>
</template>

<script >
import { IonPage, IonItem, IonLabel, IonList, IonListHeader, IonFabButton, IonButton, IonIcon, IonFab, IonToolbar, modalController } from '@ionic/vue';
import { add } from 'ionicons/icons';
import AjouterProduit from './AjouterProduit.vue';
import axios from 'axios';



export default {
    components:
    {
        IonItem,
        IonLabel,
        IonList,
        IonListHeader,
        IonPage,
        IonFabButton,
        IonIcon,
        IonFab,
        IonButton,
        IonToolbar
    },
    data() {
        return {
            test: '',
            add,
            product: "",
            i: null,


        };

    },
    methods: {
        async AddProduit() {
            const modal = await modalController.create({
                component: AjouterProduit,
                componentProps: {
                    titleProps: "Ajouter Produit"
                }
            });
            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'confirm') {
                this.test = data
            }
        },
        showproduit() {
            axios.get("http://127.0.0.1:8000/kudandaza/produit/").then((response) => {
                // this.product = response.data.results 

                for (this.i = 0; this.i < response.data.results.length; this.i++) {
                    this.$store.state.produits[this.i] = response.data.results[this.i]

                }
                console.log(this.$store.state.produits);
            })
            //console.log(this.$store.state.produits);
        },


    }
}
</script>