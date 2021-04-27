<template>
  

<Splitter style="height: 700px">
	<SplitterPanel :size="80" :minSize="50">
		<div id="map" />
	</SplitterPanel>
	<SplitterPanel :size="20" :minSize="10">
    <label >Nos localisations : </label>
		<Listbox v-model="selectedCity" :options="descriptionMarker" optionLabel="name" />
          
	</SplitterPanel>
</Splitter>



	

</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
import {  ref } from "vue";
import geojson from "./geojson.json"
const descriptionMarker = [];
export default {
  
  data() {return  {
    selectedCity: null,
		cities: [
			{name: 'New York'},
			{name: 'Rome', },
			{name: 'London'},
			{name: 'Istanbul'},
			{name: 'Paris'}
		],
    titreMarker: '',
    longitudeMarker: 0,
    lattitudeMarker: 0,
    descriptionMarker,
    
    
    } 
  },
  setup() {
    
    const title = ref("Popup Title");
    onMounted(() => {
      // public accestoken 
      mapboxgl.accessToken = "pk.eyJ1Ijoic2ltb25idXJkeSIsImEiOiJja25icnI3ajQxdTlxMm9vNmxsODE3dTRtIn0.YBKzKxPtJaxZVNH0je-Quw";
    

      // Creation de la map 
      const map = new mapboxgl.Map({
        container: "map",
        // Differents style des maps 
        //style: "mapbox://styles/simonburdy/cknd782me078k17o3kqf63teg",
        //style: "mapbox://styles/mapbox/streets-v11",
        //style: "mapbox://styles/mapbox/outdoors-v11",
        //style: "mapbox://styles/mapbox/light-v10",
        //style: "mapbox://styles/mapbox/satellite-v9",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        center: [2.619028636944507, 47.2472708711553],
        zoom: 5,
      });

      // Creation de la géolocalisation 
      var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true},
          trackUserLocation: true
        });
        

        //Creation de l'echelle se trouvant au bord infèrieure gauche 
        var scale = new mapboxgl.ScaleControl({
                maxWidth: 100,
                unit: 'imperial'      
        });
        map.addControl(scale);
        scale.setUnit('metric');

        // Ajouter des controles 
        map.addControl(geolocate);
        map.on('load', function() {
          geolocate.trigger();
        });



      // Ajout des markers se trouvant sur la map
      geojson.features.forEach(function (marker) {

            let adresse = {
              name: marker.properties.description
            }
            if(descriptionMarker.length < geojson.features.length){
              descriptionMarker.push(adresse)
            }
            
            var el = document.createElement('div');
            el.className = 'marker';
            
            // make a marker for each feature and add it to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            '<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description +'</p>')
                )
                .addTo(map)
      
      });


    
    });
    return { title };
  },
};
</script>

<style>
#map {
  height: 100%;
  width: 100%;
  
}

.marker {
  background-image: url('./icons/grocery.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
max-width: 200px;
}
.mapboxgl-popup-content {
text-align: center;
font-family: 'Open Sans', sans-serif;
}

.p-inputtext {
        display: block;
        margin-bottom: .5rem;
    }

</style>
