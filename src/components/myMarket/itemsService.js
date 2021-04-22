
import axios from 'axios'
const items= {};
export default class ItemsService {
    getItems(mot) {
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

/*import axios from 'axios'
const items= [];
export default class ItemsService {

    getItemsSuggestions(mot) {
            axios
            .get('http://api.edamam.com/auto-complete?q='+mot+'&limit=10&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
            .then(function (response) {
                items.value = response.data
               console.log("item service items ->>>>>> " ,items.value);
              })
            .catch(function (error) {
                console.error(error);
              });
        
                return {
                    items}

    }

    searchItemSelected(mot){
      const reponseSearch = []
      axios
              .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+mot+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
              .then(function (response) {
                console.log("ma reponse est  ->>>>",response.data.hints)
                response.data.hints.forEach(element => {
                  reponseSearch.push(element)
                  
                });
                console.log("ma reponse de searche est ->>>>",reponseSearch)
                 return  {reponseSearch };
              })
              .catch(function (error) {
                console.error(error);
              });
            
             
    }
      

}  
*/
