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
    <router-view /> // router component for page navigation
  </div>
</template>

<script>
import Vue from "vue"; // js framework
import Vuex from "vuex"; // state management
import axios from "axios"; // perform network calls
import XLSX from "xlsx"; // reads excel sheets

Vue.use(Vuex);

export default {
  name: "App",
  store: new Vuex.Store({
    state: {            // state holds your application wide data
      currentQuestionId: 1,
      doc: {}, // reference to the current report document in Firestore
      QuestionList: [],
      AnswerList: [],
      UserReport: {
        DothisNow: [],
        NextSteps: [],
        Resources: []
      }
    },
    actions: { // actions are used to commit mutations
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

      // newReport({ commit }) {
      //   console.log(db);
      //   db.collection("Reports")
      //     .add({
      //       DoThisNow: [],
      //       NextSteps: [],
      //       Resources: []
      //     })
      //     .then(function(docRef) {
      //       commit("storeDocRef", docRef.id);
      //     });
      // },

      updateQuestion({ commit }, questionID) {
        commit("updateQuestion", questionID);
      },
      

      Resource({ commit }, data) {
        commit("appendResource", data);
      },
      DoNow({ commit }, data) {
        commit("appendDoNow", data);
      },
      NextSteps({ commit }, data) {
        commit("appendNextSteps", data);
      }
    },
    mutations: { // mutations are what actually alter your state
      loadQuestions(state, fetchedQuestions) {
        state.QuestionList = fetchedQuestions;
      },

      loadAnswers(state, fetchAnswers) {
        state.AnswerList = fetchAnswers;
      },
      // storeDocRef(state, docID) {
      //   state.doc = db.collection("Reports").doc(docID);
      // },

      updateQuestion(state, QuestionID) {
        state.currentQuestionId = QuestionID;
      },
      appendResource(state, data) {
        // state.doc.update({
        //   Resources: firebase.firestore.FieldValue.arrayUnion(data)
        // });
        state.UserReport.Resources.push(data.data);
      }, 

    appendDoNow(state, data) {
      // state.doc.update({
      //   DoThisNow: firebase.firestore.FieldValue.arrayUnion(data)
      // });

      state.UserReport.Resources.push(data.data);
    },

    appendNextSteps(state, data) {
      // state.doc.update({
      //   NextSteps: firebase.firestore.FieldValue.arrayUnion(data)
      // });

      state.UserReport.Resources.push(data);
    },
    },
    getters: { // getters allow you retrieve state within your components
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