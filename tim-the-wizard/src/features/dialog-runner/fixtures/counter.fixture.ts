export const counterFixtures = {
  defaultContext: { count: 0 },
  incrementSequence: [{ type: "INCREMENT" }, { type: "INCREMENT" }],
  mixedSequence: [
    { type: "INCREMENT" },
    { type: "INCREMENT" },
    { type: "DECREMENT" },
  ],
  resetSequence: [{ type: "INCREMENT" }, { type: "RESET" }],
};
