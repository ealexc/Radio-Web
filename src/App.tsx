// App.tsx
import React from 'react';
import Player from './components/Player';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1 className='radio'>Radio </h1>
            <h1 className='web'>Web</h1>
            <Player />
        </div>
    );
};

export default App;
