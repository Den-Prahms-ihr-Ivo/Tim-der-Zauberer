// import { createActor } from "xstate";
// import { makeDialogMachine } from "../dialogMachine";
// import def from "../../fixtures/eligibility.v1.json";

describe("dialogMachine routing", () => {
  it("routes female users to the female end node", () => {
    expect(false).toBeTruthy();
    /*
    const actor = createActor(makeDialogMachine(def as any)).start();

    // Simulate answering the age question
    actor.send({ type: "ANSWER", answerKey: "age", value: 16 });
    actor.send({ type: "NEXT" });

    // Expect the machine to move to the "underage" node
    const state = actor.getSnapshot();
    expect(state.context.currentId).toBe("underage");
    */
  });
});
