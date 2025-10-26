import { assign, createMachine } from "xstate";
import { type Ev } from "./dialog.types";
interface Ctx {
  count: number;
}

// type AnswerEvent = { type: "ANSWER"; answerKey: string; value: string };
// type IncrementEvent = { type: "INCREMENT" };

export const makeDialogMachine = createMachine({
  types: {} as {
    context: Ctx;
    events: Ev;
  },
  id: "tmp",
  context: { count: 0 },
  on: {
    INCREMENT: {
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DECREMENT: {
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
    RESET: {
      actions: assign({
        count: () => 0,
      }),
    },
  },
});
