const data = {
  title: "Quiz about Foo",
  questions: [
    { text: "What is your name", type: "FillInTheBlank", answer: true },
    { text: "What is your bio", type: "FillInTheBlankLarge", answer: true },
    { text: "Is true true?", type: "TrueFalse", answer: true },
    { text: "Is false true?", type: "TrueFalse", answer: false },
    {
      text: "What is the best beer?",
      type: "MultipleChoice",
      answers: ["Coors", "Miller", "Bud", "Anchor Steam"],
      answer: "Anchor Steam"
    },
    {
      text: "What is the best cookie?",
      type: "MultipleChoice",
      answers: ["Chocolate Chip", "Sugar", "Beer"],
      answer: "Sugar"
    }
  ]
};
export default data;
