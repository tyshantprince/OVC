/* eslint-disable */
<template>
  <q-page class="q-pa-lg">
    <!-- Top Row  -->
    <div class="row justify-center">
      <div class="col-12 text-center">
        <!-- Top Banner  -->
        <q-banner class style="background-color: #2b7b72; color: #fff">
          <h4 style="color: #fff">
            It sounds like you might have a problem with
            <!-- Format User Categories Logically -->
            <span
              class="text-bold "
              style="font-size: 3rem; line-height: 1.5"
            >{{new Intl.ListFormat().format(categories.map((category) => { return category == "VictimRights" ? "Victim Rights" : category })) }}</span>

            <br />
            <h5
              class="q-pa-sm"
              style="font-size: 2rem;"
            >Here is some information that might help address your needs.</h5>
          </h4>
        </q-banner>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-1">
        <div class="column">
          <div class="col text-center q-pa-xl" v-for="category in categories" :key="category">
            <q-btn
              class
              color="purple-9"
              align="center"
              round
              glossy
              @click="() => { expanded = category}"
            >
              <q-icon size="2em" :name="icons[category]" />
            </q-btn>
          </div>
        </div>
      </div> -->

      <div class="col-11" style="min-width: 80%">
        <!-- Expansion Items -->
        <div class="q-pa-sm" style="min-width: 100%">
          <q-list  style="">
            <q-expansion-item
              style="width: 100%; ;  "
              :value="expanded == category"
              @click="() => { expanded = category}"
              class="q-pa-sm"
              v-for="category in categories.map((category) => {return category == 'VictimRights' ? 'Victim Rights' : category })"
              :key="category"
              :group="category"
              :header-style="{ height:'6rem'}"
              expand-separator
              header-class="text-purple-9 bg-white text-h4 text-center headerBorder"
            >
              <template v-slot:header>
                <q-item-section style="font-size: 3rem">{{ category }}</q-item-section>
              </template>
              <q-card flat >
                <div class="row">
                  <div class="col-10 content-area q-ma-xl" color="accent">
                    <!-- About your situation -->
                    <q-card-section v-if="topic == 'about'">
                      <div
                        class="text-center q-pa-lg "
                        style="font-size: 2rem; line-height: 1.5; "
                      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore accusamus soluta enim minima illum autem eveniet neque impedit iste. Deserunt repellat sunt odit nihil possimus eaque eum et neque! Quo.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore accusamus soluta enim minima illum autem eveniet neque impedit iste. Deserunt repellat sunt odit nihil possimus eaque eum et neque! Quo.
                    </div></q-card-section>

                    <q-card-section v-if="topic == 'nextSteps'">
                      <div class="text-center q-pa-md" style="font-size: 2rem; line-height: 1.5; ">
                        <q-stepper  v-model="step" ref="stepper" animated active-color="purple">
                          <q-step :name="1" prefix="1" title="Contact {Name of Resource}">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, optio?
                            Quibusdam accusantium odio animi similique libero fugiat dolor, alias blanditiis natus \
                            facilis? Vel nemo illo architecto ea labore alias explicabo.
                          </q-step>

                          <q-step :name="2" prefix="2" title="Prepare Your Documents">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, optio?
                            Quibusdam accusantium odio animi similique libero fugiat dolor, alias blanditiis natus \
                            facilis? Vel nemo illo architecto ea labore alias explicabo.
                          </q-step>

                          <q-step :name="3" prefix="3" title="Visit Courthouse">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, optio?
                            Quibusdam accusantium odio animi similique libero fugiat dolor, alias blanditiis natus \
                            facilis? Vel nemo illo architecto ea labore alias explicabo.
                          </q-step>

                          <template v-slot:navigation>
                            <q-stepper-navigation>
                              <q-btn
                                @click="$refs.stepper[0].next()"
                                color="purple-9"
                                :label="step === 3 ? 'Finish' : 'Continue'"
                              />
                              <q-btn
                                v-if="step > 1"
                                flat
                                color="purple-9"
                                @click="$refs.stepper[0].previous()"
                                label="Back"
                                class="q-ml-sm"
                              />
                            </q-stepper-navigation>
                          </template>
                        </q-stepper>
                      </div>
                    </q-card-section>

                    <q-card-section v-if="topic == 'findHelp'">
                      <div
                        class="text-center q-pa-lg"
                        style="font-size: 1.5rem; line-height: 1.5; "
                      >
                        <p class="">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis repellat ut magnam voluptates doloribus, quae eum reru
                          m distinctio fugiat eveniet non consequatur ipsam labore facere dolores dicta! Laudantium, iusto.
                        </p>

                        <div class="row">
                          <div class="col q-pa-md">
                            <q-card class="my-card bg-purple-9 text-white">
                              <q-card-section>
                                <div class="text-h6">Call</div>
                                <div class="text-subtitle1">{ Insert Contact }</div>
                              </q-card-section>

                              <q-card-section></q-card-section>

                              <q-separator dark />

                              <q-card-actions align="center">
                                <q-btn size=".8rem" flat>Visit Website</q-btn>
                                <q-btn size=".8rem" flat>Email</q-btn>
                              </q-card-actions>
                            </q-card>
                          </div>
                          <div class="col q-pa-md">
                            <q-card class="my-card bg-purple-9 text-white">
                              <q-card-section>
                                <div class="text-h6">Call</div>
                                <div class="text-subtitle1">{ Insert Contact }</div>
                              </q-card-section>

                              <q-card-section></q-card-section>

                              <q-separator dark />

                              <q-card-actions align="center">
                                <q-btn size=".8rem" flat>Visit Website</q-btn>
                                <q-btn size=".8rem" flat>Email</q-btn>
                              </q-card-actions>
                            </q-card>
                          </div>
                          <div class="col q-pa-md">
                            <q-card class="my-card bg-purple-9 text-white">
                              <q-card-section>
                                <div class="text-h6">Call</div>
                                <div class="text-subtitle1">{ Insert Contact }</div>
                              </q-card-section>

                              <q-card-section></q-card-section>

                              <q-separator dark />

                              <q-card-actions align="center">
                                <q-btn size=".8rem" flat>Visit Website</q-btn>
                                <q-btn size=".8rem" flat>Email</q-btn>
                              </q-card-actions>
                            </q-card>
                          </div>
                        </div>
                      </div>
                    </q-card-section>

                    <q-card-section v-if="topic == 'moreInfo'">
                      <div
                        class="text-h6 text-center q-pa-lg "
                        style="font-size: 1.6rem; line-height: 1.5; "
                      >
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis repellat ut magnam voluptates doloribus, quae eum reru
                          m distinctio fugiat eveniet non consequatur ipsam labore facere dolores dicta! Laudantium, iusto.
                        </p>

                        <br />

                        <div class="text-center">
                          <q-btn
                            color="purple-9"
                            rounded
                            size="1.5rem"
                            icon="subdirectory_arrow_right"
                            label="More Info"
                          />
                        </div>
                      </div>
                    </q-card-section>
                  </div>
                  <div class="col-2">
                    <div
                      class="column items-center justify-center q-px-md q-py-md"
                      style="height: 100%; width: 100%;"
                    >
                      <transition name="btn-slide">
                        <div class="col q-my-xs content-btn" style="width: 100%;">
                          <q-btn
                          v-bind:class="{ activeBtn: topic == 'about' }"
                            style="height: 100%; width: 100%; font-size: 1.5rem;"
                            color="primary"
                            label="About Your Situation"
                            @click="makeActive($event, 'about')"
                          />
                        </div>
                      </transition>

                      <transition name="btn-slide">
                        <div class="col q-my-xs" style="width: 100%;">
                          <q-btn
                              v-bind:class="{ activeBtn: topic == 'nextSteps' }"

                            style="height: 100%; width: 100%; font-size: 1.5rem;"
                            color="primary"
                            label="Next Steps"
                            @click="makeActive($event, 'nextSteps')"
                          />
                        </div>
                      </transition>

                      <transition name="btn-slide">
                        <div class="col q-my-xs" style="width: 100%;">
                          <q-btn
                                                    v-bind:class="{ activeBtn: topic == 'findHelp' }"

                            style="height: 100%; width: 100%; font-size: 1.5rem;"
                            color="primary"
                            label="Where to find Help"
                            @click="makeActive($event, 'findHelp')"
                          />
                        </div>
                      </transition>

                      <transition name="btn-slide">
                        <div class="col q-my-xs" style="width: 100%;">
                          <q-btn
                                v-bind:class="{ activeBtn: topic == 'moreInfo' }"
                            style="height: 100%; width: 100%; font-size: 1.5rem;"
                            color="primary"
                            label="Get More Information"
                            @click="makeActive($event, 'moreInfo')"
                          />
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </q-card>
            </q-expansion-item>

            <q-separator />
          </q-list>
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
      expanded: "Safety",
      step: 1,
      topic: "about",
      icons: {
        Safety: "local_hospital",
        Finance: "monetization_on",
        Housing: "domain",
        Family: "child_friendly",
        VictimRights: "security"
      }
    };
  },
  mounted() {
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
    makeActive(event, topic) {
      this.topic = topic;
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

<style scoped>
.content-area{
  border: 1px transparent solid; 
  border-radius: 25px;
  width: 73%;
  height: 28rem;
}

.content-btn{
    border: 1px transparent solid; 
  border-radius: 25px;
}


.activeBtn{

margin-left: 60px;
background-color: #6a1b9a !important;

}
</style>
