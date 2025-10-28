import { createActor } from "xstate";
import { dialogMachine } from "../dialogMachine";
import { dialogFixture } from "../../fixtures/dialog.v1.fixture";

describe("dialogMachine", () => {
  it("routes yes → yes", () => {
    const actor = createActor(dialogMachine).start();
    dialogFixture.seq_yes_yes.forEach((e) => actor.send(e));
    expect(actor.getSnapshot().matches("yesPath.resultYes")).toBe(true);
    expect(actor.getSnapshot().context).toEqual({ q1: "yes", q2: "yes" });
  });

  it("routes yes → no", () => {
    const actor = createActor(dialogMachine).start();
    dialogFixture.seq_yes_no.forEach((e) => actor.send(e));
    expect(actor.getSnapshot().matches("yesPath.resultNo")).toBe(true);
    expect(actor.getSnapshot().context).toEqual({ q1: "yes", q2: "no" });
  });

  it("routes no → yes", () => {
    const actor = createActor(dialogMachine).start();
    dialogFixture.seq_no_yes.forEach((e) => actor.send(e));
    expect(actor.getSnapshot().matches("noPath.resultYes")).toBe(true);
    expect(actor.getSnapshot().context).toEqual({ q1: "no", q2: "yes" });
  });

  it("routes no → no", () => {
    const actor = createActor(dialogMachine).start();
    dialogFixture.seq_no_no.forEach((e) => actor.send(e));
    expect(actor.getSnapshot().matches("noPath.resultNo")).toBe(true);
    expect(actor.getSnapshot().context).toEqual({ q1: "no", q2: "no" });
  });
});
