import { createStore } from 'vuex';

// Creation store 

const store = createStore({
  state() {
    return {
      inputSearch: "", // valeur saisie dans la recherche 
      dataItem: null , // objet du dernier produit cliqué
    };
  },


  getters: {
    getinputSearch: (state) => state.inputSearch, // getteur  valeur saisie
    getDataItem: (state) => state.dataItem, // guetteur valeur objet 
  },


  mutations: {
    setinputSearch(state,inputSearch ) { // setteur  valeur saisie
      state.inputSearch = inputSearch;
    },
    setdataItem(state, dataItem) { //setteur valeur objet 
      state.dataItem = dataItem;
    }
  },



  actions:{
      setinputSearch({ commit } , inputSearch) {
        commit("setinputSearch",inputSearch)
       
      },

      setdataItem({ commit } , dataItem) {
        commit("setdataItem",dataItem)
       
      }

    
  }



});

export default store;

