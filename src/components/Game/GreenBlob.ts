import { KeypressControls } from './Game';

export class GreenBlob {
    constructor(
        private ctx: CanvasRenderingContext2D,
        private canvasLimitX: number,
        private canvasLimitY: number,
        private x: number,
        private y: number,
        private radius: number,
        private color: string = 'green'
    ) {}

    handleControls(controls: KeypressControls) {
        let stepX = this.getControlPressed(controls.LEFT, controls.RIGHT, 5);
        let stepY = this.getControlPressed(controls.UP, controls.DOWN, 5);

        if (controls.LEFT) this.color = 'yellow';
        else if (controls.RIGHT) this.color = 'magenta';
        else if (controls.UP) this.color = 'red';
        else if (controls.DOWN) this.color = 'cyan';
        else this.color = 'green';

        this.x = this.handleLimits(this.x, stepX, this.canvasLimitX);
        this.y = this.handleLimits(this.y, stepY, this.canvasLimitY);
    }

    getControlPressed(
        ctrlDecrement: boolean,
        ctrlIncrement: boolean,
        stepValue: number
    ) {
        if (ctrlDecrement) {
            return stepValue * -1;
        }
        if (ctrlIncrement) {
            return stepValue;
        }
        return 0;
    }

    handleLimits(pos: number, step: number, limit: number) {
        if (pos - this.radius + step < 0) {
            pos = this.radius;
        } else if (pos + this.radius + step > limit) {
            pos = limit - this.radius;
        } else {
            pos += step;
        }
        return pos;
    }

    handleLimitsY(newY: number) {
        if (newY < 0) {
            return this.y + this.radius;
        } else if (newY > this.canvasLimitY) {
            return this.y - this.radius;
        } else {
            return newY;
        }
    }

    draw = (controls: KeypressControls) => {
        this.handleControls(controls);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
}
