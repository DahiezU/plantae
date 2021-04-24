<template>
  
    <PanneauHeader/>
    <router-view/>
    <PanneauFooter/>
      
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PanneauHeader from './components/headerAndFooter/panneauHeader.vue'
import PanneauFooter from './components/headerAndFooter/panneauFooter.vue'
import Profil from './components/user/Profil.vue'
import Presentation from './components/home/Presentation.vue';

import itemsMarket from './components/myMarket/itemsMarket.vue';



export default defineComponent({
    name: 'App',
    components :{
      PanneauHeader,
      PanneauFooter,
      Profil,
      Presentation,
      itemsMarket,
      //login
    }
    

  })
  

  
  

</script>

