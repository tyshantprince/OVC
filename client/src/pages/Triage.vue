/**
Author: Tyshan Prince (tyshantprince@gmail.com)
Date: July 09, 2019


Description:

Triage component

Manages user's triage state and current question information

Dynamically updates user report based on selected answers

*/
<template>
  <q-page class="q-pa-xl lg">
    <!-- Intro Section -->

    <div v-if="currentQuestion && currentQuestion.category == 'intro'">
      <div class="flex flex-center q-pa-sm no-wrap">
        <h2 style="color: #fff">Intro</h2>
      </div>

      <!-- Question -->

      <div class="row justify-center items-center" style="padding: 0px !important;">
        <div class="col-12 col-sm-12 col-md-4">
          <h2
            class="text-center text-weight-medium"
            style="color: #fff"
            v-if="currentQuestion"
          >{{ currentQuestion.question }}</h2>
        </div>
        <div class="col-xs-12 col-md-6">
          <!-- If the answer is a yes or no show this -->

          <div class v-if="currentAnswers.length < 3">
            <q-btn
              :key="answer.id"
              v-for="(answer, index) in currentAnswers"
              @click="handleClick($event, answer)"
              class="shadow-0 q-ma-lg text-capitalize myIntro"
              href="#"
              rounded
              align="left"
            >
              <div class="row q-pa-md justify-center items-center">
                <div style>
                  <q-icon
                    v-if="index == 0"
                    name="face"
                    left
                    size="5rem"
                    color="secondary"
                    style="background-color: #fff; border-radius: 50px;"
                  />
                  <q-icon
                    v-if="index == 1"
                    name="clear"
                    left
                    color="secondary"
                    size="5rem"
                    style="background-color: #fff; border-radius: 50px;"
                  />
                </div>

                <div class>
                  <h5 style="font-size: 20px">{{ answer.answer.toLowerCase() }}</h5>
                </div>
              </div>
            </q-btn>
          </div>
          <div class="row justify-center items-center" style v-else>
            <div class="col-4 q-pa-sm" :key="answer.id" v-for="(answer) in currentAnswers">
              <q-btn
                @click="handleClick($event, answer)"
                class="shadow-0 text-capitalize myCounty"
                href="#"
                rounded
                align="center"
              >
                <div class>
                  <h5 style="font-size: 20px">{{ answer.answer.toLowerCase() }}</h5>
                </div>
              </q-btn>
            </div>

            <!-- <q-select
              class="text-center"
              style="width: 65%; height: 10rem; font-size: 3rem;  "
              rounded
              v-model="model"
              :options="this.counties"
              color="secondary"
              dark
              bg-color="primary"
              :options-cover="true"
              options-selected-class="secondary"
              :stack-label="false"
              hint="County"
            >
              <template v-if="model" v-slot:append>
                <q-icon name="cancel" @click.stop="model = null" class="cursor-pointer" />
              </template>
            </q-select>-->

            <!-- <div class="col-12"></div>
            <q-btn style="color: #fff; background-color:#fff" @click="handleDropdown($event)">
              <q-icon style="color:#21c2b6" name="done"></q-icon>
            </q-btn>-->
          </div>
        </div>
      </div>

      <div v-if="this.currentQuestion.id == 2" class="flex flex-center q-pa-xl q-ma-xl">
        <q-btn style="color: #fff; background-color:#fff" @click="backQuestion">
          <q-icon style="color:#21c2b6" name="arrow_back"></q-icon>
        </q-btn>
      </div>
    </div>

    <!-- End Of Intro Questions -->

    <div class v-else-if="currentQuestion && currentQuestion.category != 'intro'">
      <div class="q-pa-md">
        <q-stepper
          v-if="this.categories"
          v-model="category_step"
          header-nav
          ref="stepper"
          color="secondary"
          animated
          class="shadow-10"
        >
          <template v-for="(category, i) in this.categories">
            <q-step
              :key="i"
              :name="i + 1"
              :icon="currentQuestion.icon"
              :done="step > i + 1"
              :title="category"
              class="q-pa-lg"
            >
              <div class v-if="currentAnswers.length < 3">
                <div class="row justify-center items-center">
                  <div class="col">
                    <div class="col-12 col-sm-4">
                      <h3 class="text-center" v-if="currentQuestion">{{ currentQuestion.question }}</h3>
                    </div>
                  </div>
                  <div class="col q-pa-lg q-mx-md">
                    <q-btn
                      stack
                      dense
                      :key="answer.id"
                      v-for="answer in currentAnswers"
                      @click="handleClick($event, answer)"
                      size="lg"
                      class="shadow-12 q-pa-lg q-ma-lg mybtn text-capitalize"
                      style="color: #fff"
                      href="#"
                      no-caps
                      :icon="answer.icon"
                    >{{ answer.answer.toLowerCase() }}</q-btn>
                  </div>
                </div>
              </div>

              <div class v-else>
                <div class="row items-center">
                  <div class="col-6">
                      <h3 class="text-center" v-if="currentQuestion">{{ currentQuestion.question }}</h3>
                  </div>
                  <div class="col-6">
                  <div class="row justify-center items-center">
                    <div class="col-6 q-pa-md"         :key="answer.id"
                      v-for="answer in currentAnswers">
                    <q-btn
                      stack
                      dense
              
                      @click="handleClick($event, answer)"
                      size="lg"
                      class="shadow-12 q-pa-sm victimBtn self-center"
                      style="color: #fff"
                      href="#"
                      align="center"
                      :icon="answer.icon"
                    >{{ answer.answer }}</q-btn>
                    </div>

                  </div>
                </div>
                  </div>
              </div>
              <q-stepper-navigation></q-stepper-navigation>
            </q-step>
          </template>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<style>
.justify-al {
  justify-content: left !important;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageTriage",
  data() {
    return {
      step: 1,
      model: null,
      selectedCounty: {},
      counties: [
        "Apache",
        "Cochise",
        "Coconino",
        "Gila",
        "Graham",
        "Greenlee",
        "La Paz",
        "Maricopa",
        "Mohave",
        "Navajo",
        "Pima",
        "Pinal",
        "Santa Cruz",
        "Yavapai",
        "Yuma"
      ]
    };
  },

  computed: {
    ...mapGetters({
      allQuestions: "allQuestions",
      allAnswers: "allAnswers",
      currentQuestionID: "currentQuestionId"
    }),

    introQuestions() {
      return this.allQuestions.filter(question => question.category == "intro");
    },
    otherQuestions() {
      return this.allQuestions.filter(question => question.category != "intro");
    },
    currentQuestion() {
      return this.allQuestions.filter(
        question => question.id == this.currentQuestionID
      )[0];
    },

    categories() {
      var list = [];
      this.otherQuestions.forEach(question => {
        if (!list.includes(question.category)) list.push(question.category);
      });
      return list;
    },

    current_category() {
      return this.categories.filter(category => {
        return category == this.currentQuestion.category;
      })[0];
    },

    category_step() {
      return (
        this.categories.findIndex(
          category => category == this.current_category
        ) + 1
      );
    },

    currentAnswers() {
      var self = this;
      return this.allAnswers.filter(function(answer) {
        return self.currentQuestion.answers
          .split(",")
          .includes(answer.id.toString());
      });
    }
  },
  created() {
    this.$store.dispatch("fetchSpreadsheet");
    this.$store.dispatch("newReport");
  },
  methods: {
    handleDropdown(e) {
      var that = this;
      var selectedAnswer = this.currentAnswers.filter(function(answer) {
        return answer.answer == that.model;
      })[0];

      this.handleClick(e, selectedAnswer);
    },
    handleClick(e, answer) {
      if (answer.nextQuestion == 22) {
        this.$router.push("report");
      }
      if (answer.resources) {
        this.$store.dispatch("FindHelp", {
          data: answer.resources,
          category: answer.category
        });
      }
      if (answer.DoThisNow) {
        this.$store.dispatch("MoreInfo", {
          data: answer.DoThisNow,
          category: answer.category
        });
      }
      if (answer.NextSteps) {
        this.$store.dispatch("NextSteps", {
          data: answer.NextSteps,
          category: answer.category
        });
      }
      this.$store.dispatch("updateQuestion", answer.nextQuestion);
    },
    isDone(category) {
      return category == this.currentQuestion.category ? true : false;
    },
    backQuestion() {
      this.$store.dispatch("updateQuestion", this.currentQuestionID - 1);
    },
    reset() {}
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.myIntro:hover {
  background-color: #6a1b9a !important;
}

.myIntro {
  color: #fff;
  background-color: #2b7b72;
  border-style: solid;
  border-color: #AADACE;
  border-width: 14px;
  border-radius: 120px;
  height: 100%;
  width: 100%;
}

.myCounty:hover {
  background-color: #6a1b9a !important;
}

.myCounty {
  color: #fff;
  background-color: #2b7b72;
  border-style: solid;
  border-color: #AADACE;
  border-width: 12px;
  border-radius: 120px;
  height: 100%;
  width: 100%;
}

.mybtn:hover {
  background-color: #6a1b9a !important;
}

.mybtn {
  color: #fff;
  background-color: #2b7b72;
  border-style: solid;
  border-color: #AADACE;
  border-width: 14px;
  border-radius: 120px;
  height: 100%;
  width: 100%;
}

.victimBtn:hover {
  background-color: #d4f5f5 !important;
}

.victimBtn {
  color: #fff;
  background-color: #2b7b72;
  border-style: solid;
  border-color: #AADACE;
  border-width: 14px;
  border-radius: 120px;
  width: 90%;
  height: 100%;
}
</style>
