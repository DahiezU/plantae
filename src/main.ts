import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import store from './store' // import du store 


import axios from 'axios'    // import du axios
import VueAxios from 'vue-axios' 



// Import des modules de primeVue 

import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'


import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import Button from 'primevue/button'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Divider from 'primevue/divider';
import Listbox from 'primevue/listbox';
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
import InputNumber from 'primevue/inputnumber';
import Rating from 'primevue/rating';



// creation de l'APP 

const app = createApp(App);


app.use(PrimeVue);
app.use(VueAxios , axios);


app.component('TabMenu',TabMenu);
app.component('Card',Card);
app.component('Button',Button);
app.component('Splitter',Splitter);
app.component('SplitterPanel',SplitterPanel);
app.component('Divider',Divider);
app.component('Listbox',Listbox);
app.component('InputText',InputText);
app.component('InputNumber',InputNumber);
app.component('AutoComplete',AutoComplete);
app.component('Rating',Rating);



app.use(router).use(store).mount('#app')




