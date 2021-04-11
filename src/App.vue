<template>
  
    <PanneauHeader/>
    <router-view/>
  
      
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PanneauHeader from './components/PanneauHeader.vue'
import Profil from './components/user/Profil.vue'
import Presentation from './components/home/Presentation.vue';
import Map from './components/marketMap/Map.vue';
import itemsMarket from './components/myMarket/itemsMarket.vue';
import axios from 'axios';


export default defineComponent({
    name: 'App',
    components :{
      PanneauHeader,
      Profil,
      Presentation,
      Map,
<<<<<<< HEAD
      itemsMarket
=======
      
>>>>>>> 8f58e932466ec88c42f979523a1acf34bc3746fc
    }
    

  })
  

  
  

</script>

