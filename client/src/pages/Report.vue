/* eslint-disable */
<template>
  <q-page class="q-pa-xl">
    <div class="summary">
      <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="notifications_active" color="teal" />
        </template>
        <h5>
          Based on the answers you chose, it looks like your are having issues
          with
        </h5>
        <div
          class="text-h6"
          v-for="(category, index) in categories"
          :key="index"
        >
          {{ category }}
        </div>

        <template v-slot:action>
          <q-btn flat color="teal" label="Turn on Wifi" />
        </template>
      </q-banner>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 100%">
        <q-card>
          <q-tabs
            v-model="category"
            dense
            class="bg-grey-3 text-grey-7"
            active-color="teal"
            indicator-color="teal"
            align="justify"
            @input="changeToDoThisNow"
          >
            <q-tab
              v-for="(category, index) in categories"
              :key="index"
              :name="category"
              :label="category"
            >
            </q-tab>
          </q-tabs>

          <q-tab-panels v-model="category" animated class="bg-teal text-teal">
            <q-tab-panel name="Safety">
              <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                  <q-tabs v-model="tab" vertical :switch-indicator="true">
                    <q-tab v-if="userReport.Safety.DoThisNow.length > 0"
                      class="text-white"
                      name="DoThisNow"
                      icon="mail"
                      label="DoThisNow"
                    />
                    <q-tab
                      v-if="userReport.Safety.NextSteps.length > 0"
                      class="text-white"
                      name="NextSteps"
                      icon="alarm"
                      label="NextSteps"
                    />
                    <q-tab
                    v-if="userReport.Safety.Resources.length > 0"
                      class="text-white"
                      name="Resources"
                      icon="movie"
                      label="Resources"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    class="bg-teal text-teal"
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="DoThisNow">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">DoThisNow</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Safety.DoThisNow"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="NextSteps">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">NextSteps</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Safety.NextSteps"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="Resources">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">Resources</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Safety.Resources"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>

            <q-tab-panel name="Finance">
              <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                  <q-tabs v-model="tab" vertical :switch-indicator="true">
                    <q-tab v-if="userReport.Finance.DoThisNow.length > 0"
                      class="text-white"
                      name="DoThisNow"
                      icon="mail"
                      label="DoThisNow"
                    />
                    <q-tab
                      v-if="userReport.Finance.NextSteps.length > 0"
                      class="text-white"
                      name="NextSteps"
                      icon="alarm"
                      label="NextSteps"
                    />
                    <q-tab
                    v-if="userReport.Finance.Resources.length > 0"
                      class="text-white"
                      name="Resources"
                      icon="movie"
                      label="Resources"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    class="bg-teal text-teal"
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="DoThisNow">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">DoThisNow</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Finance.DoThisNow"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="NextSteps">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">NextSteps</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Finance.NextSteps"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="Resources">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">Resources</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Finance.Resources"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>

            <q-tab-panel name="Housing">
              <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                  <q-tabs v-model="tab" vertical :switch-indicator="true">
                    <q-tab v-if="userReport.Housing.DoThisNow > 0"
                      class="text-white"
                      name="DoThisNow"
                      icon="mail"
                      label="DoThisNow"
                    />
                    <q-tab
                      v-if="userReport.Housing.NextSteps > 0"
                      class="text-white"
                      name="NextSteps"
                      icon="alarm"
                      label="NextSteps"
                    />
                    <q-tab
                    v-if="userReport.Housing.Resources > 0"
                      class="text-white"
                      name="Resources"
                      icon="movie"
                      label="Resources"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    class="bg-teal text-teal"
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="DoThisNow">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">DoThisNow</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Housing.DoThisNow"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="NextSteps">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">NextSteps</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Housing.NextSteps"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="Resources">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">Resources</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Housing.Resources"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>

            <q-tab-panel name="Family Life">
              <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                  <q-tabs v-model="tab" vertical :switch-indicator="true">
                    <q-tab v-if="userReport.Family.DoThisNow > 0"
                      class="text-white"
                      name="DoThisNow"
                      icon="mail"
                      label="DoThisNow"
                    />
                    <q-tab
                      v-if="userReport.Family.NextSteps > 0"
                      class="text-white"
                      name="NextSteps"
                      icon="alarm"
                      label="NextSteps"
                    />
                    <q-tab
                    v-if="userReport.Family.Resources > 0"
                      class="text-white"
                      name="Resources"
                      icon="movie"
                      label="Resources"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    class="bg-teal text-teal"
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="DoThisNow">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">DoThisNow</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Family.DoThisNow"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="NextSteps">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">NextSteps</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Family.NextSteps"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="Resources">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">Resources</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.Family.Resources"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>

            <q-tab-panel name="VictimRights">
              <q-splitter v-model="splitterModel" style="height: 250px">
                <template v-slot:before>
                  <q-tabs v-model="tab" vertical :switch-indicator="true">
                    <q-tab v-if="userReport.VictimRights.DoThisNow.length > 0"
                      class="text-white"
                      name="DoThisNow"
                      icon="mail"
                      label="DoThisNow"
                    />
                    <q-tab
                      v-if="userReport.VictimRights.NextSteps.length > 0"
                      class="text-white"
                      name="NextSteps"
                      icon="alarm"
                      label="NextSteps"
                    />
                    <q-tab
                    v-if="userReport.VictimRights.Resources.length > 0"
                      class="text-white"
                      name="Resources"
                      icon="movie"
                      label="Resources"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="tab"
                    animated
                    swipeable
                    class="bg-teal text-teal"
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="DoThisNow">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">DoThisNow</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.VictimRights.DoThisNow"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="NextSteps">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">NextSteps</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.VictimRights.NextSteps"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>

                    <q-tab-panel name="Resources">
                      <q-card class="my-card">
                        <q-card-section>
                          <div class="text-h4 q-mb-md text-teal">Resources</div>
                        </q-card-section>
                        <q-card-section>
                          <li
                            v-for="(data, i) in userReport.VictimRights.Resources"
                            :key="i"
                          >
                            {{ data }}
                          </li>
                        </q-card-section>
                      </q-card>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
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
      category: "Safety",
      tab: "DoThisNow",
      splitterModel: 20
    };
  },
  methods: {
    changeToDoThisNow() {
      this.tab = "DoThisNow";
    }
  },
  computed: {
    ...mapGetters({
      userReport: "getUserReport"
    }),
    categories() {
      var cats = [];
      for (const category in this.userReport) {
        if (this.userReport.hasOwnProperty(category)) {
          const element = this.userReport[category];
          for (const data in element) {
            if (element.hasOwnProperty(data)) {
              const element2 = element[data];
              if (element2.length != 0) cats.push(category);
            }
          }
        }
      }
      return cats.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
    }
  }
};
</script>

<style scoped></style>
