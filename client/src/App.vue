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
        Safety: {
          about: `A saftey plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave. Safety planning involves how to cope with emotions, tell friends, and family about the abuse,take legal action and more. A good safety plan will have all of the vital information you need and be tilored to your unique situation, and will help walk you through different scenarios.`,
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        Finance: {
          about: '',
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        Housing: {
          about: '',
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        Family: {
          about: '',
          NextSteps: [],
          FindHelp: [],
          MoreInfo: []
        },
        VictimRights: {
          about: '',
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
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQz9V3t_yg_yCYRKQlWfgEF5FNTugCmzGKNR2oWARQlCX63I9aodluv0Txr7Kcyw/pub?output=xlsx";
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
            Safety: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            intro: {
        NextSteps: [],
        FindHelp: [],
        MoreInfo: []
      },
            Finance: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            Housing: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            Family: {
              NextSteps: [],
              FindHelp: [],
              MoreInfo: []
            },
            VictimRights: {
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
          case 'Safety':
            state.UserReport.Safety.MoreInfo.push(data.data);
            break;
          case 'Finance':
            state.UserReport.Finance.MoreInfo.push(data.data);
            break;
          case 'Housing':
            state.UserReport.Housing.MoreInfo.push(data.data);
            break;
          case 'Family':
            state.UserReport.Family.MoreInfo.push(data.data);
            break;
          case 'VictimRights':
            state.UserReport.VictimRights.MoreInfo.push(data.data);
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
          case 'Safety':
            state.UserReport.Safety.FindHelp.push(data.data);
            break;
          case 'Finance':
            state.UserReport.Finance.FindHelp.push(data.data);
            break;
          case 'Housing':
            state.UserReport.Housing.FindHelp.push(data.data);
            break;
          case 'Family':
            state.UserReport.Family.FindHelp.push(data.data);
            break;
          case 'VictimRights':
            state.UserReport.VictimRights.FindHelp.push(data.data);
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
          case 'Safety':
            state.UserReport.Safety.NextSteps.push(data.data);
            break;
          case 'Finance':
            state.UserReport.Finance.NextSteps.push(data.data);
            break;
          case 'Housing':
            state.UserReport.Housing.NextSteps.push(data.data);
            break;
          case 'Family':
            state.UserReport.Family.NextSteps.push(data.data);
            break;
          case 'VictimRights':
            state.UserReport.VictimRights.NextSteps.push(data.data);
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
