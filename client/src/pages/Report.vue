/* eslint-disable */
<template>
  <q-page class="q-pa-xl">
    <div class="summary">
      <div class="row justify-center">
        <div class="col-12 text-center">
          <q-banner class style="background-color: #21c2b6; color: #fff">
            <h5 style="color: #fff">
              It sounds like you might have a problem with
              <!-- <span
                class="text-bold text-h4"
                v-for="category in categories"
                :key="category"
              >{{" " + category + ", " }}</span> -->

              <span class="teext-bold text-h4">
                Safety, Finance, Housing, Family, and Victim Rights

              </span>

              <br />Here is some information that might help address your needs.
            </h5>
          </q-banner>
        </div>

        <!-- Side Buttons -->

        <div class="row">
          <div class="col-2">
            <div class="column items-center">
              <div class="q-pa-xl" v-for="(category) in categories" :key="category">
                <q-btn
                  :unelevated="true"
                  color="white"
                  text-color="purple"
                  round
                  :icon="icons[category]"
                  dense
                  size="3rem"
                  @click="handleIconClick(category)"
                ></q-btn>
              </div>
            </div>
          </div>

          <!--  Report Content -->

          <div class="col-10" style>
            <div class="row">
              <div class="col-10 q-pa-md">
                <q-card
                  v-for="(category, id) in categories"
                  :name="id"
                  :key="id"
                  :id="id"
                  class="row no-wrap flex-center q-pa-md q-ma-md"
                  style
                >
                  <!-- About your situation -->
                  <div class="col-10 q-pa-md" v-if=" topic == 'About'">
                    <div
                      class="text-body q-pa-lg"
                      style
                      v-for="(text, id) in current_about"
                      :key="id"
                    >{{ text }}</div>
                  </div>

                  <div class="col-10" v-if=" topic == 'NextSteps'">
                    <div
                      class="text-body q-pa-lg"
                      style
                      v-for="(nextStep, id) in UserReport[slide].NextSteps"
                      :key="id"
                    >{{ nextStep }}</div>
                  </div>

                  <div class="col-10" v-if=" topic == 'FindHelp'">
                    <div
                      class="text-body q-pa-lg"
                      style
                      v-for="(findHelp, id) in UserReport[slide].FindHelp"
                      :key="id"
                    >{{ findHelp }}</div>
                  </div>

                  <div class="col-10" v-if=" topic == 'MoreInfo'">
                    <div
                      class="text-body q-pa-lg"
                      style
                      v-for="(moreInfo, id) in UserReport[slide].MoreInfo"
                      :key="id"
                    >{{ moreInfo }}</div>
                  </div>

                    <div class="col-3 q-pa-md">
                      <div class="column items-center justify-center ">
                        <div class="col-3 q-pa-sm">
                          <q-btn
                            style="height: 90px;"
                            label="About our Situation"
                            :unelevated="true"
                            color="purple"
                            text-color="white"
                            @click="topic = 'About'"
                          ></q-btn>
                        </div>

                        <div class="col-3 q-pa-sm">
                          <q-btn
                            style="height: 90px; width: 200px"
                            :unelevated="true"
                            label="Next Steps"
                            color="purple"
                            text-color="white"
                            @click="topic = 'NextSteps'"
                          ></q-btn>
                        </div>

                        <div class="col-3 q-pa-sm">
                          <q-btn
                            style="height: 90px; width: 200px"
                            :unelevated="true"
                            label="Where to find Help"
                            color="purple"
                            text-color="white"
                            @click="topic = 'FindHelp'"
                          ></q-btn>
                        </div>

                        <div class="col-3 q-pa-sm">
                          <q-btn
                            style="height: 90px; width: 200px"
                            :unelevated="true"
                            label="Get More Information"
                            color="purple"
                            text-color="white"
                            @click="topic = 'MoreInfo'"
                          ></q-btn>
                        </div>
                    </div>
                  </div>
                </q-card>
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
import _ from "lodash";

export default {
  name: "PageReport",
  data() {
    return {
      slide: "safety",
      spot: 0,
      topic: "About",
      icons: {
        safety: "local_hospital",
        finance: "monetization_on",
        housing: "domain",
        family: "child_friendly",
        victim: "security"
      }
    };
  },
  methods: {
    changePanel(name) {
      this.$refs.report.goTo(name);
    },
    handleIconClick(name){
      // var container = this.$el.querySelector("#" + name);
      // console.log(container);
      // container.scrollTop = container.scrollHeight;
      console.log(name);
    }
  },
  computed: {
    ...mapGetters({
      UserReport: "getUserReport"
    }),
    current_about() {
      return this.UserReport[this.slide].about.split("<br>");
    },

    current_nextSteps() {
      return this.UserReport[this.slide].nextSteps;
    },

    categories() {
      return _.map(this.UserReport, (value, key) => {
        if (
          value.FindHelp.length != 0 ||
          value.MoreInfo.length != 0 ||
          value.NextSteps.length != 0
        ) {
          return key;
        }
      }).filter(el => el != null);
    }
  }
};
</script>

<style scoped></style>
