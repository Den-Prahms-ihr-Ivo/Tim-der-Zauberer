import { createActor } from "xstate";

import { makeDialogMachine } from "../dialogMachine";
import { counterFixtures } from "../../fixtures/counter.fixture";
import { type Ev } from "../dialog.types";

describe("counterMachine", () => {
  it("increments correctly", () => {
    const actor = createActor(makeDialogMachine).start();

    for (const event of counterFixtures.incrementSequence) {
      actor.send(event as Ev);
    }

    expect(actor.getSnapshot().context.count).toBe(2);
  });

  it("handles mixed increment/decrement sequence", () => {
    const actor = createActor(makeDialogMachine).start();

    for (const event of counterFixtures.mixedSequence) {
      actor.send(event as Ev);
    }

    expect(actor.getSnapshot().context.count).toBe(1);
  });

  it("resets correctly", () => {
    const actor = createActor(makeDialogMachine).start();

    for (const event of counterFixtures.resetSequence) {
      actor.send(event as Ev);
    }

    expect(actor.getSnapshot().context.count).toBe(0);
  });
});
