import { useEffect, useRef } from 'react';
import { Game } from '../Game/Game';
import './Canvas.scss';

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const CANVAS_WIDTH = 640;
    const CANVAS_HEIGHT = 640;

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
                game.draw();

                document.addEventListener('keydown', game.keypress);
                document.addEventListener('keyup', game.keyup);
            }
        }
    }, []);

    return (
        <>
            <h2>The Green Blob Game!!!</h2>
            <div>
                <canvas
                    id="canvas-app"
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                />
            </div>
        </>
    );
};
