import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      inputSearch: "",
      dataItem: null ,
    };
  },



  getters: {
    getinputSearch: (state) => state.inputSearch,
    getDataItem: (state) => state.dataItem,
  },





  mutations: {
    setinputSearch(state,inputSearch ) {
      state.inputSearch = inputSearch;
    },
    setdataItem(state, dataItem) {
      state.dataItem = dataItem;
    }
  },



  actions:{
      setinputSearch({ commit } , inputSearch) {
        commit("setinputSearch",inputSearch)
        console.log(" mon resultat inputSearch = " ,inputSearch)
      },

      setdataItem({ commit } , dataItem) {
        commit("setdataItem",dataItem)
        console.log(" mon resultat dataItem = " ,dataItem)
      }

    
  }



});

export default store;


/*import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      data: {},
    };
  },
  getters: {
    getCount: (state) => state.count,
    getData: (state) => state.data,
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    increment(state) {
      state.count ++;
    },
    setData(state, payload) {
      state.data = payload;
    }
  }
});

export default store;*/