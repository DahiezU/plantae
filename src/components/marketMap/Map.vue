<template>
  

<Splitter style="height: 300px">
	<SplitterPanel>
		<div id="map" />
	</SplitterPanel>
	<SplitterPanel>
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
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/simonburdy/cknd782me078k17o3kqf63teg",
        center: [2.619028636944507, 47.2472708711553],
        zoom: 5,
      });
      map.on('load', function () {
        // Add an image to use as a custom marker
        map.loadImage(
            'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('custom-marker', image);
                // Add a GeoJSON source with 2 points
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
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
                                    'title': 'Magasin 1'
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
                                    'title': 'Magasin 2'
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
                                    'title': 'Magasin 3'
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
                                    'title': 'Magasin 4'
                                }
                            },
                        ]
                    }
                });

                // Add a symbol layer
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'custom-marker',
                        // get the title name from the source's "title" property
                        'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
            }
        );
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
  height: 100vh;
}
</style>
