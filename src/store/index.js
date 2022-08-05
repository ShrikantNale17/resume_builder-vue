import { createStore } from 'vuex'

const store = createStore({
    state: {
        candidateDetails: {}
    },
    getters: {
        getCandidateDetails: state => {
            return state.candidateDetails;
        }
    },
    mutations: {
        setCandidateDetails(state, candidate) {
            state.candidateDetails = candidate;
        }
    },
    actions: {
        setCandidateDetails: (context, candidate) => {
            context.commit('setCandidateDetails', candidate)
        }
    }
})

export default store;