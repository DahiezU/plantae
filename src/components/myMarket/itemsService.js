import axios from 'axios'
const items= {};
export default class ItemsService {
    getItems(mot) {
        if(typeof mot.name != 'undefined'){
            //console.log("mddrrrrrrrr de fils de pute ")
            axios
            .get('http://api.edamam.com/auto-complete?q='+mot.name+'&limit=10&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
            .then(function (response) {
                items.value = response.data
               //console.log(items);
              })
            .catch(function (error) {
                console.error(error);
              });
        
                return {
                    items}
        }else{
            axios
            .get('http://api.edamam.com/auto-complete?q='+mot+'&limit=10&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
            .then(function (response) {
                items.value = response.data
               //console.log(items);
              })
            .catch(function (error) {
                console.error(error);
              });
        
                return {
                    items}
        }
        
        
    }
}  

