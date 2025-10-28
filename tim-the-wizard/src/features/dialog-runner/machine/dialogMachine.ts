import { assign, createMachine } from "xstate";
import { type Ev, type Answer } from "./dialog.types";

// type AnswerEvent = { type: "ANSWER"; answerKey: string; value: string };
// type IncrementEvent = { type: "INCREMENT" };

interface Ctx {
  q1?: Answer;
  q2?: Answer;
}

export const dialogMachine = createMachine({
  types: {} as {
    context: Ctx;
    events: Ev;
  },
  id: "branch2",
  context: {},
  initial: "start",
  states: {
    start: {
      on: {
        PROVIDE_Q1: [
          {
            guard: ({ event }) => event.value === "yes",
            target: "yesPath",
            actions: assign({
              q1: ({ event }) => event.value,
            }),
          },
          {
            target: "noPath",
            actions: assign({
              q1: ({ event }) => event.value,
            }),
          },
        ],
      },
    },

    yesPath: {
      initial: "q2",
      states: {
        q2: {
          on: {
            PROVIDE_Q2: [
              {
                guard: ({ event }) => event.value === "yes",
                target: "resultYes",
                actions: assign({ q2: ({ event }) => event.value }),
              },
              {
                target: "resultNo",
                actions: assign({ q2: ({ event }) => event.value }),
              },
            ],
          },
        },
        resultYes: { type: "final" },
        resultNo: { type: "final" },
      },
    },

    noPath: {
      initial: "q2",
      states: {
        q2: {
          on: {
            PROVIDE_Q2: [
              {
                guard: ({ event }) => event.value === "yes",
                target: "resultYes",
                actions: assign({ q2: ({ event }) => event.value }),
              },
              {
                target: "resultNo",
                actions: assign({ q2: ({ event }) => event.value }),
              },
            ],
          },
        },
        resultYes: { type: "final" },
        resultNo: { type: "final" },
      },
    },
  },
});
