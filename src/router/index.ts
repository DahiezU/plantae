import { createRouter, createWebHashHistory } from 'vue-router';
import PanneauHeader from '../components/PanneauHeader.vue';
import Profil from '../components/user/Profil.vue';
import Presentation from '../components/home/Presentation.vue';
import Map from '../components/marketMap/Map.vue';
import itemsMarket from '../components/myMarket/itemsMarket.vue';
import itemChoose from '../components/myMarket/itemChoose.vue';


const routes = [
  {
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
    path: '/myMarket/itemsMarket',
    component: itemsMarket,
  },
  {
    path: '/myMarket/itemsMarket/itemChoose',
    name: 'itemChoose',
    component: itemChoose,
    props: true
  }
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;