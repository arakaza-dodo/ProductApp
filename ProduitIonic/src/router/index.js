import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterView from '../Components/RegisterView.vue';
import MenuComponent from '../Components/MenuComponent.vue';
import MenuView from '../Components/MenuView.vue';
import ProductComponent from '../Components/ProductComponent.vue';
import VenteComponent from '../Components/VenteComponent.vue';



const routes = [
  
  {
    path: '',
    redirect: '/home'
  }, 
  {
    path: '/register',
    name: 'register',
    component:RegisterView
  },
    {
    path: '/menu',
    name: 'menu',
    component:MenuView
  },
  {
    path: '/',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'produit',
        component: ProductComponent,
      },
      {
        path: 'vente',
        component: VenteComponent,
      },
      // /* {
      //   path: 'vente',
      //   component: () => import('./views/LibraryPage.vue'),
      // },
      // {
      //   path: 'search',
      //   component: () => import('./views/SearchPage.vue'),
      // }, */
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
