import { AbstractState } from "../engine/fsm/AbstractState";
import { StateMachine } from "../engine/fsm/StateMachine";

class LoadState extends AbstractState {
    constructor(name: string, fsm: HY.Core.IStateMachine) {
        super(name, fsm)
    }

    onEnterState(): void {
        console.log("Start loading....");
    };

    onExitState(onFinish: () => void): void {
        console.log("Finish loading....");
        onFinish();
    };
}

class Game {
    name: string;
    canvas: HTMLCanvasElement;

    constructor(name: string, canvas: HTMLCanvasElement) {
        this.name = name;
        this.canvas = canvas;
    }
}

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const game = new Game("MainGame", canvas);

const fsm = new StateMachine<Game>(game);
fsm.registerStates(new LoadState("LoadState", fsm));
fsm.changeStateTo("LoadState");


