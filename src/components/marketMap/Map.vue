<template>
  
  <div id="map" />
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
import { createApp, defineComponent, ref, nextTick } from "vue";

export default {
  setup() {
    const title = ref("Unchanged Popup Title");
    onMounted(() => {
      mapboxgl.accessToken = "pk.eyJ1Ijoic2ltb25idXJkeSIsImEiOiJja25icnMwYXMxdWt1MnJwOWRucHpwd2xzIn0.yG-p5avGJ5RnF8DIEL_nDw";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
        center: [2.619028636944507, 47.2472708711553],
        zoom: 5,
      });
      map.on("load", () => {
        // Here we want to load a layer
        map.addSource("france", {
          type: "geojson",
          data:
            {
  "geometry": {
    "coordinates": [
     
      
    ],
    "type": "Polygon"
  },
  "type": "Feature",
  "properties": {
    "name": "France Hexagone"
  }
}
        });
        map.addLayer({
          id: "france-fill",
          type: "fill",
          source: "france",
          paint: {
            "fill-color": "red",
          },
        });
        // Here we want to setup the dropdown
        map.on("click", "usa-fill", function (e) {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<div id="popup-content"></div>')
            .addTo(map);
          const MyNewPopup = defineComponent({
           
            setup() {
              return { title };
            },
          });
         
        });
      });
    });
    return { title };
  },
};
</script>

<style>
#map {
  height: 100vh;
}
</style>