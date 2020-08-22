declare namespace HY {
    namespace Core {
        export interface IState {
            name: string;
            fsm: IStateMachine;

            onEnterState: () => void;
            onExitState: (onFinish: () => void) => void;
            goToNextState: (stateName: string) => void;
        }

        export interface IStateMachine {
            target: { [key: string]: any };
            states: IState[];
            currentState?: IState;
            previousState?: IState;

            changeStateTo: (name: string) => void;
            registerStates: (states: IState | IState[]) => void;
            getStateByName: (name: string) => IState;
            swapStates: (newState: IState) => void;
        }
    }
}