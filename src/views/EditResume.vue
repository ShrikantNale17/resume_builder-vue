<template>
  <div class="container my-4">
    <main>
      <div class="py-5 text-center">
        <h2>Edit Candidate</h2>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="row g-5">
          <div class="col-md-7 col-lg-8 ms-auto me-auto">
            <h4 class="mb-3">Basic Info</h4>
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="v$.fName.$model"
                  @blur="v$.fName.$touch"
                  :class="v$.fName.$error && 'is-invalid'"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="v$.lName.$model"
                  @blur="v$.lName.$touch"
                  :class="v$.lName.$error && 'is-invalid'"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Gender</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="male"
                      v-model="v$.gender.$model"
                    />
                    <label class="form-check-label">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="female"
                      v-model="v$.gender.$model"
                    />
                    <label class="form-check-label">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="other"
                      v-model="v$.gender.$model"
                    />
                    <label class="form-check-label">Other</label>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="you@example.com"
                  v-model="v$.email.$model"
                  @blur="v$.email.$touch"
                  :class="v$.email.$error && 'is-invalid'"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Address</label>
                <textarea
                  class="form-control"
                  placeholder="1234 Main St"
                  v-model="v$.address.$model"
                  @blur="v$.address.$touch"
                  :class="v$.address.$error && 'is-invalid'"
                ></textarea>
              </div>

              <div class="col-md-5">
                <label class="form-label">Country</label>
                <select
                  class="form-select"
                  v-model="v$.country.$model"
                  @blur="v$.country.$touch"
                  :class="v$.country.$error && 'is-invalid'"
                >
                  <option value>Choose...</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">State</label>
                <select
                  class="form-select"
                  v-model="v$.state.$model"
                  @blur="v$.state.$touch"
                  :class="v$.state.$error && 'is-invalid'"
                >
                  <option value>Choose...</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>

              <div class="col-md-3">
                <label class="form-label">Pin / Zip</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="v$.pin.$model"
                  @blur="v$.pin.$touch"
                  :class="v$.pin.$error && 'is-invalid'"
                />
              </div>
            </div>

            <hr class="my-4" />

            <h4 class="mb-3">Professional Info</h4>

            <div class="row g-3">
              <div class="col-12">
                <label class="form-label">
                  Choose your skills
                  <span class="small text-muted">(min 3 skills)</span>
                </label>
                <div class="mb-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Angular"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">Angular</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="React"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">React</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Node.JS"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">Node.JS</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="JavaScript"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">JavaScript</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Flutter"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">Flutter</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Java"
                      v-model="v$.prof_info.skills.$model"
                    />
                    <label class="form-check-label">Java</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-12">
                <label class="form-label">
                  <strong>
                    Experience
                    <span class="small text-muted">(min 2, max 5 items)</span>
                  </strong>
                </label>
                <div
                  class="card mx-3 mt-3"
                  v-for="(exp, index) in prof_info.experience"
                  :key="exp.id"
                >
                  <div class="card-body">
                    <h6 class="card-title text-muted mb-3">
                      Experience #{{ index + 1 }}
                      <a
                        @click="removeExperience(exp.id)"
                        class="float-end text-danger fw-normal"
                        >Remove</a
                      >
                    </h6>
                    <div class="row g-3">
                      <div class="col-6">
                        <label class="form-label">Company Name</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="
                            v$.prof_info.experience[index].comp_name.$model
                          "
                          @blur="
                            v$.prof_info.experience[index].comp_name.$touch
                          "
                          :class="
                            v$.prof_info.experience[index].comp_name.$error &&
                            'is-invalid'
                          "
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">
                          Duration
                          <span class="text-muted">(in months)</span>
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          v-model="
                            v$.prof_info.experience[index].duration.$model
                          "
                          @blur="v$.prof_info.experience[index].duration.$touch"
                          :class="
                            v$.prof_info.experience[index].duration.$error &&
                            'is-invalid'
                          "
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label"
                          >Describe your responsibilities</label
                        >
                        <textarea
                          class="form-control"
                          v-model="v$.prof_info.experience[index].responsibilities.$model"
                          @blur="v$.prof_info.experience[index].responsibilities.$touch;"
                          :class="v$.prof_info.experience[index].responsibilities.$error && 'is-invalid'"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="d-block mt-3" @click="addExperience"
                  >Add more experience</a
                >
              </div>
            </div>

            <hr class="my-4" />

            <button class="btn btn-primary" type="submit">
              Update Candidate
            </button>

            {{candidate}}
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import { computed, reactive, toRefs, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { uuid } from "vue-uuid";
// import { Emitter } from "../event-bus.js";
import { useStore } from "vuex";

export default {
  props: ["id"],
  setup() {
    const store = useStore();

    // const candidate = store.state.candidate;
    // console.log(candidate);
    const formData = reactive({
      id: "",
      fName: "",
      lName: "",
      gender: "",
      email: "",
      address: "",
      country: "",
      state: "",
      pin: "",
      prof_info: {
        skills: [],
        experience: [
          {
            id: uuid.v1(),
            comp_name: "",
            duration: null,
            responsibilities: "",
          },
          {
            id: uuid.v1(),
            comp_name: "",
            duration: null,
            responsibilities: "",
          },
        ],
      },
    });
    const rules = computed(() => ({
      fName: { required },
      lName: { required },
      gender: { required },
      email: { required, email },
      address: { required },
      country: { required },
      state: { required },
      pin: { required },
      prof_info: {
        skills: { required },
        experience: formData.prof_info.experience.map(() => {
          return {
            comp_name: { required },
            duration: { required },
            responsibilities: { required },
          };
        }),
      },
    }));

    const v$ = useVuelidate(rules, formData);

    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      /* Emitter.on("candidate-details", (candidate) => {
        console.log(candidate);
      }); */

      const candidate = store.getters.getCandidateDetails;
      console.log(candidate);

      /* Object.entries(candidate).forEach(([key, value]) => {
        formData[key] = value;
      }); */

      const c_list = JSON.parse(localStorage.getItem("c_list"));
      c_list.forEach((candidate) => {
        if (candidate.id === route.params.id) {
          Object.entries(candidate).forEach(([key, value]) => {
            formData[key] = value;
          });
        }
      });
    });

    function addExperience() {
      formData.prof_info.experience.push({
        id: uuid.v1(),
        comp_name: "",
        duration: null,
        responsibilities: "",
      });
      console.log(formData.prof_info.experience);
    }

    function removeExperience(id) {
      console.log(id);
      this.prof_info.experience = this.prof_info.experience.filter(
        (exp) => exp.id !== id
      );
      console.log(this.prof_info.experience);
    }

    async function handleSubmit() {
      const isValid = await v$.value.$validate();
      console.log(isValid);
      if (!isValid) {
        return;
      } else {
        console.log(formData);
      }

      let c_list = JSON.parse(localStorage.getItem("c_list")) || [];
      c_list = c_list.map((candidate) =>
        formData.id === candidate.id ? formData : candidate
      );
      localStorage.setItem("c_list", JSON.stringify(c_list));
      router.push({ name: "home" });
    }

    return {
      v$,
      ...toRefs(formData),
      formData,
      addExperience,
      removeExperience,
      handleSubmit,
      candidate: computed(() => store.state.candidate),
    };
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
