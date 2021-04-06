import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config'
/*import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice';

import Checkbox from 'primevue/checkbox';

*/
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import TabMenu from 'primevue/tabmenu';

const app = createApp(App);
app.use(PrimeVue);
//app.use(ToastService);



/*app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.component('Checkbox',Checkbox);*/

app.component('TabMenu',TabMenu);
app.use(router).mount('#app')

