// Player.tsx
import React, { useState } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { stations } from '../station';
import "./Player.css"; // Archivo CSS para estilos personalizados

const Player: React.FC = () => {
    const [station, setStation] = useState(0);

    const handleClickNext = () => {
        setStation((currentTrack) => currentTrack < stations.length -1 ? currentTrack +1 : 0);
    };

    const handleClickPrevious = () => {
        setStation((currentTrack) => currentTrack === 0 ? stations.length -1 : currentTrack -1);
    };

    return (
        <div className="player-container">
            <div className="station-container">
                <img src={stations[station].albumArt} alt={stations[station].name} className="station-image" />
            </div>
            <AudioPlayer 
                src={stations[station].path}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                showSkipControls={true}
                showJumpControls={false}
                showFilledVolume={true}
                className="audio-player"
            />
        </div>
    );
};

export default Player;
