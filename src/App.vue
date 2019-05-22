<template>
  <v-app id="app">
    <v-content>
      <v-container fluid fill-height>
        <Quiz quizSource="q.json"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Quiz from "./components/Quiz";

export default {
  name: "App",
  components: {
    Quiz
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
