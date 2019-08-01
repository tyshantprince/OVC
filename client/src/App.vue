/**
Author: Tyshan Prince (tyshantprince@gmail.com)
Date: July 09, 2019


Description:

Main component for application.

Setup vuex store for application state

Create new document in firestore to hold user report

*/


<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue"; // js framework
import Vuex from "vuex"; // state management
import XLSX from "xlsx"; // reads excel sheets
import axios from "axios";

const BASE_URL = "http://localhost:3000";
Vue.use(Vuex);

export default {
  name: "App",
  store: new Vuex.Store({
    state: {
      // state holds your application wide data
      currentQuestionId: 1,
      doc: {}, // reference to the current report document in Firestore
      QuestionList: [],
      AnswerList: [],
      UserReport: {
        safety: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. <br> A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios. <br> Although some of the things that you outline in your safety plan may seem obvious, its important to remeberthat in moments of crisis your brain doesn't function the same way as when your are calm.When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.<br>`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        finance: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. <br> A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios. <br> Although some of the things that you outline in your safety plan may seem obvious, its important to remeberthat in moments of crisis your brain doesn't function the same way as when your are calm.When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.<br>`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        housing: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. <br> A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios. <br> Although some of the things that you outline in your safety plan may seem obvious, its important to remeberthat in moments of crisis your brain doesn't function the same way as when your are calm.When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.<br>`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        family: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. <br> A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios. <br> Although some of the things that you outline in your safety plan may seem obvious, its important to remeberthat in moments of crisis your brain doesn't function the same way as when your are calm.When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.<br>`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        victim: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. <br> A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios. <br> Although some of the things that you outline in your safety plan may seem obvious, its important to remeberthat in moments of crisis your brain doesn't function the same way as when your are calm.When adrenaline is pumping through your veins it can be hrad to think clearly or make logical decisions about your safety. Having a safety plan laid out in advance can help protect yourself in those stressful moments.<br>`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        }
      }
    },
    actions: {
      // actions are used to commit mutations
      fetchSpreadsheet({ commit }) {
        var url = 
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSX7CTrX90Sld_BejSNpYGdlt4Aty4hkBlhiY8riBUrAKLiD32-EtmxLEvZ9Jgj0zyOI0PQ7ebHOnJ6/pub?output=xlsx";
        axios(url, { responseType: "arraybuffer" })
          .catch(function(err) {
            /* error in getting data */
          })
          .then(function(res) {
            /* parse the data when it is received */
            var data = new Uint8Array(res.data);
            var workbook = XLSX.read(data, { type: "array" });
            commit(
              "loadQuestions",
              XLSX.utils.sheet_to_json(workbook.Sheets.questions)
            );
            commit(
              "loadAnswers",
              XLSX.utils.sheet_to_json(workbook.Sheets.answers)
            );
          })
          .catch(function(err) {
            /* error in parsing */
          });
      },

      newReport({ commit }) {
        axios
          .post(`${BASE_URL}/api/UserReport/create`, {
            safety: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            intro: {
        NextSteps: [],
        FindHelp: [],
        MoreInfo: []
      },
            finance: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            housing: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            family: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            victim: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            }
          })
          .then(response => {
            commit("storeDocRef", response.data.UserReport._id);
          })
          .catch(err => Promise.reject(err.message));
      },

      updateQuestion({ commit }, questionID) {
        commit("updateQuestion", questionID);
      },

      MoreInfo({ commit }, data) {
        commit("appendMoreInfo", data);
      },
      FindHelp({ commit }, data) {
        commit("appendFindHelp", data);
      },
      NextSteps({ commit }, data) {
        commit("appendNextSteps", data);
      }
    },
    mutations: {
      // mutations are what actually alter your state
      loadQuestions(state, fetchedQuestions) {
        state.QuestionList = fetchedQuestions;
      },

      loadAnswers(state, fetchAnswers) {
        state.AnswerList = fetchAnswers;
      },
      storeDocRef(state, docID) {
        state.doc = docID;
      },

      updateQuestion(state, QuestionID) {
        state.currentQuestionId = QuestionID;
      },
      appendMoreInfo(state, data) {
        // axios
        //   .post(`${BASE_URL}/api/UserReport/update/${state.doc}`, {
        //     category: data.category,
        //     group: "MoreInfo",
        //     data: data.data
        //   })
        //   .then(response => {
        //     return response.data;
        //   })
        //   .catch(err => Promise.reject(err.message));

        switch(data.category){
          case 'safety':
            state.UserReport.safety.MoreInfo.push(data.data);
            break;
          case 'finance':
            state.UserReport.finance.MoreInfo.push(data.data);
            break;
          case 'housing':
            state.UserReport.housing.MoreInfo.push(data.data);
            break;
          case 'family':
            state.UserReport.family.MoreInfo.push(data.data);
            break;
          case 'victim':
            state.UserReport.victim.MoreInfo.push(data.data);
            break;
        }

      },

      appendFindHelp(state, data) {
        // axios
        //   .post(`${BASE_URL}/api/UserReport/update/${state.doc}`, {
        //     category: data.category,
        //     group: "FindHelp",
        //     FindHelp: data.data,
        //   })
        //   .then(response => {
        //     return response.data;
        //   })
        //   .catch(err => Promise.reject(err.message));

        switch(data.category){
          case 'safety':
            state.UserReport.safety.FindHelp.push(data.data);
            break;
          case 'finance':
            state.UserReport.finance.FindHelp.push(data.data);
            break;
          case 'housing':
            state.UserReport.housing.FindHelp.push(data.data);
            break;
          case 'family':
            state.UserReport.family.FindHelp.push(data.data);
            break;
          case 'victim':
            state.UserReport.victim.FindHelp.push(data.data);
            break;
        }
      },

      appendNextSteps(state, data) {
        // axios
        //   .post(`${BASE_URL}/api/UserReport/update/${state.doc}`, {
        //     category: data.category,
        //     group: "NextSteps",
        //     NextSteps: data.data,
        //   })
        //   .then(response => {
        //     return response.data;
        //   })
        //   .catch(err => Promise.reject(err.message));

        switch(data.category){
          case 'safety':
            state.UserReport.safety.NextSteps.push(data.data);
            break;
          case 'finance':
            state.UserReport.finance.NextSteps.push(data.data);
            break;
          case 'housing':
            state.UserReport.housing.NextSteps.push(data.data);
            break;
          case 'family':
            state.UserReport.family.NextSteps.push(data.data);
            break;
          case 'victim':
            state.UserReport.victim.NextSteps.push(data.data);
            break;
        }
      }
    },
    getters: {
      // getters allow you retrieve state within your components
      allQuestions(state) {
        return state.QuestionList;
      },
      allAnswers(state) {
        return state.AnswerList;
      },
      currentQuestionId(state) {
        return state.currentQuestionId;
      },
      getUserReport(state) {
        return state.UserReport;
      }
    }
  })
};
</script>

<style></style>
