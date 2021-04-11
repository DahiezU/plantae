<template>

  <MglMap :accessToken="accessToken" :mapStyle="mapStyle"/>

</template>

<script>

import Mapbox from "mapbox-gl";
import  {MglMap}  from "vue-mapbox";


export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoic2ltb25idXJkeSIsImEiOiJja25icnI3ajQxdTlxMm9vNmxsODE3dTRtIn0.YBKzKxPtJaxZVNH0je-Quw", // your access token. Needed if you using Mapbox maps
      mapStyle:"mapbox://styles/simonburdy/cknd782me078k17o3kqf63teg" // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

