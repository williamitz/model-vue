import { createStore } from 'vuex'

export default createStore({
    state: {
        heroes: {
            marvel: [],
            dc: []
        }
    },
    mutations: {

        setHeroMarvel(state, payload) {
            state.heroes.marvel.push(payload.data);
        },

        setHeroDC(state, payload) {
            state.heroes.dc.push(payload.data);
        }

    },
    actions: {

        addHeroMarvel({ commit }, payload) {
            commit('setHeroMarvel', payload);
        },

        addHeroDC({ commit }, payload) {
            commit('setHeroDC', payload);
        }

    },
    modules: {}
})