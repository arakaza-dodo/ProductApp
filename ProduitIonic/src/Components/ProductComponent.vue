<template>
  <ion-page>
    <ion-list>
        <ion-list-header :translucent="true">
            <ion-toolbar color="danger">
            <ion-button @click="showvente">Show</ion-button>
               <ion-item>
                 <ion-title>Produit</ion-title>
                  <ion-title>PVU</ion-title>
                </ion-item>
            </ion-toolbar>
           
        </ion-list-header>
        <ion-item>
            <ion-label>{{ test }}</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Isukari</ion-label>
            <ion-label>3300FR</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>umuceri</ion-label>
            <ion-label>3900fr</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Ibiharage</ion-label>
            <ion-label>3000fr</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Farine</ion-label>
            <ion-label>4000fr</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>umukate</ion-label>
            <ion-label>1000fr</ion-label>
        </ion-item>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end"  @click="AddProduit"> 
        <ion-fab-button color="danger">  
        <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
  
      </ion-fab >
     </ion-list>
    </ion-page>
</template>

<script >
import { IonPage, IonItem, IonLabel, IonList, IonListHeader, modalController } from '@ionic/vue';
import { add } from 'ionicons/icons';
import AjouterProduit from './AjouterProduit.vue';



export default {
    components:
    {
        IonItem,
        IonLabel,
        IonList,
        IonListHeader,
        IonPage
    },
    data() {
        return {
            test:'',
            add,
        };
           
    },
    methods: {
    async AddProduit () {
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
   }
}
</script>