import React from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from './components/Canvas/Canvas';

const rootContainer = document.getElementById('root')!;
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <Canvas />
    </React.StrictMode>
);
