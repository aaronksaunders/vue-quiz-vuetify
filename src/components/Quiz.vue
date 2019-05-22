<template>
  <v-layout align-center justify-center>
    <v-flex>
      <div v-if="introStage">
        <v-card>
          <v-flex pa-3>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Welcome to the Quiz: {{title}}</h3>
            </v-card-title>

            <v-card-actions>
              <v-btn color="green" @click="startQuiz">START!</v-btn>
              <v-btn flat color="orange">More Information</v-btn>
            </v-card-actions>
          </v-flex>
        </v-card>
      </div>

      <div v-if="questionStage">
        <question
          :question="questions[currentQuestion]"
          v-on:answer="handleAnswer"
          :question-number="currentQuestion+1"
        ></question>
      </div>

      <div
        v-if="resultsStage"
      >You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.</div>
    </v-flex>
  </v-layout>
</template>

<script>
import Question from "./Question";
import r from "../q";

export default {
  name: "Quiz",
  components: {
    Question
  },
  props: ["quizSource"],
  data() {
    return {
      introStage: false,
      questionStage: false,
      resultsStage: false,
      title: "",
      questions: [],
      currentQuestion: 0,
      answers: [],
      correct: 0,
      perc: null
    };
  },
  created() {
    this.title = r.title;
    this.questions = r.questions;
    this.introStage = true;

    // fetch(this.quizSource)
    //   .then(res => {
    //     debugger;
    //     return res.json();
    //   })
    //   .then(res => {
    //     this.title = res.title;
    //     this.questions = res.questions;
    //     this.introStage = true;
    //   })
    //   .catch(e => {
    //     debugger;
    //     console.log(e);
    //   });
  },
  methods: {
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
      console.log(
        "test" + JSON.stringify(this.questions[this.currentQuestion])
      );
    },
    handleAnswer(e) {
      console.log("answer event ftw", e);
      this.answers[this.currentQuestion] = e.answer;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      console.log("handle results");
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) this.correct++;
      });
      this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
      console.log(this.correct + " " + this.perc);
    }
  }
};
</script>
