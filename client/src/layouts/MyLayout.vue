<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #2b7b72" class="foundationFont">
    <q-header style="background-color: #2b7b72; color: #fff">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="flex flex-center">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>OVC</q-item-label>
        <q-item clickable tag="a" @click="goHome">
          <q-item-section avatar>
            <q-icon name="domain" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>OCV.home.org</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="goTriage">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Triage</q-item-label>
            <q-item-label caption>OVC.Triage.org</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="goReport">
          <q-item-section avatar>
            <q-icon name="list_alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Report</q-item-label>
            <q-item-label caption>OVC.Report.org</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goTriage() {
      this.$router.push("triage");
    },
    goReport() {
      this.$router.push("report");
    }
  }
};
</script>

<style>
.foundationFont{
  font-family: foundationFont;
}
</style>
