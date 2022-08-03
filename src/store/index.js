import { createStore } from 'vuex'

const store = createStore({
    state: {
        candidateDetails: {}
    },
    mutations: {
        setCandidateDetails(state, candidate) {
            state.candidateDetails = candidate;
        }
    },
    actions: {

    }
})

export default store;