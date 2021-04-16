<template>
  
    <PanneauHeader/>
    <router-view/>
  
      
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PanneauHeader from './components/PanneauHeader.vue'
import Profil from './components/user/Profil.vue'
import Presentation from './components/home/Presentation.vue';
//import Map from './components/marketMap/Map.vue';
import itemsMarket from './components/myMarket/itemsMarket.vue';
import axios from 'axios';


export default defineComponent({
    name: 'App',
    components :{
      PanneauHeader,
      Profil,
      Presentation,
      itemsMarket
    }
    

  })
  

  
  

</script>

