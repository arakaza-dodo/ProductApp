<template>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Menu Content</ion-title>
            </ion-toolbar>
             <ion-list>
                <ion-title>
                    <ion-label>home</ion-label>
                    </ion-title>
                    <ion-title>
                        <ion-label>about</ion-label>
                    </ion-title>
                    <ion-title>
                        <ion-label>settings</ion-label>
                    </ion-title>
                </ion-list>
        </ion-header>
        <!-- <ion-content class="ion-padding">This is the menu content.</ion-content> -->
       
  
    </ion-menu>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                
                
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
    </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';


export default {
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
    },
}
</script>