# Plantae
auteurs : Dahiez Ulysse & Burdy Simon

Plantae est une application web de consultation de produits comestibles à vendre sur des marchés.
Pour l'adaptation au cours nous avons connecté une API REST alimentaire déjà existant pour la recherche du produit.
Une API map est aussi connectée.

Les pages fonctionnelles sont :

## Nos marchés 
URL : http://localhost:3000/#/marketmap/map

Cette page est composé de l'API mapbox 

## Mes produites 

URL: http://localhost:3000/#/myMarket/itemsMarket
Cette page est composé de l'API nommé edamam, accessible sur le site https://developer.edamam.com

Warning :

si l'application affiche une erreur lors de la recherche d'un produit.

Veuillez suivre ces étapes :
- 1.créer un compte sur https://developer.edamam.com 
- 2. Cliquer sur l'onglet "Get API key now " ou rentrer l'URL : https://developer.edamam.com/admin/applications 
- 3. Cliquer sur "Create à newe application" 
- 4. Cliquer sur "Food Database Api" 
- 5. Saisir un nom, par exemple "plantae" 
- 6. Saisir une description, par exemple " création application projet vueJs3" 
- 7. Une "application ID" et une "application keys" a été créée .
- 8.Ouvrez le dossier du projet : suivez le chemin -> src/myMarket/itemsServices js 
- 9.Regardez dans la fonction "getItems(mot)" 
- 10. Vous devez maintenant remplacer la valeur se trouvant après "app_id=" jusqu'au "&" dans la ligne ". get(....." (cf commentaire) par votre "application ID" 
- 11.Vous devez remplacer la valeur se trouvant après "app_key=" jusqu'à la fin par votre "application keys" 
- 12. Repeter l'opération 10 et 11 pour la fonction se trouvant en dessous nommée "loadItemsAPI(mot)" 
- 13 Vous pouvez maintenant rechercher des produits dans la barre de recherche de la page "Mes produits"

Lorsque vous avez rentré une recherche valide, une liste de produits correspondants apparaît .Vous pouvez cliquer sur " En savoir plus" pour être redirigé vers l'URL: http://local host :3000/#/myMarket/itemsMarket/itemcClicked
Sur la page de l'URL : http://localhost:3000/#/myMarket/itemsMarket/itemcClicked , vous pouvez revenir en arrière .

### Autres pages :
aucune autre page n'est opérationnelle pour l'instant
