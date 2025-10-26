// Context, Events, Node, Edge

type State = {
  on: Record<string, Record<"target", string>>;
};

export type DialogMachineContext = {
  id: string;
  initial: string;
  states: Record<string, State>;
};

export type Ev =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };
