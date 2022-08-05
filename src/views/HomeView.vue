<template>
  <div class="container my-4">
    <main>
      <div class="py-5">
        <h2>
          Candidates List
          <router-link :to="{ name: 'Add-Resume' }">
            <button class="btn btn-primary float-end">Add Candidate</button>
          </router-link>
        </h2>
      </div>

      <div class="row">
        <div class="col-12 ms-auto me-auto">
          <div class="card">
            <div class="card-body">
              <table class="table" v-if="c_list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number of Skills</th>
                    <th>Total Work Experience (in months)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(candidate, index) in c_list" :key="candidate.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ candidate.fName }} {{ candidate.lName }}</td>
                    <td>{{ candidate.email }}</td>
                    <td>{{ candidate.prof_info.skills.length }}</td>
                    <td>
                      {{
                        candidate.prof_info.experience.reduce(
                          (total, exp) => total + exp.duration,
                          0
                        )
                      }}
                    </td>
                    <td>
                      <a @click="editDetails(candidate)" class="text-primary">Edit</a>
                      <a
                        @click="deleteDetails(candidate.id)"
                        class="text-danger ms-2"
                      >
                        Delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import _ from "lodash";
// import { Emitter } from "../event-bus.js";

export default {
  name: "HomeView",
  setup() {
    const c_list = ref([]);

    onMounted(() => {
      const l_data = JSON.parse(localStorage.getItem("c_list")) || [];
      c_list.value = l_data;
    });

    return {
      c_list,
    };
  },
  components: {},
  methods: {
    editDetails(candidate) {
      console.log(_.cloneDeep(candidate));
      this.$store.dispatch("setCandidateDetails", candidate);
      // Emitter.emit("candidate-details", candidate);
      this.$router.push({
        name: "Edit-Resume",
        params: { id: candidate.id },
      });
    },
    deleteDetails(id) {
      const deleteCandidate = window.confirm("Are you sure?");
      if (deleteCandidate) {
        this.c_list = this.c_list.filter((candidate) => candidate.id !== id);
        localStorage.setItem("c_list", JSON.stringify(this.c_list));
      }
    },
  },
};
</script>

<style scoped>
td > a {
  text-decoration: none;
  cursor: pointer;
}
</style>
