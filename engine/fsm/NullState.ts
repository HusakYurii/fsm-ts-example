import { AbstractState } from "./AbstractState";

export class NullState extends AbstractState {
    name: string;
    fsm: HY.Core.IStateMachine;

    constructor(name: string, fsm: HY.Core.IStateMachine) {
        super(name, fsm);
        this.name = name;
        this.fsm = fsm;
    }

    onEnterState() {
        throw new Error(`${this.name} state was not found, NullState is used`);
    }


    onExitState(onFinish: () => void): void {
        throw new Error(`${this.name} state was not found, NullState is used`);
    }
}