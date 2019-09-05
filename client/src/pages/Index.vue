<template>
  <q-page class="q-pa-xl">
    <div class="flex flex-center q-pa-xl">
      <h1 class="text-center" style="color: #fff">Arizona Crime<br>Victim Help</h1>
    </div>
    <div class="flex flex-center"></div>
    <div class="flex flex-center">
      <q-btn
        @click="start"
        class="shadow-12"
        size="xl"
        style="background: #fff; color: #2b7b72"
        label="Click here to Begin"
        rounded
      />
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  methods: {
    start() {
      this.$router.push("triage");
    }
  }
};
</script>
