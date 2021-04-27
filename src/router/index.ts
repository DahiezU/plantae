import { createRouter, createWebHashHistory } from 'vue-router';
//import PanneauHeader from '../components/panneauHeader.vue';
import Profil from '../components/user/Profil.vue';
import Presentation from '../components/home/Presentation.vue';
import Map from '../components/marketMap/Map.vue';
import itemsMarket from '../components/myMarket/itemsMarket.vue';
import itemClicked from '../components/myMarket/itemClicked.vue';


const routes = [
  {
    name: "acceuil",
    path: '/',
    component: Presentation,
  },
  {
    path: '/user/profil',
    component: Profil,
  },
  
  {
    path: '/home/presentation',
    component: Presentation,
  },

  {
    path: '/marketmap/map',
    component: Map,
  },
  {
    name:"itemsMarket",
    path: '/myMarket/itemsMarket',
    component: itemsMarket,
  },
  {
    path: '/myMarket/itemsMarket/itemcClicked',
    name: 'itemClicked',
    component: itemClicked,
    props: true
  }
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;