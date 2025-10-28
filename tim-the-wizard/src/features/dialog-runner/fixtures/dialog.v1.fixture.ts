// src/features/branch2/fixtures/branch2.fixtures.ts
export const dialogFixture = {
  // Start → yesPath → resultYes
  seq_yes_yes: [
    { type: "PROVIDE_Q1", value: "yes" } as const,
    { type: "PROVIDE_Q2", value: "yes" } as const,
  ],
  // Start → yesPath → resultNo
  seq_yes_no: [
    { type: "PROVIDE_Q1", value: "yes" } as const,
    { type: "PROVIDE_Q2", value: "no" } as const,
  ],
  // Start → noPath → resultYes
  seq_no_yes: [
    { type: "PROVIDE_Q1", value: "no" } as const,
    { type: "PROVIDE_Q2", value: "yes" } as const,
  ],
  // Start → noPath → resultNo
  seq_no_no: [
    { type: "PROVIDE_Q1", value: "no" } as const,
    { type: "PROVIDE_Q2", value: "no" } as const,
  ],
} as const;
