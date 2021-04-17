<template>
  

<Splitter style="height: 700px">
	<SplitterPanel :size="80" :minSize="50">
		<div id="map" />
	</SplitterPanel>
	<SplitterPanel :size="20" :minSize="10">
		<Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
	</SplitterPanel>
</Splitter>



	

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
      mapboxgl.accessToken = "pk.eyJ1Ijoic2ltb25idXJkeSIsImEiOiJja25icnI3ajQxdTlxMm9vNmxsODE3dTRtIn0.YBKzKxPtJaxZVNH0je-Quw";
    
        var geojson = {
                    'type': 'FeatureCollection',
                        'features': [
                            {
                                // feature for Mapbox DC
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                                        3.0408703999999998,
                                        50.62656
                                    ]
                                },
                                'properties': {
                                    'title': 'Magasin 1',
                                    'description': 'Meilleur magasin du monde'
                                }
                            },
                            {
                                // feature for Mapbox SF
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [4.00964655231681, 49.70918562722347]
                                },
                                'properties': {
                                    'title': 'Magasin 2',
                                    'description': 'Meilleur magasin du monde'
                                }
                            },
                             {
                                // feature for Mapbox DC
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                                        1.7733223899747808,
                                        46.09373863583898
                                    ]
                                },
                                'properties': {
                                    'title': 'Magasin 3',
                                    'description': 'Meilleur magasin du monde'
                                }
                            },
                             {
                                // feature for Mapbox DC
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                                        4.028604327159604,
                                        46.3404606307355
                                    ]
                                },
                                'properties': {
                                    'title': 'Magasin 4',
                                    'description': 'Meilleur magasin du monde'
                                }
                            },
                        ]
                    }
      
      
      
      
      
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/simonburdy/cknd782me078k17o3kqf63teg",
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
  data() {return  {
    selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
  } }
};
</script>

<style>
#map {
  height: 100%;
  width: 100%;
  
}

.marker {
  background-image: url('../../public/icons/grocery.png');
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
</style>
