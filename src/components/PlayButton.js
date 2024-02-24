import '../css/PlayButton.css'
import { useState } from 'react';

function PlayButton({children, onPlay, onPause}) {
    const [playing, setPlaying]= useState(false); //don't use this approach
    function handleClick(e) {
        
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }
    return (
        <button onClick={handleClick}>{children} : {playing?'||':'P'}</button>
    )
}

export default PlayButton;

// in javascript function can also be a variable