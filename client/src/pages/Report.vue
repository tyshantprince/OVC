/* eslint-disable */
<template>
  <q-page class="q-pa-lg">
    <!-- Top Row  -->
    <div class="row justify-center">
      <div class="col-12 text-center">
        <!-- Top Banner  -->
        <q-banner class style="background-color: #21c2b6; color: #fff">
          <h4 style="color: #fff">
            It sounds like you might have a problem with
            <!-- Format User Categories Logically -->
            <span
              class="text-bold text-purple-5"
              style="font-size: 3rem;"
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

    <div class="row">
      <div class="col-2">
        <div class="column">
          <div class="col text-center q-pa-lg" v-for="category in categories" :key="category">
            <q-btn color="purple-5" align="center" glossy @click="() => { expanded = category}">
              <q-icon size="5em" :name="icons[category]" />
            </q-btn>
          </div>
        </div>
      </div>

      <div class="col-10" style="min-width: 80%">
        <!-- Expansion Items -->
        <div class="q-pa-sm" style="min-width: 100%">
          <q-list bordered>
            <q-expansion-item
              style="width: 100%"
              :value="expanded == category"
              @click="() => { expanded = category}"
              class="q-pa-sm"
              v-for="category in categories"
              :key="category"
              :group="category"
              expand-separator
              header-class="text-purple-5 bg-white text-h4 text-center"
            >
              <template v-slot:header>
                <q-item-section style="font-size: 3rem">{{ category }}</q-item-section>
              </template>
              <q-card flat>
                <div class="row">
                  <div class="col-10">
                    <q-card-section>
                      <div
                        class="text-h6 text-center q-pa-lg"
                        style="font-size: 2rem; line-height: 1.5; "
                      >{{ UserReport[category].about}}</div>
                    </q-card-section>
                  </div>
                  <div class="col-2">
                    <div class="column items-center justify-between q-px-md" style="height: 100%; width: 100%;">
                      <div class="col q-my-xs" style="width: 100%;">
                        <q-btn style="height: 100%; width: 100%; font-size: 1.25rem" color="light-blue-2" text-color="black" label="About Your Situation" @click="makeActive($event, 'about')" />
                      </div>

                      <div class="col q-my-xs" style="width: 100%;">
                        <q-btn style="height: 100%; width: 100%; font-size: 1.25rem" color="light-blue-2" text-color="black" label="Next Steps" @click="makeActive($event, 'nextSteps')" />
                      </div>

                      <div class="col q-my-xs" style="width: 100%;">
                        <q-btn style="height: 100%; width: 100%; font-size: 1.25rem" color="light-blue-2"  text-color="black" label="Where to find Help" @click="makeActive($event, 'findHelp')" />
                      </div>

                      <div class="col q-my-xs" style="width: 100%;">
                        <q-btn  style="height: 100%; width: 100%; font-size: 1.25rem" color="light-blue-2" text-color="black" label="Get More Information" @click="makeActive($event, 'noreInfo')" />
                      </div>
                    </div>
                  </div>
                </div>
              </q-card>
            </q-expansion-item>

            <q-separator />
          </q-list>
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
      expanded: "Safety",
      spot: 0,
      topic: "About",
      icons: {
        Safety: "local_hospital",
        Finance: "monetization_on",
        Housing: "domain",
        Family: "child_friendly",
        VictimRights: "security"
      }
    };
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
    makeActive(event, topic){
      event.target.style.marginLeft = "100px";

      console.log(event);

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
