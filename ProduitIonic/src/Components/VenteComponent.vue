<template>
    <ion-page>
        <ion-list>
            <ion-list-header :translucent="true">
                <ion-toolbar color="danger">
                    <ion-button @click="showvente">Show</ion-button>
                    <ion-item>
                        <ion-label>Id</ion-label>
                        <ion-label>Q vendu</ion-label>
                        <ion-label>PVT</ion-label>
                        <ion-label>Produit</ion-label>
                        <ion-label>Umudandaza</ion-label>
                    </ion-item>
                </ion-toolbar>
            </ion-list-header>
            <ion-item>
                <ion-label>{{ test }}</ion-label>
            </ion-item>
            <div class="list" v-for="produit in $store.state.ventes" :key="produit.id">
                <ion-item>
                    <ion-label>{{ produit.id }}</ion-label>
                    <ion-label>{{ produit.produit }}</ion-label>
                    <ion-label>{{ produit.quantite_vendue }}</ion-label>
                    <ion-label>{{ produit.prix_de_vente_total }}</ion-label>
                    <ion-label>{{ produit.umudandaza }}</ion-label>
                </ion-item>
            </div>
        </ion-list>

        <ion-fab slot="fixed" vertical="bottom" horizontal="end" @click="AddProduit">
            <ion-fab-button color="danger">
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </ion-page>
</template>

<script >
import { IonPage, IonItem, IonLabel, IonList, IonListHeader, modalController, IonButton, IonFabButton, IonIcon, IonFab, IonToolbar } from '@ionic/vue';
import { add } from 'ionicons/icons';
import AjouterVente from './AjouterVente.vue';
import axios from 'axios';



export default {
    components:
    {
        IonItem,
        IonLabel,
        IonList,
        IonListHeader,
        IonPage,
        IonButton,
        IonFabButton,
        IonIcon,
        IonFab,
        IonToolbar

    },
    data() {
        return {
            test: '',
            add,
            sales: ""
        };

    },
    methods: {
        async AddProduit() {
            const modal = await modalController.create({
                component: AjouterVente,
                componentProps: {
                    titleProps: "Ajouter Vente"
                }
            });
            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'confirm') {
                this.test = data
            }
        },
        showvente() {
            axios.get("http://127.0.0.1:8000/kudandaza/vente/").then((response) => {
                //   this.sales = response.data.results

                for (this.i = 0; this.i < response.data.results.length; this.i++) {
                    this.$store.state.ventes[this.i] = response.data.results[this.i]

                }
                console.log(this.$store.state.ventes);
            })
        },

    }
}
</script>