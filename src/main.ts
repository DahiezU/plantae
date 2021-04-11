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






const app = createApp(App);


app.use(PrimeVue);
app.use(VueAxios , axios);

app.component('TabMenu',TabMenu);


app.use(router).mount('#app')

