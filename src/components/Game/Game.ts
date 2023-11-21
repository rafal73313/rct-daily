import { Key } from 'react';
import { GreenBlob } from './GreenBlob';

export interface KeypressControls {
    LEFT: boolean;
    RIGHT: boolean;
    UP: boolean;
    DOWN: boolean;
    SPACE: boolean;
}

export class Game {
    greenBlob: GreenBlob;
    controls: KeypressControls = {
        LEFT: false,
        RIGHT: false,
        UP: false,
        DOWN: false,
        SPACE: false
    };

    constructor(
        private ctx: CanvasRenderingContext2D,
        private canvasWidth: number,
        private canvasHeight: number
    ) {
        this.greenBlob = new GreenBlob(
            ctx,
            this.canvasWidth,
            this.canvasHeight,
            100,
            100,
            50
        );
        requestAnimationFrame(this.draw);
    }

    handleControlKeys = (e: KeyboardEvent, isPressed: boolean) => {
        switch (e.key) {
            case 'ArrowUp':
                this.controls.UP = isPressed;
                break;
            case 'ArrowDown':
                this.controls.DOWN = isPressed;
                break;
            case 'ArrowLeft':
                this.controls.LEFT = isPressed;
                break;
            case 'ArrowRight':
                this.controls.RIGHT = isPressed;
                break;
        }
    };

    keypress = (e: KeyboardEvent) => {
        this.handleControlKeys(e, true);
    };

    keyup = (e: KeyboardEvent) => {
        this.handleControlKeys(e, false);
    };

    draw = () => {
        requestAnimationFrame(this.draw);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.greenBlob.draw(this.controls);
    };
}
