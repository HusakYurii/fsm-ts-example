import { NullState } from "./NullState";



export class StateMachine<T> implements HY.Core.IStateMachine {

    target: T;
    states: HY.Core.IState[];
    currentState?: HY.Core.IState;
    previousState?: HY.Core.IState;

    constructor(target: T) {
        this.target = target;
        this.states = [];
        this.currentState = undefined;
        this.previousState = undefined;
    }

    changeStateTo(name: string): void {
        const onExitFinished = () => {
            const newState = this.getStateByName(name);
            newState.onEnterState();
            this.swapStates(newState);
        };

        if (this.currentState) {
            this.currentState.onExitState(onExitFinished);
        }
        else {
            onExitFinished();
        }
    }

    registerStates(states: HY.Core.IState | HY.Core.IState[]): void {
        if (!Array.isArray(states)) {
            states = [states];
        }
        states.forEach((state) => this.states.push(state));
    }

    getStateByName(name: string): HY.Core.IState {
        const state = this.states.find((state) => state.name === name);
        if (!state) {
            return new NullState(name, this);
        }
        return state;
    }

    swapStates(newState: HY.Core.IState): void {
        this.previousState = this.currentState;
        this.currentState = newState;
        StateMachine.log(this.currentState, this.previousState);
    }

    static log(currState?: HY.Core.IState, previousState?: HY.Core.IState) {
        console.log(`%c State was change!
            previous state: ${previousState && previousState.name}
            current state: ${currState && currState.name}`, 'color: white; background: black; font-size: 15px');
    }
}