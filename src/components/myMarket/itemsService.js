import axios from 'axios'


// Class connexion de l'api edanam avec axios 
export default class ItemsService {
    // connexion pour l'auto complete 
    getItems(mot) {
        let items= {}
        axios
            .get('http://api.edamam.com/auto-complete?q='+mot+'&limit=10&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
            .then(function (response) {
                items.value = response.data
              })
            .catch(function (error) {
                console.error(error);
              });
        
      return{
          items
      }
    }

    // connexion pour la recherche
    loadItemsAPI(mot){
        var maval = []
        axios
        .get( 'https://api.edamam.com/api/food-database/v2/parser?ingr='+mot+'&app_id=21137dee&app_key=3ec1733a6d09062c59d4ef9451d12035')
        .then(function (response) {
            maval.value = response.data.hints
            })

        .catch(function (error) {
            console.error(error);
            });
        return {
                maval
            }
   }

}  

