

export abstract class AbstractState implements HY.Core.IState {
    name: string;
    fsm: HY.Core.IStateMachine;

    constructor(name: string, fsm: HY.Core.IStateMachine) {
        this.name = name;
        this.fsm = fsm;
    }

    abstract onEnterState(): void;

    abstract onExitState(onFinish: () => void): void;

    goToNextState(stateName: string): void {
        this.fsm.changeStateTo(stateName);
    }
}