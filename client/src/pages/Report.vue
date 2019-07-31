/* eslint-disable */
<template>
  <q-page class="q-pa-xl">
    <div class="summary">
      <div class="row justify-center">
        <div class="col-12 text-center">
          <q-banner class style="background-color: #21c2b6; color: #fff">
            <h5 style="color: #fff">
              It sounds like you might have a problem with safety and finances.
              <br />Here is some information that might help address your needs.
            </h5>
          </q-banner>
        </div>

        <!-- Side Buttons -->

        <div class="row">
          <div class="col-2">
            <div class="column items-center">
              <div class="q-pa-xl">
                <q-btn
                  :unelevated="true"
                  color="white"
                  text-color="purple"
                  round
                  icon="security"
                  dense
                  size="3rem"
                  @click="changePanel('safety')"
                ></q-btn>
              </div>

              <div class="q-pa-xl">
                <q-btn
                  :unelevated="true"
                  color="white"
                  text-color="purple"
                  round
                  icon="monetization_on"
                  dense
                  size="3rem"
                  @click="changePanel('finance')"
                ></q-btn>
              </div>
            </div>
          </div>

          <!--  Report Content -->

          <div class="col-10" style="background-color: #fff">
            <div class="row">
              <div class="col-10">
                <q-carousel
                  ref="report"
                  v-model="slide"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  animated
                  control-color="primary"
                  class="rounded-borders"
                >
                <q-carousel-slide v-for="(category, id) in UserReport"
                :name="id"
                :key="id"
                class="column no-wrap flex-center"
                >

                <div class style="background-color: #fff;">

                  <!-- About your situation -->
                  <div class="" v-if=" topic == 'about'">
                     <div  class="text-body q-pa-md" style="" v-for="(text, id) in current_about" :key="id">
                    {{ text }}
                  </div>
                  </div>


                     <div class="" v-if=" topic == 'nextSteps'">
                     <div  class="text-body q-pa-md" style="" v-for="(text, id) in current_about" :key="id">
                    {{ text }}
                  </div>
                  </div>
                 
                </div>
                </q-carousel-slide>
                </q-carousel>
              </div> 

              <div class="col-2">
                <div class="column items-start justify-center">
                  <div class="col-3 q-pa-sm">
                    <q-btn
                      style="height: 80px; width: 175px"
                      label="About your Situation"
                      :unelevated="true"
                      color="purple"
                      text-color="white"
                    ></q-btn>
                  </div>

                  <div class="col-3 q-pa-sm">
                    <q-btn
                      style="height: 80px; width: 175px"
                      :unelevated="true"
                      label="Next Steps"
                      color="purple"
                      text-color="white"
                    ></q-btn>
                  </div>

                  <div class="col-3 q-pa-sm">
                    <q-btn
                      style="height: 80px; width: 175px"
                      :unelevated="true"
                      label="Where to find Help"
                      color="purple"
                      text-color="white"
                    ></q-btn>
                  </div>

                  <div class="col-3 q-pa-sm">
                    <q-btn
                      style="height: 80px; width: 175px"
                      :unelevated="true"
                      label="Get More Information"
                      color="purple"
                      text-color="white"
                    ></q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PageReport",
  data() {
    return {
      slide: "safety",
      topic: 'about'

       };
  },
  methods: {
    changePanel(name){
      this.$refs.report.goTo(name);
    }
  },
  computed: {
    ...mapGetters({
      UserReport: "getUserReport"
    }),
    current_about(){
      return this.UserReport[this.slide].about.split("<br>")
    },

    current_nextSteps(){
      return this.UserReport[this.slide].nextSteps;
    }
  }
};
</script>

<style scoped></style>
