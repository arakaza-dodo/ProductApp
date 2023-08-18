<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar color="danger"  slot="bottom">
                <ion-tab-button tab="home" href="/home">
                        <ion-icon :icon="home"></ion-icon>
                        <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="produit" href="/produit">
                    <ion-icon :icon="basket" />
                    <ion-label>produit</ion-label>
                 </ion-tab-button>
                <ion-tab-button tab="vente" href="/vente">
                    <ion-icon :icon="cart" > </ion-icon>
                    <ion-label>Vente</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { playCircle,basket,cart,home} from 'ionicons/icons';

export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
        return {
            playCircle,
            home,
            basket,
           cart
           
        };
    },
};
</script>