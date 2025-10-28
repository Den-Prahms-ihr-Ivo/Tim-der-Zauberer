// Context, Events, Node, Edge

export type Answer = "yes" | "no";

export type Ev =
  | { type: "PROVIDE_Q1"; value: Answer }
  | { type: "PROVIDE_Q2"; value: Answer };
