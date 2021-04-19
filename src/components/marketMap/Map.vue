<template>
  

<Splitter style="height: 700px">
	<SplitterPanel :size="80" :minSize="50">
		<div id="map" />
	</SplitterPanel>
	<SplitterPanel :size="20" :minSize="10">
		<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
        <div>
            <div>
                <span class="p-float-label">
                    <InputText id="titre" type="text" v-model="titreMarker" />
                    <label for="titre">Titre</label>
                </span>
            </div>
            <div>
                <span class="p-float-label">
                <InputText id="description" type="text" v-model="descriptionMarker" />
                <label for="description">Description</label>
            </span>
            </div>
            <div>          
                <label for="longitude">Longitude</label>
                <InputNumber id="logitude" v-model="logitudeMarker" mode="decimal" :minFractionDigits="0" :maxFractionDigits="20" />
            </div>
            <div>          
                <label for="lattitude">Lattitude</label>
                <InputNumber id="lattitude" v-model="lattitudeMarker" mode="decimal" :minFractionDigits="0" :maxFractionDigits="20" />
            </div>
            <Button label="Submit" @click="addMarker()"/>
        </div>
        
        
        
	</SplitterPanel>
</Splitter>



	

</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
import { createApp, defineComponent, ref, nextTick } from "vue";
import geojson from "./geojson.json"
/*import * as fs from 'fs-web';
import { writeFile } from 'fs-web';*/
export default {
  data() {return  {
    selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		],
    titreMarker: '',
    descriptionMarker: '',
    longitudeMarker: 0,
    lattitudeMarker: 0,
    
    
    } 
  },
  setup() {
    const title = ref("Unchanged Popup Title");
    onMounted(() => {
      mapboxgl.accessToken = "pk.eyJ1Ijoic2ltb25idXJkeSIsImEiOiJja25icnI3ajQxdTlxMm9vNmxsODE3dTRtIn0.YBKzKxPtJaxZVNH0je-Quw";
    

      
      const map = new mapboxgl.Map({
        container: "map",
        //style: "mapbox://styles/simonburdy/cknd782me078k17o3kqf63teg",
        //style: "mapbox://styles/mapbox/streets-v11",
        //style: "mapbox://styles/mapbox/outdoors-v11",
        //style: "mapbox://styles/mapbox/light-v10",
        //style: "mapbox://styles/mapbox/satellite-v9",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        center: [2.619028636944507, 47.2472708711553],
        zoom: 5,
      });

      geojson.features.forEach(function (marker) {
            // create a HTML element for each feature
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
  methods: {
      addMarker(){
            
            /*this.geojson.features.push({
                    "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                this.lattitudeMarker,
                                this.lattitudeMarker
                            ]
                        },
                        "properties": {
                            "title": this.titreMarker,
                            "description": this.descriptionMarker
                        }
                        });*/
                      //console.log(geojson);*/
            
          /*let a = {
               
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        12.028604327159604,
                        30.3404606307355
                    ]
                },
                "properties": {
                    "title": "Magasin 5",
                    "description": "Meilleur magasin du monde"
                }
            }
          a = JSON.stringify(a);
          fs.writeFile("geojson.json", a)
           console.log(fs.readString("geojson.json"));*/
          
          
          
    },
  }
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
