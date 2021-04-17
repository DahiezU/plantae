import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'




import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import Button from 'primevue/button'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Divider from 'primevue/divider';
import Listbox from 'primevue/listbox';
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';


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
app.component('AutoComplete',AutoComplete);


app.use(router).mount('#app')

