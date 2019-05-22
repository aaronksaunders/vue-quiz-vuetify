<template>
  <v-card>
    <v-flex pa-3>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Question {{ questionNumber }}: {{ question.text }}</h3>
      </v-card-title>

      <div v-if="question.type === 'TrueFalse'">
        <v-flex pa-5>
          <v-switch
            name="currentQuestion"
            v-model="answer"
            :label="`${answer ? answer.toString() : false}`"
            :value="true"
          ></v-switch>
        </v-flex>
      </div>

      <div v-if="question.type === 'FillInTheBlank'">
        <v-flex pa-5>
          <v-text-field
            placeholder="Placeholder"
            name="currentQuestion"
            id="trueAnswer"
            v-model="answer"
            value
          />
        </v-flex>
      </div>

      <div v-if="question.type === 'FillInTheBlankLarge'">
        <v-flex pa-2>
          <v-textarea name="currentQuestion" label="Default style" v-model="answer" value></v-textarea>
        </v-flex>
      </div>

      <div v-if="question.type === 'MultipleChoice'">
        <v-flex pa-5>
          <div v-for="(mcanswer,index) in question.answers" :key="index">
            <v-radio
              :id="'answer'+index"
              name="currentQuestion"
              v-model="answer"
              :value="mcanswer"
              :label="mcanswer"
            ></v-radio>
          </div>
        </v-flex>
      </div>

      <v-card-actions>
        <v-btn color="green" @click="submitAnswer">Answer</v-btn>
        <v-btn @click="clearAnswer">Clear</v-btn>
      </v-card-actions>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      answer: ""
    };
  },
  props: ["question", "question-number"],
  methods: {
    clearAnswer() {},
    submitAnswer: function() {
      if (this.answer == null && this.question.type === "TrueFalse") {
        this.answer = false;
      }
      this.$emit("answer", { answer: this.answer });
      this.answer = null;
    }
  }
};
</script>

<style>
</style>
