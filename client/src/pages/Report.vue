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
                ></q-btn>
              </div>
            </div>
          </div>

          <!--  Report Content -->

          <div class="col-10" style="background-color: #fff">
            <div class="row">
              <div class="col-10">
                <q-carousel
                  v-model="slide"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  animated
                  control-color="primary"
                  class="rounded-borders"
                >
                  <q-carousel-slide name="safety" class="column no-wrap flex-center">
                    <div class style="background-color: #fff;">
                      <div class="q-pa-lg">
                        <div class="text-body1">
                          A saftey plan is a personalized, practical plan that includes waus to
                          remain safe while in a relationship, planning to leave, or after you leave.
                          Safety planning involves how to cope with emotions, tell friends, and family about the abuse,
                          take legal action and more.
                        </div>
                      </div>

                      <div class="q-pa-lg">
                        <div class="text-body1">
                          A good safety plan will have all of the vital information you need and be taulored to your unique situation.,
                          and will help walk you through different scenarios.
                        </div>
                      </div>

                      <div class="q-pa-lg">
                        <div class="text-body1">
                          Although some of the things that you outline in your safety plan may seem obvious, its important to remeber
                          that in moments of crisis your brain doesn't function the same way as when your are calm.
                          When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions
                          about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.`
                        </div>
                      </div>
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide name="finances" class="column no-wrap flex-center">
                    <div class="q-mt-md text-center">{{ lorem }}</div>
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
      lorem: `A saftey plan is a personalized, practical plan that includes waus to 
remain safe while in a relationship, planning to leave, or after you leave. 
Safety planning involves how to cope with emotions, tell friends, and family about the abuse,
take legal action and more. \n


A good safety plan will have all of the vital information you need and be taulored to your unique situation.,
and will help walk you through different scenarios. \n

Althoug some of the things that you outline in your safety plan may seem obvious, its important to remeber
that in moments of crisis your brain doesn't function the same way as when your are calm.
When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions
about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.`
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      userReport: "getUserReport"
    })
  }
};
</script>

<style scoped></style>
