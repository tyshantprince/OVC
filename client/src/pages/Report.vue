/* eslint-disable */
<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center ">
      <div class="col-12 text-center">
        <q-banner class style="background-color: #21c2b6; color: #fff">
          <h5 style="color: #fff">
            It sounds like you might have a problem with
            <span
              class="text-bold text-h4"
            >{{new Intl.ListFormat().format(categories.map((category) => { return category == "VictimRights" ? "Victim Rights" : category })) }}</span>

            <br />
            <h5 class="q-pa-sm"> Here is some information that might help address your needs.</h5>
          </h5>
        </q-banner>
      </div>
    </div>

      <div class="row">
        <div class="col-2">
          <div class="column">
            <div class="col text-center q-pa-lg" v-for="category in categories" :key="category">
              <q-btn color="teal" align="center" glossy    @click="() => { expanded = category}">
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
                header-class="text-teal bg-white text-h4 text-center"
              >
                <template v-slot:header>
                  <q-item-section>{{ category }}</q-item-section>
                </template>
                <q-card flat>
                  <q-card-section>
                    <p class="text-center" style="" >{{ UserReport[category].about}}</p>
                  </q-card-section>

                  <q-card-section>
                    <div class="row">
                      <div class="col q-pa-md">
                        <h5>Next Steps</h5>
                        <ul>
                          <li v-for="(data, id) in UserReport[category].NextSteps" :key="id">
                            <span v-if="data.includes('https')">
                              <q-btn
                                @click="openUrl(data.substring(data.indexOf('h'), data.lastIndexOf('/')))"
                                type="a"
                                color="teal"
                                no-caps
                              >Visit {{ data.substring(data.indexOf("/") + 2, data.indexOf("."))}}</q-btn>
                            </span>

                            <span v-else>{{ data }}</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col q-pa-md">
                        <h5>Find Help</h5>
                        <ul>
                          <li v-for="(data, id) in UserReport[category].FindHelp" :key="id">
                            <span v-if="data.includes('https')">
                              <q-btn
                                @click="openUrl(data.substring(data.indexOf('h'), data.lastIndexOf('/')))"
                                type="a"
                                color="teal"
                                no-caps
                              >Visit {{ data.substring(data.indexOf("/") + 2, data.indexOf("."))}}</q-btn>
                            </span>

                            <span v-else>{{ data }}</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col q-pa-md">
                        <h5>More Info</h5>
                        <ul>
                          <li v-for="(data, id) in UserReport[category].MoreInfo" :key="id">
                            <span v-if="data.includes('https')">
                              <q-btn
                                @click="openUrl(data.substring(data.indexOf('h'), data.lastIndexOf('/')))"
                                type="a"
                                color="teal"
                                no-caps
                              >Visit {{ data.substring(data.indexOf("/") + 2, data.indexOf("."))}}</q-btn>
                            </span>

                            <span v-else>{{ data }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </q-card-section>
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
    handleIconClick(name) {
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
